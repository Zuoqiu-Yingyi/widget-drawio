/**
 * Copyright (c) 2006-2018, JGraph Ltd
 * Copyright (c) 2006-2018, Gaudenz Alder
 * 
 * Realtime collaboration for any file.
 */
DrawioFileSync = function(file)
{
	mxEventSource.call(this);

	this.lastActivity = Date.now();
	this.clientId = Editor.guid();
	this.ui = file.ui;
	this.file = file;

    // Listens to online state changes
	this.onlineListener = mxUtils.bind(this, function()
	{
		this.updateOnlineState();

		if (this.isConnected())
		{
			this.fileChangedNotify();
		}
	});
    
	mxEvent.addListener(window, 'online', this.onlineListener);
	this.file.addListener('realtimeStateChanged', this.onlineListener);
	
    // Listens to visible state changes
	this.visibleListener = mxUtils.bind(this, function()
	{
		if (document.visibilityState == 'hidden')
		{
			if (this.isConnected())
			{
				this.stop();
			}
		}
		else
		{
			this.start();
		}
	});
    
	mxEvent.addListener(document, 'visibilitychange', this.visibleListener);
	
    // Listens to visible state changes
	this.activityListener = mxUtils.bind(this, function(evt)
	{
		this.lastActivity = Date.now();
		this.start();
	});

	mxEvent.addListener(document, (mxClient.IS_POINTER) ? 'pointermove' : 'mousemove', this.activityListener);
	mxEvent.addListener(document, 'keypress', this.activityListener);
	mxEvent.addListener(window, 'focus', this.activityListener);
	
	if (!mxClient.IS_POINTER && mxClient.IS_TOUCH)
	{
		mxEvent.addListener(document, 'touchstart', this.activityListener);
		mxEvent.addListener(document, 'touchmove', this.activityListener);	
	}

	// Listens to fast sync activitiy
	this.file.addListener('realtimeMessage', this.activityListener);

	// Listens to errors in the pusher API
	this.pusherErrorListener = mxUtils.bind(this, function(err)
	{
		if (err.error != null && err.error.data != null &&
			err.error.data.code === 4004)
		{
			EditorUi.logError('Error: Pusher Limit', null, this.file.getId());
		}
	});

    // Listens to connection state changes
	this.connectionListener = mxUtils.bind(this, function()
	{
		this.updateOnlineState();
		this.updateStatus();
		
		if (this.isConnected())
		{
			if (!this.announced)
			{
				var user = this.file.getCurrentUser();
				var join = {a: 'join'};
				
				if (user != null)
				{
					join.name = encodeURIComponent(user.displayName);
					join.uid = user.id;
				}

				mxUtils.post(EditorUi.cacheUrl, this.getIdParameters() +
					'&msg=' + encodeURIComponent(this.objectToString(
					this.createMessage(join))));
				this.file.stats.msgSent++;
				this.announced = true;
			}
			else
			{
				// Catchup on any lost edits
				this.fileChangedNotify();
			}
		}
	});
	
	// Listens to messages
	this.changeListener = mxUtils.bind(this, function(data)
	{
		this.file.stats.msgReceived++;
		this.lastActivity = Date.now();

		if (this.enabled && !this.file.inConflictState &&
			!this.file.redirectDialogShowing)
		{
			try
			{
				var msg = this.stringToObject(data);
				
				if (msg != null)
				{
					EditorUi.debug('Sync.message', [this], msg, data.length, 'bytes');

					// Handles protocol mismatch
					if (msg.v > DrawioFileSync.PROTOCOL)
					{
						this.file.redirectToNewApp(mxUtils.bind(this, function()
						{
							// Callback adds cancel option
						}));
					}
					else if (msg.v === DrawioFileSync.PROTOCOL && msg.d != null)
					{
						this.handleMessageData(msg.d);
					}
				}
			}
			catch (e)
			{
				// Checks if file was changed
				if (this.isConnected())
				{
					this.fileChangedNotify();
				}
				
				// NOTE: Probably UTF16 in username for join/leave message causing this
//				var len = (data != null) ? data.length : 'null';
//				
//				EditorUi.logError('Protocol Error ' + e.message,
//					null, 'data_' + len + '_file_' + this.file.getHash() +
//					'_client_' + this.clientId);
//				
//				if (window.console != null)
//				{
//					console.log(e);
//				}
			}
		}
	});
};

/**
 * Protocol version to be added to all communcations and diffs to check
 * if a client is out of date and force a refresh. Note that this must
 * be incremented if new messages are added or the format is changed.
 * This must be numeric to compare older vs newer protocol versions.
 */
DrawioFileSync.PROTOCOL = 6;

/**
 * Enables socket connections.
 */
DrawioFileSync.ENABLE_SOCKETS = urlParams['sockets'] != '0';

//Extends mxEventSource
mxUtils.extend(DrawioFileSync, mxEventSource);

/**
 * Maximum size in bytes for cache values.
 */
DrawioFileSync.prototype.maxCacheEntrySize = 1000000;

/**
 * Maximum size in bytes for fast sync messages via Pusher.
 * Use 0 to disable message size check. Default is 9KB.
 */
DrawioFileSync.prototype.maxSyncMessageSize = 9000;

/**
 * Delay for fast sync message sending in ms. Larger
 * values help to group sending out changes, smaller
 * values reduce latency.
 */
DrawioFileSync.prototype.syncSendMessageDelay = 100;

/**
 * Delay for received sync message processing in ms.
 * Larger values help to sort and merge messages,
 * smaller values reduce latency.
 */
DrawioFileSync.prototype.syncReceiveMessageDelay = 300;

/**
 * Inactivity time to drop remote changes that have not been saved
 * to the file. Larger values give time to save, smaller values
 * require less inactivity time and give better responsiveness.
 */
DrawioFileSync.prototype.consistencyCheckDelay = 10000;

/**
 * Counter for local message IDs.
 */
DrawioFileSync.prototype.syncChangeCounter = 0;

/**
 * Specifies if notifications should be sent and received for changes.
 */
DrawioFileSync.prototype.enabled = true;

/**
 * True if a change event is fired for a remote change.
 */
DrawioFileSync.prototype.updateStatusInterval = 10000;

/**
 * Holds the channel ID for sending and receiving change notifications.
 */
DrawioFileSync.prototype.channelId = null;

/**
 * Holds the channel ID for sending and receiving change notifications.
 */
DrawioFileSync.prototype.channel = null;

/**
 * Specifies if descriptor change events should be ignored.
 */
DrawioFileSync.prototype.catchupRetryCount = 0;

/**
 * Specifies if descriptor change events should be ignored.
 */
DrawioFileSync.prototype.maxCatchupRetries = 15;

/**
 * Specifies if descriptor change events should be ignored.
 */
DrawioFileSync.prototype.maxCacheReadyRetries = 1;

/**
 * Specifies if descriptor change events should be ignored.
 */
DrawioFileSync.prototype.cacheReadyDelay = 700;

/**
 * Specifies if descriptor change events should be ignored.
 */
DrawioFileSync.prototype.maxOptimisticReloadRetries = 6;

/**
 * Inactivity timeout is 30 minutes.
 */
DrawioFileSync.prototype.inactivityTimeoutSeconds = 1800;

/**
 * Specifies if notifications should be sent and received for changes.
 */
DrawioFileSync.prototype.lastActivity = null;

/**
 * Adds all listeners.
 */
DrawioFileSync.prototype.start = function()
{
	if (this.channelId == null)
	{
		this.channelId = this.file.getChannelId();
	}
	
	if (this.key == null)
	{
		this.key = this.file.getChannelKey();
	}
	
	if (this.pusher == null && this.channelId != null &&
		document.visibilityState != 'hidden') 
	{
		this.pusher = this.ui.getPusher();
		
		if (this.pusher != null)
		{
			try
			{
				// Error listener must be installed before trying to create channel
				if (this.pusher.connection != null)
				{
					this.pusher.connection.bind('error', this.pusherErrorListener);
				}
			}
			catch (e)
			{
				// ignore
			}
			
			try
			{
				this.pusher.connect();
				this.channel = this.pusher.subscribe(this.channelId);
				EditorUi.debug('Sync.start', [this,
					'v' + DrawioFileSync.PROTOCOL],
					'rev', this.file.getCurrentRevisionId());
			}
			catch (e)
			{
				// ignore
			}

			this.installListeners();
		}

		window.setTimeout(mxUtils.bind(this, function()
		{
			this.lastModified = this.file.getLastModifiedDate();
			this.lastActivity = Date.now();
			this.resetUpdateStatusThread();
			this.updateOnlineState();
			this.updateStatus();
		}, 0));
	}

	this.updateRealtime();
};

/**
 * Draw function for the collaborator list.
 */
DrawioFileSync.prototype.updateRealtime = function()
{
	if (this.file.isRealtimeEnabled() && this.file.isRealtimeSupported())
	{
		if (this.file.ownPages == null)
		{
			var data = this.ui.getXmlFileData();
			this.file.ownPages = this.ui.getPagesForNode(data);
			this.file.snapshot = data;
		}
	}
	else if (this.file.ownPages != null)
	{
		this.checkConsistency();
		this.file.ownPages = null;
		this.file.snapshot = null;
	}

	if (DrawioFileSync.ENABLE_SOCKETS && this.file.ownPages != null &&
		this.p2pCollab == null && this.channelId != null)
	{
		this.p2pCollab = new P2PCollab(this.ui, this, this.channelId);
		this.p2pCollab.joinFile();
	}
	else if (this.file.ownPages == null && this.p2pCollab != null)
	{
		this.p2pCollab.destroy();
		this.p2pCollab = null;
	}
};

/**
 * Draw function for the collaborator list.
 */
DrawioFileSync.prototype.isConnected = function()
{
	if (this.pusher != null && this.pusher.connection != null)
	{
		return this.pusher.connection.state == 'connected';
	}
	else
	{
		return false;
	}
};

/**
 * Draw function for the collaborator list.
 */
DrawioFileSync.prototype.updateOnlineState = function()
{
	//For RT in embeded mode, we don't need this icon
	if (urlParams['embedRT'] == '1')
	{
		return;
	}

	var addClickHandler = mxUtils.bind(this, function(elt)
	{
		mxEvent.addListener(elt, 'click', mxUtils.bind(this, function(evt)
		{
			if (this.file.isRealtimeEnabled() && this.file.isRealtimeSupported())
			{
				var state = this.file.getRealtimeState();
				var err = this.file.getRealtimeError();

				this.ui.showError(mxResources.get('realtimeCollaboration'),
				mxUtils.htmlEntities(state == 1 ? mxResources.get('online') :
					((err != null && err.message != null) ?
					err.message : mxResources.get('disconnected'))));
			}
			else
			{
				this.enabled = !this.enabled;
				this.ui.updateButtonContainer();
				this.resetUpdateStatusThread();
				this.updateOnlineState();
				this.updateStatus();
				
				if (!this.file.inConflictState && this.enabled)
				{
					this.fileChangedNotify();
				}
			}
		}));
	});

	if (this.ui.toolbarContainer != null && this.collaboratorsElement == null)
	{
		var elt = document.createElement('a');
		elt.className = 'geButton';
		elt.style.position = 'absolute';
		elt.style.display = 'inline-block';
		elt.style.verticalAlign = 'bottom';
		elt.style.color = '#666';
		elt.style.top = '6px';
		elt.style.right = (uiTheme != 'atlas') ?  '70px' : '50px';
		elt.style.padding = '2px';
		elt.style.fontSize = '8pt';
		elt.style.verticalAlign = 'middle';
		elt.style.textDecoration = 'none';
		elt.style.backgroundPosition = 'center center';
		elt.style.backgroundRepeat = 'no-repeat';
		elt.style.backgroundSize = '16px 16px';
		elt.style.width = '16px';
		elt.style.height = '16px';
		mxUtils.setOpacity(elt, 60);
		
		if (uiTheme == 'dark')
		{
			elt.style.filter = 'invert(100%)';
		}
		
		// Prevents focus
		mxEvent.addListener(elt, (mxClient.IS_POINTER) ? 'pointerdown' : 'mousedown',
			mxUtils.bind(this, function(evt)
		{
			evt.preventDefault();
		}));
		
		addClickHandler(elt);
		this.ui.toolbarContainer.appendChild(elt);
		this.collaboratorsElement = elt;
	}
	
	if (this.collaboratorsElement != null)
	{
		var status = '';
		var src = Editor.cloudImage;
		
		if (!this.enabled)
		{
			status = mxResources.get('disconnected');
			src = Editor.cloudOffImage;
		}
		else if (this.file.invalidChecksum)
		{
			status = mxResources.get('error') + ': ' + mxResources.get('checksum');
			src = Editor.syncProblemImage;
		}
		else if (this.ui.isOffline(true) || !this.isConnected())
		{
			status = mxResources.get('offline');
			src = Editor.cloudOffImage;
		}
		else
		{
			status = mxResources.get('online');

			if (this.file.isRealtimeEnabled() && this.file.isRealtimeSupported())
			{
				var err = this.file.getRealtimeError();
				var state = this.file.getRealtimeState();
				status = mxResources.get('realtimeCollaboration');
		
				if (state == 1)
				{
					src = Editor.syncImage;
				}
				else
				{
					src = Editor.syncProblemImage;
		
					if (err != null && err.message != null)
					{
						status += ' (' + err.message + ')';
					}
					else
					{
						status += ' (' + mxResources.get('disconnected') + ')';
					}
				}
			}
		}

		this.collaboratorsElement.setAttribute('title', status);
		this.collaboratorsElement.style.backgroundImage = 'url(' + src + ')';
	}
};

/**
 * Updates the status bar with the latest change.
 */
DrawioFileSync.prototype.updateStatus = function()
{
	if (this.isConnected() && this.lastActivity != null &&
		(Date.now() - this.lastActivity) / 1000 >
		this.inactivityTimeoutSeconds)
	{
		this.stop();
	}
	
	if (!this.file.isModified() && !this.file.inConflictState &&
		this.file.autosaveThread == null && !this.file.savingFile &&
		!this.file.redirectDialogShowing)
	{
		if (this.enabled && this.ui.statusContainer != null)
		{
			// LATER: Write out modified date for more than 2 weeks ago
			var str = this.ui.timeSince(new Date(this.lastModified));
			
			if (str == null)
			{
				str = mxResources.get('lessThanAMinute');
			}
			
			var history = this.file.isRevisionHistorySupported();

			// Consumed and displays last message
			var msg = this.lastMessage;
			this.lastMessage = null;
			
			if (msg != null && msg.length > 40)
			{
				msg = msg.substring(0, 40) + '...';
			}

			var label = mxResources.get('lastChange', [str]);
			
			this.ui.editor.setStatus('<div title="'+ mxUtils.htmlEntities(label) + '">' + mxUtils.htmlEntities(label) + '</div>' +
				(this.file.isEditable() ? '' : '<div class="geStatusAlert">' + mxUtils.htmlEntities(mxResources.get('readOnly')) + '</div>') +
				(this.isConnected() ? '' : '<div class="geStatusAlert">' + mxUtils.htmlEntities(mxResources.get('disconnected')) + '</div>') +
				((msg != null) ? ' <span title="' + mxUtils.htmlEntities(msg) + '">(' + mxUtils.htmlEntities(msg) + ')</span>' : ''));
			var links = this.ui.statusContainer.getElementsByTagName('div');
			
			if (links.length > 0 && history)
			{
				links[0].style.display = 'inline-block';

				if (history)
				{
					links[0].style.cursor = 'pointer';
					links[0].style.textDecoration = 'underline';
					
					mxEvent.addListener(links[0], 'click', mxUtils.bind(this, function()
					{
						this.ui.actions.get('revisionHistory').funct();
					}));
				}
			}

			// Fades in/out last message
			var spans = this.ui.statusContainer.getElementsByTagName('span');
			
			if (spans.length > 0)
			{
				var temp = spans[0];
				temp.style.opacity = '0';
				mxUtils.setPrefixedStyle(temp.style, 'transition', 'all 0.2s ease');
				
				window.setTimeout(mxUtils.bind(this, function()
				{
					mxUtils.setOpacity(temp, 100);
					mxUtils.setPrefixedStyle(temp.style, 'transition', 'all 1s ease');
					
					window.setTimeout(mxUtils.bind(this, function()
					{
						mxUtils.setOpacity(temp, 0);

						window.setTimeout(mxUtils.bind(this, function()
						{
							this.updateStatus();
						}), 1000);
					}), this.updateStatusInterval / 2);
				}), 0);
			}
			
			this.resetUpdateStatusThread();
		}
		else
		{
			this.file.addAllSavedStatus();
		}
	}
};

/**
 * Resets the thread to update the status.
 */
DrawioFileSync.prototype.resetUpdateStatusThread = function()
{
	if (this.updateStatusThread != null)
	{
		window.clearInterval(this.updateStatusThread);
	}
	
	if (this.channel != null)
	{
		this.updateStatusThread = window.setInterval(mxUtils.bind(this, function()
		{
			this.updateStatus();
		}), this.updateStatusInterval);
	}
};

/**
 * Installs all required listeners for syncing the current file.
 */
DrawioFileSync.prototype.installListeners = function()
{
	if (this.pusher != null && this.pusher.connection != null)
	{
		this.pusher.connection.bind('state_change', this.connectionListener);
	}
    
	if (this.channel != null)
    {
    	this.channel.bind('changed', this.changeListener);
    }
};

/**
 * Adds the listener for automatically saving the diagram for local changes.
 */
DrawioFileSync.prototype.handleMessageData = function(data)
{
	if (data.a == 'desc')
	{
		if (!this.file.savingFile)
		{
			this.reloadDescriptor();
		}
	}
	else if (data.a == 'join' || data.a == 'leave')
	{
		if (data.a == 'join')
		{
			this.file.stats.joined++;
		}
		
		if (data.name != null)
		{
			this.lastMessage = mxResources.get((data.a == 'join') ?
				'userJoined' : 'userLeft', [decodeURIComponent(data.name)]);
			this.resetUpdateStatusThread();
			this.updateStatus();
		}
	}
	else if (data.a == 'change')
	{
		this.receiveRemoteChanges(data);
	}
	else if (data.m != null)
	{
		var mod = new Date(data.m);
		
		// Ignores obsolete messages
		if (this.lastMessageModified == null || this.lastMessageModified < mod)
		{
			this.lastMessageModified = mod;
			this.fileChangedNotify(data);
		}
	}
};

/**
 * Adds the listener for automatically saving the diagram for local changes.
 */
DrawioFileSync.prototype.isValidState = function()
{
	return this.ui.getCurrentFile() == this.file &&
		this.file.sync == this && !this.file.invalidChecksum &&
		!this.file.redirectDialogShowing;
};

/**
 * Adds the listener for automatically saving the diagram for local changes.
 */
DrawioFileSync.prototype.optimisticSync = function(retryCount)
{
	if (this.reloadThread == null)
	{
		retryCount = (retryCount != null) ? retryCount : 0;
		
		if (retryCount < this.maxOptimisticReloadRetries)
		{
			this.reloadThread = window.setTimeout(mxUtils.bind(this, function()
			{
				this.file.getLatestVersion(mxUtils.bind(this, function(latestFile)
				{
					this.reloadThread = null;
				
					if (latestFile != null)
					{
						var etag = latestFile.getCurrentRevisionId();
						var current = this.file.getCurrentRevisionId();
						
						// Retries if the file has not changed
						if (current == etag)
						{
							this.optimisticSync(retryCount + 1);
						}
						else
						{
							this.file.mergeFile(latestFile, mxUtils.bind(this, function()
							{
								this.lastModified = this.file.getLastModifiedDate();
								this.updateStatus();
							}));
						}
					}
				}), mxUtils.bind(this, function()
				{
					this.reloadThread = null;
				}));
			}), (retryCount + 1) * this.file.optimisticSyncDelay);
		}
		
		if (urlParams['test'] == '1')
		{
			EditorUi.debug('Sync.optimisticSync', [this], 'retryCount', retryCount);
		}
	}
};

/**
 * Adds the listener for automatically saving the diagram for local changes.
 */
DrawioFileSync.prototype.fileChangedNotify = function(data)
{
	if (this.isValidState())
	{
		if (this.file.savingFile)
		{
			this.remoteFileChanged = true;
		}
		else
		{
			if (data != null && data.type == 'optimistic')
			{
				this.optimisticSync();
			}
			else
			{
				// It's possible that a request never returns so override
				// existing requests and abort them when they are active
				var thread = this.fileChanged(mxUtils.bind(this, function(err)
				{
					this.updateStatus();
				}), mxUtils.bind(this, function(err)
				{
					this.file.handleFileError(err);
				}), mxUtils.bind(this, function()
				{
					return !this.file.savingFile && this.notifyThread != thread;
				}), true);
			}
		}
	}
};

/**
 * Called immediately after the file was changed locally.
 */
DrawioFileSync.prototype.localFileChanged = function()
{
	if (this.file.ownPages != null)
	{
		// LATER: Diff and patch only current page
		var snapshot = this.ui.getXmlFileData();

		// Improves responsiveness of UI for large files by using
		// async handling of the snapshot. The snapshot needs to
		// be taken synchronously and the execution of the code
		// below must be mutually exclusive with other critial
		// sections that update the snapshot and own pages.
		this.executeFunction(mxUtils.bind(this, function()
		{
			if (this.file.ownPages != null)
			{
				var patch = this.ui.diffPages(
					this.ui.getPagesForNode(this.file.snapshot),
					this.ui.getPagesForNode(snapshot));
				this.file.ownPages = this.ui.patchPages(
					this.file.ownPages, patch, true);
				this.file.snapshot = snapshot;

				if (this.ui.editor.autosave)
				{
					this.sendLocalChanges([patch]);
				}
			}
		}), true);
	}
};

/**
 * Queues the given function for execution. Priority functions
 * are executed first before all other waiting functions.
 */
DrawioFileSync.prototype.executeFunction = function(f, isPriority)
{
	if (this.priorityProcessQueue == null)
	{
		this.priorityProcessQueue = [];
	}
	
	if (this.processQueue == null)
	{
		this.processQueue = [];
	}

	if (isPriority)
	{
		this.priorityProcessQueue.push(f);
	}
	else
	{
		this.processQueue.push(f);
	}
	
	window.clearTimeout(this.processThread);
	
	this.processThread = window.setTimeout(mxUtils.bind(this, function()
	{
		if (this.priorityProcessQueue != null)
		{
			for (var i = 0; i < this.priorityProcessQueue.length; i++)
			{
				this.priorityProcessQueue[i]();
			}

			this.priorityProcessQueue = null;
		}

		if (this.processQueue != null)
		{
			for (var i = 0; i < this.processQueue.length; i++)
			{
				this.processQueue[i]();
			}

			this.processQueue = null;
		}
	}), 0);
};

/**
 * Sends the given changes too all collaborators.
 */
DrawioFileSync.prototype.sendLocalChanges = function(changes)
{
	if (!this.file.ignorePatches(changes))
	{
		if (this.localChanges == null)
		{
			this.localChanges = changes;

			window.setTimeout(mxUtils.bind(this, function()
			{
				if (this.ui.getCurrentFile() == this.file)
				{
					this.doSendLocalChanges(this.localChanges);
				}

				this.localChanges = null;
			}), this.syncSendMessageDelay);
		}
		else
		{
			this.localChanges = this.localChanges.concat(changes);
		}

		if (urlParams['test'] == '1')
		{
			EditorUi.debug('Sync.sendLocalChanges', [this],
				'changes', changes, 'localChanges',
				this.localChanges);
		}
	}
};

/**
 * Sends the given changes too all collaborators.
 */
DrawioFileSync.prototype.doSendLocalChanges = function(changes)
{
	if (!this.file.ignorePatches(changes))
	{
		var changeId = this.clientId + '.' + (this.syncChangeCounter++);
		var msg = {a: 'change', c: changes, id: changeId};
		var data = encodeURIComponent(
			this.objectToString(
			this.createMessage(msg)));
		var skipped = false;
		
		if (this.p2pCollab != null)
		{
			this.p2pCollab.sendDiff(data);
		}
		else if (urlParams['dev'] == '1' &&
			(this.maxSyncMessageSize == 0 ||
			data.length < this.maxSyncMessageSize))
		{
			mxUtils.post(EditorUi.cacheUrl, this.getIdParameters() + '&msg=' + data);
		}
		else
		{
			skipped = true;
		}

		if (urlParams['test'] == '1')
		{
			EditorUi.debug('Sync.doSendLocalChanges', [this],
				'changes', changes, data.length, 'bytes',
				skipped ? '(skipped)' : '');
		}
	}
};

/**
 * Handles the given remote changes.
 */
DrawioFileSync.prototype.receiveRemoteChanges = function(data)
{
	var changes = data.c;

	if (!this.file.ignorePatches(changes))
	{
		if (this.receivedData == null)
		{
			this.receivedData = [data];

			window.setTimeout(mxUtils.bind(this, function()
			{
				if (this.ui.getCurrentFile() == this.file)
				{
					// Sorts by sender and remote counter
					this.receivedData.sort(function(a, b)
					{
						if (a.id < b.id)
						{
							return -1;
						}
						else if (a.id > b.id)
						{
							return 1;
						}
						else
						{
							return 0;
						}
					});

					var lastDiff = null;

					// Processes changes
					for (var i = 0; i < this.receivedData.length; i++)
					{
						// Ignores consecutive duplicates
						var currentDiff = JSON.stringify(this.receivedData[i].c);

						if (currentDiff != lastDiff)
						{
							this.doReceiveRemoteChanges(this.receivedData[i].c);
						}

						lastDiff = currentDiff;
					}

					this.scheduleConsistencyCheck();
				}

				this.receivedData = null;
			}), this.syncReceiveMessageDelay);
		}
		else
		{
			this.receivedData.push(data);
		}

		if (urlParams['test'] == '1')
		{
			EditorUi.debug('Sync.receiveRemoteChanges', [this],
				'data', [data], 'receivedData', this.receivedData);
		}

	}
};

/**
 * Sends the given changes too all collaborators.
 */
DrawioFileSync.prototype.doReceiveRemoteChanges = function(changes)
{
	if (this.file.ownPages != null)
	{
		this.executeFunction(mxUtils.bind(this, function()
		{
			if (this.file.ownPages != null)
			{
				this.file.patch(changes);
				this.file.snapshot = this.ui.getXmlFileData();
				var pending = this.ui.diffPages(
					this.file.shadowPages,
					this.file.ownPages);
				this.file.patch([pending]);
				
				if (urlParams['test'] == '1')
				{
					EditorUi.debug('Sync.doReceiveRemoteChanges', [this],
						'changes', changes, 'pending', [pending]);
				}
			}
		}));
	}
};

/**
 * Removes transient remote changes that have not been saved.
 */
DrawioFileSync.prototype.scheduleConsistencyCheck = function()
{
	window.clearTimeout(this.consistencyCheckThread);

	this.consistencyCheckThread = window.setTimeout(mxUtils.bind(this, function()
	{
		this.checkConsistency();
	}), this.consistencyCheckDelay);
};

/**
 * Removes transient remote changes that have not been saved.
 */
DrawioFileSync.prototype.checkConsistency = function()
{
	window.clearTimeout(this.consistencyCheckThread);

	if (this.ui.getCurrentFile() == this.file &&
		!this.file.inConflictState &&
		this.file.ownPages != null)
	{
		var patch = this.ui.diffPages(
			this.ui.pages, this.file.ownPages);

		if (!mxUtils.isEmptyObject(patch))
		{
			this.file.patch([patch]);
		}

		if (urlParams['test'] == '1')
		{
			EditorUi.debug('Sync.consistencyCheck',
				[this], 'patch', [patch]);
		}
	}
};

/**
 * Patches the own pages with the given changes and updates the snapshot.
 */
DrawioFileSync.prototype.patchOwnPages = function(patches, pending, local)
{
	if (this.file.ownPages != null)
	{
		this.executeFunction(mxUtils.bind(this, function()
		{
			if (this.file.ownPages != null)
			{
				var consensus = this.ui.diffPages(
					this.file.ownPages,
					this.ui.pages);
				
				for (var i = 0; i < patches.length; i++)
				{
					if (patches[i] != null)
					{
						this.file.ownPages = this.ui.patchPages(
							this.file.ownPages, patches[i], true);
					}
				}

				this.file.snapshot = this.ui.getXmlFileData();

				if (pending != null)
				{
					for (var i = 0; i < pending.length; i++)
					{
						if (pending[i] != null)
						{
							this.file.ownPages = this.ui.patchPages(
								this.file.ownPages, pending[i], true);
						}
					}

					this.file.patch(pending);
				}

				if (!mxUtils.isEmptyObject(consensus))
				{
					this.file.patch([consensus]);

					if (!local)
					{
						this.sendLocalChanges([consensus]);
					}
				}

				this.scheduleConsistencyCheck();

				if (urlParams['test'] == '1')
				{
					EditorUi.debug('Sync.patchOwnPages', [this], 'patches', patches,
						'pending', pending, 'consensus', consensus, 'local', local);
				}
			}
		}));
	}
};

/**
 * Adds the listener for automatically saving the diagram for local changes.
 */
DrawioFileSync.prototype.merge = function(patches, checksum, desc, success, error, abort)
{
	try
	{
		this.file.stats.merged++;
		this.lastModified = new Date();
		this.file.shadowPages = (this.file.shadowPages != null) ?
			this.file.shadowPages : this.ui.getPagesForNode(
			mxUtils.parseXml(this.file.shadowData).documentElement)
		var etag = this.file.getDescriptorRevisionId(desc);
		var ignored = this.file.ignorePatches(patches);
		
		if (!ignored)
		{
			// Creates a patch for backup if the checksum fails
			this.file.backupPatch = (this.file.isModified() &&
				this.file.ownPages == null) ?
					this.ui.diffPages(this.file.shadowPages,
						this.ui.pages) : null;
			var pending = (this.file.ownPages != null) ?
				this.ui.diffPages(this.file.shadowPages,
					this.file.ownPages) : null;
			
			// Patches the shadow document
			for (var i = 0; i < patches.length; i++)
			{
				this.file.shadowPages = this.ui.patchPages(
					this.file.shadowPages, patches[i]);
			}

			var current = (checksum != null) ?
				this.ui.getHashValueForPages(
					this.file.shadowPages) : null;

			if (urlParams['test'] == '1')
			{
				EditorUi.debug('Sync.merge', [this], 'patches', patches,
					'backup', this.file.backupPatch, 'pending', pending,
					'checksum', checksum == current, checksum,
					'attempt', this.catchupRetryCount, 'from',
					this.file.getCurrentRevisionId(), 'to', etag,
					'etag', this.file.getDescriptorEtag(desc));
			}
			
			// Compares the checksum
			if (checksum != null && checksum != current)
			{
				var to = this.ui.hashValue(etag);
				var from = this.ui.hashValue(this.file.getCurrentRevisionId());
				this.file.checksumError(error, patches, 'From: ' + from + '\nTo: ' + to +
					'\nChecksum: ' + checksum + '\nCurrent: ' + current, etag, 'merge');

				// Uses current state as shadow to compute diff since
				// shadowPages has been modified in-place above
				// LATER: Check if fallback to reload is possible
//				this.reload(success, error, abort, this.ui.pages);
				
				// Abnormal termination
				return;
			}
			else
			{
				// Computes the remote pending changes
				var remotePending = (this.file.ownPages != null) ?
					this.ui.diffPages(this.file.ownPages,
						this.ui.pages) : null;

				// Patches the own pages
				this.patchOwnPages(patches, [pending]);

				// Patches the current document
				this.file.patch(patches,
					(DrawioFile.LAST_WRITE_WINS) ?
					((pending != null) ? pending :
					this.file.backupPatch) : null);

				// Applies the remote pending changes to
				// minimize flickering between states
				if (remotePending != null && !mxUtils.isEmptyObject(remotePending))
				{
					this.file.patch([remotePending]);

					if (urlParams['test'] == '1')
					{
						EditorUi.debug('Sync.merge', [this],
							'remotePending', remotePending);
					}
				}

				// Logs successull patch
//				try
//				{
//					var user = this.file.getCurrentUser();
//					var uid = (user != null) ? user.id : 'unknown';
//
//					EditorUi.logEvent({category: 'PATCH-SYNC-FILE-' + this.file.getHash(),
//						action: uid + '-patches-' + patches.length + '-recvd-' +
//						this.file.stats.bytesReceived + '-msgs-' + this.file.stats.msgReceived,
//						label: this.clientId});
//				}
//				catch (e)
//				{
//					// ignore
//				}
			}
		}

		this.file.invalidChecksum = false;
		this.file.inConflictState = false;
		this.file.patchDescriptor(this.file.getDescriptor(), desc);
		this.file.backupPatch = null;
		
		if (success != null)
		{
			success();
		}
	}
	catch (e)
	{
		this.file.inConflictState = true;
		this.file.invalidChecksum = true;
		this.file.descriptorChanged();
		
		if (error != null)
		{
			error(e);
		}
		
		try
		{
			if (this.file.errorReportsEnabled)
			{
				var from = this.ui.hashValue(this.file.getCurrentRevisionId());
				var to = this.ui.hashValue(etag);
				
				this.file.sendErrorReport('Error in merge',
					'From: ' + from + '\nTo: ' + to +
					'\nChecksum: ' + checksum +
					'\nPatches:\n' + this.file.compressReportData(
						JSON.stringify(patches, null, 2)), e);
			}
			else
			{
				var user = this.file.getCurrentUser();
				var uid = (user != null) ? user.id : 'unknown';
				
				EditorUi.logError('Error in merge', null,
					this.file.getMode() + '.' +
					this.file.getId(), uid, e);
			}
		}
		catch (e2)
		{
			// ignore
		}
	}
};

/**
 * Adds the listener for automatically saving the diagram for local changes.
 */
DrawioFileSync.prototype.fileChanged = function(success, error, abort, lazy)
{
	var thread = window.setTimeout(mxUtils.bind(this, function()
	{
		if (abort == null || !abort())
		{
			if (!this.isValidState())
			{
				if (error != null)
				{
					error();
				}
			}
			else
			{
				this.file.loadPatchDescriptor(mxUtils.bind(this, function(desc)
				{
					if (abort == null || !abort())
					{
						if (!this.isValidState())
						{
							if (error != null)
							{
								error();
							}
						}
						else
						{
							this.catchup(desc, success, error, abort);
						}
					}
				}), error);
			}
		}
	}), (lazy) ? this.cacheReadyDelay : 0);
	
	this.notifyThread = thread;
	
	return thread;
};

/**
 * Adds the listener for automatically saving the diagram for local changes.
 */
DrawioFileSync.prototype.reloadDescriptor = function()
{
	this.file.loadDescriptor(mxUtils.bind(this, function(desc)
	{
		if (desc != null)
		{
			// Forces data to be updated
			this.file.setDescriptorRevisionId(desc, this.file.getCurrentRevisionId());
			this.updateDescriptor(desc);
			this.fileChangedNotify();
		}
		else
		{
			this.file.inConflictState = true;
			this.file.handleFileError();
		}
	}), mxUtils.bind(this, function(err)
	{
		this.file.inConflictState = true;
		this.file.handleFileError(err);
	}));
};

/**
 * Adds the listener for automatically saving the diagram for local changes.
 */
DrawioFileSync.prototype.updateDescriptor = function(desc)
{
	this.file.setDescriptor(desc);
	this.file.descriptorChanged();
	this.start();
};

/**
 * Adds the listener for automatically saving the diagram for local changes.
 */
DrawioFileSync.prototype.catchup = function(desc, success, error, abort)
{
	if (desc != null && (abort == null || !abort()))
	{
		var etag = this.file.getDescriptorRevisionId(desc);
		var current = this.file.getCurrentRevisionId();
		
		if (current == etag)
		{
			this.file.patchDescriptor(this.file.getDescriptor(), desc);
			
			if (success != null)
			{
				success();
			}
		}
		else if (!this.isValidState())
		{
			if (error != null)
			{
				error();
			}
		}
		else
		{
			var secret = this.file.getDescriptorSecret(desc);
			
			if (secret == null || urlParams['lockdown'] == '1')
			{
				this.reload(success, error, abort);
			}
			else
			{
				// Cache entry may not have been uploaded to cache before new
				// etag is visible to client so retry once after cache miss
				var cacheReadyRetryCount = 0;
				var failed = false;
				
				var doCatchup = mxUtils.bind(this, function()
				{
					if (abort == null || !abort())
					{
						// Ignores patch if shadow has changed
						if (current != this.file.getCurrentRevisionId())
						{
							if (success != null)
							{
								success();
							}
						}
						else if (!this.isValidState())
						{
							if (error != null)
							{
								error();
							}
						}
						else
						{
							var acceptResponse = true;
							
							var timeoutThread = window.setTimeout(mxUtils.bind(this, function()
							{
								acceptResponse = false;
								this.reload(success, error, abort);
							}), this.ui.timeout);
	
							mxUtils.get(EditorUi.cacheUrl + '?id=' + encodeURIComponent(this.channelId) +
								'&from=' + encodeURIComponent(current) + '&to=' + encodeURIComponent(etag) +
								((secret != null) ? '&secret=' + encodeURIComponent(secret) : ''),
								mxUtils.bind(this, function(req)
							{
								this.file.stats.bytesReceived += req.getText().length;	
								window.clearTimeout(timeoutThread);
								
								if (acceptResponse && (abort == null || !abort()))
								{
									// Ignores patch if shadow has changed
									if (current != this.file.getCurrentRevisionId())
									{
										if (success != null)
										{
											success();
										}
									}
									else if (!this.isValidState())
									{
										if (error != null)
										{
											error();
										}
									}
									else
									{
										var checksum = null;
										var temp = [];
								
										if (req.getStatus() >= 200 && req.getStatus() <= 299 &&
											req.getText().length > 0)
										{
											try
											{
												var result = JSON.parse(req.getText());
												
												if (result != null && result.length > 0)
												{
													for (var i = 0; i < result.length; i++)
													{
														var value = this.stringToObject(result[i]);
														
														if (value.v > DrawioFileSync.PROTOCOL)
														{
															failed = true;
															temp = [];
															break;
														}
														else if (value.v === DrawioFileSync.PROTOCOL &&
															value.d != null)
														{
															checksum = value.d.checksum;
															temp.push(value.d.patch);
														}
														else
														{
															failed = true;
															temp = [];
															break;
														}
													}
												}
											}
											catch (e)
											{
												temp = [];
												
												if (window.console != null && urlParams['test'] == '1')
												{
													console.log(e);
												}
											}
										}
										
										try
										{
											if (temp.length > 0)
											{
												this.file.stats.cacheHits++;
												this.merge(temp, checksum, desc, success, error, abort);
											}
											// Retries if cache entry was not yet there
											else if (cacheReadyRetryCount <= this.maxCacheReadyRetries - 1 &&
												!failed && req.getStatus() != 401 && req.getStatus() != 503)
											{
												cacheReadyRetryCount++;
												this.file.stats.cacheMiss++;
												window.setTimeout(doCatchup, (cacheReadyRetryCount + 1) *
													this.cacheReadyDelay);
											}
											else
											{
												this.file.stats.cacheFail++;
												this.reload(success, error, abort);
											}
										}
										catch (e)
										{
											if (error != null)
											{
												error(e);
											}
										}
									}
								}
							}));
						}
					}
				});
				
				window.setTimeout(doCatchup, this.cacheReadyDelay);
			}
		}
	}
};

/**
 * Adds the listener for automatically saving the diagram for local changes.
 */
DrawioFileSync.prototype.reload = function(success, error, abort, shadow)
{
	this.file.updateFile(mxUtils.bind(this, function()
	{
		this.lastModified = this.file.getLastModifiedDate();
		this.updateStatus();
		this.start();
		
		if (success != null)
		{
			success();
		}
	}), mxUtils.bind(this, function(err)
	{
		if (error != null)
		{
			error(err);
		}
	}), abort, shadow);
};

/**
 * Invokes when the file descriptor was changed.
 */
DrawioFileSync.prototype.descriptorChanged = function(etag)
{
	this.lastModified = this.file.getLastModifiedDate();
	
	if (this.channelId != null)
	{
		var msg = this.objectToString(this.createMessage({a: 'desc',
			m: this.lastModified.getTime()}));
		var current = this.file.getCurrentRevisionId();
		var data = this.objectToString({});

		mxUtils.post(EditorUi.cacheUrl, this.getIdParameters() +
			'&from=' + encodeURIComponent(etag) + '&to=' + encodeURIComponent(current) +
			'&msg=' + encodeURIComponent(msg) + '&data=' + encodeURIComponent(data));
		this.file.stats.bytesSent += data.length;
		this.file.stats.msgSent++;
	}
	
	this.updateStatus();
};

/**
 * Converts the given object to an encrypted string.
 */
DrawioFileSync.prototype.objectToString = function(obj)
{
	var data = Graph.compress(JSON.stringify(obj));
	
	if (this.key != null && typeof CryptoJS !== 'undefined')
	{
		data = CryptoJS.AES.encrypt(data, this.key).toString();
	}
	
	return data;
};

/**
 * Converts the given encrypted string to an object.
 */
DrawioFileSync.prototype.stringToObject = function(data)
{
	if (this.key != null && typeof CryptoJS !== 'undefined')
	{
		data = CryptoJS.AES.decrypt(data, this.key).toString(CryptoJS.enc.Utf8);
	}
	
	return JSON.parse(Graph.decompress(data));
};

/**
 * Requests a token for the given sec
 */
DrawioFileSync.prototype.createToken = function(secret, success, error)
{
	var acceptResponse = true;
				
	var timeoutThread = window.setTimeout(mxUtils.bind(this, function()
	{
		acceptResponse = false;
		error({code: App.ERROR_TIMEOUT, message: mxResources.get('timeout')});
	}), this.ui.timeout);
	
	mxUtils.get(EditorUi.cacheUrl + '?id=' + encodeURIComponent(this.channelId) +
		'&secret=' + encodeURIComponent(secret), mxUtils.bind(this, function(req)
	{
		window.clearTimeout(timeoutThread);
		
		if (acceptResponse)
		{
			if (req.getStatus() >= 200 && req.getStatus() <= 299)
			{
				success(req.getText());
			}
			else
			{
				error({code: req.getStatus(), message: 'Token Error ' + req.getStatus()});
			}
		}
	}));
};

/**
 * Invoked when a save request for a file was sent regardless of the response.
 */
DrawioFileSync.prototype.fileSaving = function()
{
	var msg = this.objectToString(this.createMessage({m: new Date().getTime(), type: 'optimistic'}));

	// Notify only
	mxUtils.post(EditorUi.cacheUrl, this.getIdParameters() + '&msg=' + encodeURIComponent(msg), function()
	{
		// Ignore response
	});
};

/**
 * Invoked after a file was saved to add cache entry (which in turn notifies
 * collaborators).
 */
DrawioFileSync.prototype.fileSaved = function(pages, lastDesc, success, error, token)
{
	this.lastModified = this.file.getLastModifiedDate();
	this.resetUpdateStatusThread();
	this.catchupRetryCount = 0;
	
	if (!this.ui.isOffline(true) && !this.file.inConflictState && !this.file.redirectDialogShowing)
	{
		this.start();

		if (this.channelId != null)
		{
			// Computes diff and checksum
			var msg = this.objectToString(this.createMessage({m: this.lastModified.getTime()}));
			var secret = this.file.getDescriptorSecret(this.file.getDescriptor());
			var etag = this.file.getDescriptorRevisionId(lastDesc);
			var current = this.file.getCurrentRevisionId();
			
			if (secret == null || urlParams['lockdown'] == '1')
			{
				this.file.stats.msgSent++;
				
				// Notify only
				mxUtils.post(EditorUi.cacheUrl, this.getIdParameters() +
					'&msg=' + encodeURIComponent(msg), function()
				{
					// Ignore response
				});
				
				if (success != null)
				{
					success();
				}
				
				if (urlParams['test'] == '1')
				{
					EditorUi.debug('Sync.fileSaved', [this], 'from', etag, 'to', current,
						'etag', this.file.getCurrentEtag(), 'notify');
				}
			}
			else
			{
				var shadow = (this.file.shadowPages != null) ?
					this.file.shadowPages : this.ui.getPagesForNode(
					mxUtils.parseXml(this.file.shadowData).documentElement)
				var lastSecret = this.file.getDescriptorSecret(lastDesc);
				var checksum = this.ui.getHashValueForPages(pages);
				var diff = this.ui.diffPages(shadow, pages);
				
				// Data is stored in cache and message is sent to all listeners
				var data = this.objectToString(this.createMessage({patch: diff, checksum: checksum}));
				this.file.stats.bytesSent += data.length;
				this.file.stats.msgSent++;
				
				var acceptResponse = true;
							
				var timeoutThread = window.setTimeout(mxUtils.bind(this, function()
				{
					acceptResponse = false;
					error({code: App.ERROR_TIMEOUT, message: mxResources.get('timeout')});
				}), this.ui.timeout);
				
				mxUtils.post(EditorUi.cacheUrl, this.getIdParameters() +
					'&from=' + encodeURIComponent(etag) + '&to=' + encodeURIComponent(current) +
					'&msg=' + encodeURIComponent(msg) + ((secret != null) ? '&secret=' + encodeURIComponent(secret) : '') +
					((lastSecret != null) ? '&last-secret=' + encodeURIComponent(lastSecret) : '') +
					((data.length < this.maxCacheEntrySize) ? '&data=' + encodeURIComponent(data) : '') +
					((token != null) ? '&token=' + encodeURIComponent(token) : ''),
					mxUtils.bind(this, function(req)
				{
					window.clearTimeout(timeoutThread);
					
					if (acceptResponse)
					{
						if (req.getStatus() >= 200 && req.getStatus() <= 299)
						{
							if (success != null)
							{
								success();
							}
						}
						else
						{
							error({code: req.getStatus(), message: req.getStatus()});
						}
					}
				}));

				if (this.file.ownPages != null)
				{
					this.file.patch(diff);
				}

				if (urlParams['test'] == '1')
				{
					EditorUi.debug('Sync.fileSaved', [this],
						'from', etag, 'to', current, 'etag', this.file.getCurrentEtag(),
						data.length, 'bytes', 'diff', diff, 'checksum', checksum);
				}
			}
			
			// Logs successull diff
//			try
//			{
//				var user = this.file.getCurrentUser();
//				var uid = (user != null) ? user.id : 'unknown';
//				
//				EditorUi.logEvent({category: 'DIFF-SYNC-FILE-' + this.file.getHash(),
//					action: uid + '-diff-' + data.length + '-sent-' +
//					this.file.stats.bytesSent + '-msgs-' +
//					this.file.stats.msgSent, label: this.clientId});
//			}
//			catch (e)
//			{
//				// ignore
//			}
		}
	}
	
	// Ignores cache response as clients
	// load file if cache entry failed
	this.file.shadowPages = pages;
};

/**
 * Creates the properties for the file descriptor.
 */
DrawioFileSync.prototype.getIdParameters = function()
{
	var result = 'id=' + this.channelId;
	
	if (this.pusher != null && this.pusher.connection != null &&
		this.pusher.connection.socket_id != null)
	{
		result += '&sid=' + this.pusher.connection.socket_id;
	}
	
	return result;
};

/**
 * Creates the properties for the file descriptor.
 */
DrawioFileSync.prototype.createMessage = function(data)
{
	return {v: DrawioFileSync.PROTOCOL, d: data, c: this.clientId};
};

/**
 * Creates the properties for the file descriptor.
 */
DrawioFileSync.prototype.fileConflict = function(desc, success, error)
{
	this.catchupRetryCount++;
	
	if (this.catchupRetryCount < this.maxCatchupRetries)
	{
		this.file.stats.conflicts++;
		
		if (desc != null)
		{
			this.catchup(desc, success, error);
		}
		else
		{
			this.fileChanged(success, error);
		}
	}
	else
	{
		this.file.stats.timeouts++;
		this.catchupRetryCount = 0;
		
		if (error != null)
		{
			error({code: App.ERROR_TIMEOUT, message: mxResources.get('timeout')});
		}
	}
};

/**
 * Adds the listener for automatically saving the diagram for local changes.
 */
DrawioFileSync.prototype.stop = function()
{
	if (this.pusher != null)
	{
		EditorUi.debug('Sync.stop', [this]);
	
		if (this.pusher.connection != null)
		{
			this.pusher.connection.unbind('state_change', this.connectionListener);
			this.pusher.connection.unbind('error', this.pusherErrorListener);
		}
	
		if (this.channel != null) 
		{
			this.channel.unbind('changed', this.changeListener);
			
			// See https://github.com/pusher/pusher-js/issues/75
			// this.pusher.unsubscribe(this.channelId);
			this.channel = null;
		}
		
		this.pusher.disconnect();
		this.pusher = null;
	}
	
	this.updateOnlineState();
	this.updateStatus();
};

/**
 * Adds the listener for automatically saving the diagram for local changes.
 */
DrawioFileSync.prototype.destroy = function()
{
	if (this.channelId != null)
	{
		var user = this.file.getCurrentUser();
		var leave = {a: 'leave'};
		
		if (user != null)
		{
			leave.name = encodeURIComponent(user.displayName);
			leave.uid = user.id;
		}
		
		mxUtils.post(EditorUi.cacheUrl, this.getIdParameters() +
			'&msg=' + encodeURIComponent(this.objectToString(
			this.createMessage(leave))));
		this.file.stats.msgSent++;
	}
	
	this.stop();

	if (this.updateStatusThread != null)
	{
		window.clearInterval(this.updateStatusThread);
		this.updateStatusThread = null;
	}
	
	if (this.onlineListener != null)
	{
		mxEvent.removeListener(window, 'online', this.onlineListener);
		this.onlineListener = null;
	}

	if (this.visibleListener != null)
	{
		mxEvent.removeListener(document, 'visibilitychange', this.visibleListener);
		this.visibleListener = null;
	}

	if (this.activityListener != null)
	{
		mxEvent.removeListener(document, (mxClient.IS_POINTER) ? 'pointermove' : 'mousemove', this.activityListener);
		mxEvent.removeListener(document, 'keypress', this.activityListener);
		mxEvent.removeListener(window, 'focus', this.activityListener);
		
		if (!mxClient.IS_POINTER && mxClient.IS_TOUCH)
		{
			mxEvent.removeListener(document, 'touchstart', this.activityListener);
			mxEvent.removeListener(document, 'touchmove', this.activityListener);	
		}
		
		this.activityListener = null;
	}
	
	if (this.collaboratorsElement != null)
	{
		this.collaboratorsElement.parentNode.removeChild(this.collaboratorsElement);
		this.collaboratorsElement = null;
	}

	if (this.p2pCollab != null)
	{
		this.p2pCollab.destroy();
	}
};
