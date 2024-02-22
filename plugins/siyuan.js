/**
 * SiYuan Note plugin.
 */
/* 👇 SIYUAN 👇 */
Draw.loadPlugin(async function (
    app, // window.sb.editorUi instanceof window.App
) {
    // console.debug(app);
    await window.siyuan.ready;

    App.MODE_SIYUAN = "siyuan"; // 思源存储模式
    app[App.MODE_SIYUAN] = {}; // 思源存储供应商

    /* Minimal 主题默认隐藏形状面板与格式面板 */
    window.addEventListener('load', async () => {
        if (window.uiTheme === 'min') {
            if (app.formatWindow?.window.isVisible()) {
                app.formatWindow.window.setVisible(false);
            }
            if (app.sidebarWindow?.window.isVisible()) {
                app.sidebarWindow.window.setVisible(false);
            }
        }
    });

    /* 工具栏菜单项 */
    {
        /* 注册菜单项 */
        /* 导入本地文件 */
        app.actions.addAction('siyuanImport', () => {
            app.importLocalFile(true);
        });

        /* 使用新窗口打开 */
        const action_openInNewWindow = new Action(
            mxResources.get('openInNewWindow'),
            () => {
                try {
                    const {
                        BrowserWindow,
                        Menu,
                    } = window.top.require('@electron/remote');

                    /* 新窗口菜单 */
                    const menu = Menu.buildFromTemplate([
                        // REF [菜单项 | Electron](https://www.electronjs.org/zh/docs/latest/api/menu-item)
                        {
                            label: 'SiYuan',
                            submenu: [
                                {
                                    label: 'About SiYuan',
                                    role: 'about',
                                },
                                { type: 'separator' },
                                {
                                    label: 'Quit SiYuan',
                                    role: 'quit',
                                },
                            ],
                        },
                        {
                            role: 'editMenu',
                            submenu: [
                                { role: 'selectAll' },
                                { role: 'cut' },
                                { role: 'copy' },
                                { role: 'paste' },
                                { role: 'pasteAndMatchStyle', accelerator: 'CmdOrCtrl+Shift+V' },
                                { type: 'separator' },
                                { role: 'toggleSpellChecker' },
                            ],
                        },
                        {
                            role: 'viewMenu',
                            submenu: [
                                { role: 'resetZoom' },
                                { role: 'zoomIn', accelerator: 'CmdOrCtrl+=' },
                                { role: 'zoomOut' },
                            ],
                        },
                        {
                            role: 'windowMenu',
                            submenu: [
                                { role: 'minimize' },
                                { role: 'zoom' },
                                { role: 'togglefullscreen' },
                                { type: 'separator' },
                                { role: 'toggledevtools' },
                                { type: 'separator' },
                                { role: 'front' },
                                { type: 'separator' },
                                { role: 'reload', accelerator: 'F5' },
                                { role: 'forcereload', accelerator: 'CmdOrCtrl+F5' },
                                { role: 'close' },
                                { type: 'separator' },
                                {
                                    label: 'Pinned',
                                    click: (menuItem, browserWindow, event) => {
                                        if (browserWindow) browserWindow.setAlwaysOnTop(!browserWindow.isAlwaysOnTop());
                                    },
                                    type: 'checkbox',
                                    checked: false,
                                    // REF [快捷键 | Electron](https://www.electronjs.org/zh/docs/latest/api/accelerator)
                                    accelerator: 'Alt+Shift+P',
                                },
                            ],
                        },
                    ]);

                    /* 新窗口 */
                    const win = new BrowserWindow({
                        autoHideMenuBar: true,
                    });

                    win.setMenu(menu);
                    win.loadURL(location.href);
                } catch (err) {
                    console.warn(err);
                    window.open(
                        location.href,
                        undefined,
                        `
                            popup = true,
                        `,
                    );
                }
            },
        );
        app.actions.put('openInNewWindow', action_openInNewWindow);

        /* 使用新页签打开 */
        Object.defineProperty(window.siyuan, "webview", {
            get: function () {
                return this.global?.ws.app.plugins.find(plugin => plugin.name === "webview");
            },
        });
        const action_siyuanOpenInNewTab = new Action(
            mxResources.get('siyuanOpenInNewTab'),
            () => {
                const webview = window.siyuan.webview;
                if (webview) {
                    webview.openWebviewTab(location.href, document.title);
                }
            },
            !!window.siyuan.webview,
        );
        action_siyuanOpenInNewTab.setToggleAction(true);
        action_siyuanOpenInNewTab.setSelectedCallback(() => {
            action_siyuanOpenInNewTab.setEnabled(!!window.siyuan.webview);
            return false;
        });
        app.actions.put('siyuanOpenInNewTab', action_siyuanOpenInNewTab);

        /* 全屏模式 */
        const action_siyuanFullscreen = new Action(
            mxResources.get('fullscreen'),
            async () => {
                if (document.fullscreenElement) {
                    document.exitFullscreen()
                } else {
                    document.documentElement.requestFullscreen()
                }
            },
        )
        action_siyuanFullscreen.setToggleAction(true);
        action_siyuanFullscreen.setSelectedCallback(() => document.fullscreenElement);
        app.actions.put('siyuanFullscreen', action_siyuanFullscreen);

        /* 灯箱模式 */
        const action_siyuanLightbox = new Action(
            mxResources.get('lightbox'),
            async () => {
                const lightbox = window.siyuan.attrs['custom-lightbox'] === '1';
                window.siyuan.attrs['custom-lightbox'] = lightbox ? null : '1';
                await window.siyuan.setBlockAttrs();

                if (!lightbox) {
                    window.siyuan.url.searchParams.set('lightbox', 1);
                    window.location.href = window.siyuan.url.href;
                }
            },
        );
        action_siyuanLightbox.setToggleAction(true);
        action_siyuanLightbox.setSelectedCallback(() => window.siyuan.attrs['custom-lightbox'] === '1');
        app.actions.put('siyuanLightbox', action_siyuanLightbox);

        /* 复制文件引用地址 */
        const action_siyuanCopyFilePath = new Action(
            mxResources.get('siyuanCopyFilePath'),
            async () => {
                const asset = window.siyuan.attrs['custom-data-assets'];
                if (asset) {
                    await window.navigator.clipboard.writeText(asset);
                }
            },
            !!window.siyuan.attrs['custom-data-assets'],
        );
        action_siyuanCopyFilePath.setToggleAction(true);
        action_siyuanCopyFilePath.setSelectedCallback(() => {
            action_siyuanCopyFilePath.setEnabled(!!window.siyuan.attrs['custom-data-assets']);
            return false;
        });
        app.actions.put('siyuanCopyFilePath', action_siyuanCopyFilePath);

        /* 复制文件引用链接 */
        const action_siyuanCopyFileLink = new Action(
            mxResources.get('siyuanCopyFileLink'),
            async () => {
                const markdown = window.siyuan.attrs['data-export-md'];
                if (markdown) {
                    await window.navigator.clipboard.writeText(markdown);
                }
            },
            !!window.siyuan.attrs['data-export-md'],
        );
        action_siyuanCopyFileLink.setToggleAction(true);
        action_siyuanCopyFileLink.setSelectedCallback(() => {
            action_siyuanCopyFileLink.setEnabled(!!window.siyuan.attrs['data-export-md']);
            return false;
        });
        app.actions.put('siyuanCopyFileLink', action_siyuanCopyFileLink);

        // TODO: siyuanHoverPreview 鼠标悬浮预览思源链接

        /* 添加菜单 */
        app.menubar?.addMenu(
            mxResources.get('siyuan'),
            function (menu, parent) {
                app.menus.addMenuItem(menu, 'save');
                menu.addSeparator(parent);
                app.menus.addMenuItem(menu, 'siyuanImport');
                menu.addSeparator(parent);
                app.menus.addMenuItem(menu, 'siyuanCopyFilePath');
                app.menus.addMenuItem(menu, 'siyuanCopyFileLink');
                menu.addSeparator(parent);
                app.menus.addMenuItem(menu, 'siyuanLightbox');
                app.menus.addMenuItem(menu, 'siyuanFullscreen');
                menu.addSeparator(parent);
                app.menus.addMenuItem(menu, 'siyuanOpenInNewTab');
                app.menus.addMenuItem(menu, 'openInNewWindow');
                menu.addSeparator(parent);
                app.menus.addMenuItem(menu, 'siyuanHoverPreview');
            },
            document.querySelector('.geStatus'),
        );

        // /* 将菜单组添加到菜单 */
        // const menu_extras = editorUi.menus.get('extras');
        // const old_funct = menu_extras.funct;
        // menu_extras.funct = function (menu, parent) {
        //     editorUi.menus.addMenuItems(menu, ['siyuanOpenByNewWindow', 'siyuanFullscreen', '-'], parent);
        //     old_funct.apply(this, arguments);
        // };
    }

    /* 挂载额外的属性与方法 */
    Object.assign(window.siyuan, {
        app,
        saved: true, // 文件是否已保存
        /* 保存数据到思源 */
        saveDataToSiyuan: async function (filename, _format, filedata, mime, base64Encoded = false) {
            const { name, ext } = filenameParse(filename);

            const blob = base64Encoded
                ? (() => {
                    // base64 to Blob
                    let bytes = atob(filedata);
                    let ab = new ArrayBuffer(bytes.length);
                    let ia = new Uint8Array(ab);
                    for (let i = 0; i < bytes.length; i++) {
                        ia[i] = bytes.charCodeAt(i);
                    }
                    return new Blob([ab], { type: mime });
                })()
                : new Blob([filedata], { type: mime });
            const file = new File([blob], name, { lastModified: Date.now() });
            const formdata = new FormData();
            formdata.append("assetsDirPath", "/assets/drawio/");
            formdata.append("file[]", file);

            const response = await fetch("/api/asset/upload", {
                body: formdata,
                method: "POST",
                // headers: { Authorization: "Token " + this.apitoken },
            });
            const body = await response.json();
            if (body.code !== 0) {
                throw new Error(body.msg);
            }

            let asset = body.data.succMap[name];
            console.log(asset);
            if (asset.startsWith('/assets/')) {
                asset = asset.replace(/^\/assets\//, 'assets/')
            }

            const current_file = app.getCurrentFile();
            if (!asset.endsWith(current_file.title)) { // 文件名更改
                let markdown, html;
                switch (ext) {
                    case 'svg':
                    case 'png':
                        markdown = `![${filename}](${asset})`;
                        break;
                    case 'xml':
                    case 'html':
                    case 'drawio':
                    default:
                        markdown = `[${filename}](${asset})`;
                        break;
                }

                // console.log(filename, asset);
                Object.assign(window.siyuan.attrs, {
                    'custom-data-assets': asset,
                    'data-export-md': markdown,
                    'data-export-html': html,
                });
                const body = await this.setBlockAttrs();
                if (body.code !== 0) {
                    throw new Error(body.msg);
                }

                const file_name = asset.split('/').pop();
                const url = new URL(window.location);
                const url_asset = new URL(window.location.origin);

                url_asset.pathname = `/${asset}`;
                url_asset.searchParams.set("t", Date.now());

                url.searchParams.set("url", url_asset.href);
                url.searchParams.set("title", file_name);
                console.log(url.href);

                // REF [js修改url参数，无刷新更换页面url - 放飞的回忆 - 博客园](https://www.cnblogs.com/ziyoublog/p/9776764.html)
                history.pushState(null, null, url.href)

                current_file.rename(file_name) // 更改标题
            }

            current_file.modified = false;
            app.hideDialog();
            app.editor.setStatus(mxResources.get('allChangesSaved'));
            this.saved = true;
        },
        /* 保存数据 */
        saveData: async function (
            title,
            success,
            error,
        ) {
            // console.log(title);

            if (this.regs.id.test(this.id)) {
                // change(App.MODE_DEVICE);
                let filename = filenameParse(title);
                // console.log(filename);

                file_name = filename.name;
                file_name_main = filename.main;
                file_name_ext = filename.ext;

                // 根据文件扩展名调用不同的保存方法
                switch (file_name_ext) {
                    case 'jpg':
                    case 'pdf':
                    case 'vsdx':
                    default:
                        return;
                    case 'drawio': {
                        /**
                         * ~/js/diagramly/EditorUi.js -> EditorUi.prototype.getFileData
                         */
                        const file_content = app.getFileData(
                            true,
                            undefined,
                            undefined,
                            undefined,
                            true, // ignoreSelection, // 是否仅保存选中内容
                            false, // currentPage, // 是否仅保存当前页面
                            undefined,
                            undefined,
                            undefined,
                            true, // uncompressed, // 是否格式化 XML 文本
                        );
                        // console.log(file_content);
                        const file_type = "application/xml";
                        this.saveDataToSiyuan(file_name, undefined, file_content, file_type, undefined);
                        break;
                    }

                    case 'png':
                        setTimeout(() => {
                            this.saved = false;
                            app.actions.get('exportPng').funct();
                        });
                        break;

                    case 'svg':
                        setTimeout(() => {
                            this.saved = false;
                            app.actions.get('exportSvg').funct();
                        });
                        break;

                    case 'html':
                        setTimeout(() => {
                            this.saved = false;
                            app.actions.get('exportHtml').funct();
                        });
                        break;

                    case 'xml':
                        setTimeout(() => {
                            this.saved = false;
                            app.actions.get('exportXml').funct();
                        });
                        break;

                }
            }
        },
        /* 添加保存按钮 */
        addSaveButton: function (
            nameInput,
            buttons,
            count,
            rowLimit,
            img,
            title,
        ) {
            var button = document.createElement('a');
            button.style.overflow = 'hidden';

            var logo = document.createElement('img');
            logo.src = img;
            logo.setAttribute('border', '0');
            logo.setAttribute('align', 'absmiddle');
            logo.style.width = '60px';
            logo.style.height = '60px';
            logo.style.paddingBottom = '6px';
            button.style.display = 'inline-block';
            button.className = 'geBaseButton';
            button.style.position = 'relative';
            button.style.margin = '4px';
            button.style.padding = '8px 8px 10px 8px';
            button.style.whiteSpace = 'nowrap';

            button.appendChild(logo);

            button.style.color = 'gray';
            button.style.fontSize = '11px';

            var label = document.createElement('div');
            button.appendChild(label);
            mxUtils.write(label, title);

            function initButton() {
                mxEvent.addListener(button, 'click', () => {
                    this.saveData(nameInput.value);
                });
            };

            initButton();

            buttons.appendChild(button);

            if (++count == rowLimit) {
                mxUtils.br(buttons);
                count = 0;
            }

            return count;
        },
    });

    /* 提取主文件名与文件扩展名 */
    function filenameParse(filename) {
        const idx2 = filename.lastIndexOf('.drawio.');
        const idx = (idx2 > 0) ? idx2 : filename.lastIndexOf('.');
        const file_name_main = idx > 0 ? filename.substring(0, idx) : filename;
        const file_name_ext = idx > 0 ? filename.substring(filename.lastIndexOf('.') + 1) : 'drawio';
        filename = `${file_name_main}.${file_name_ext}`;
        return { name: filename, main: file_name_main, ext: file_name_ext };
    }

    /* 劫持原方法 */
    const saveData = app.saveData;
    const hideDialog = app.hideDialog;
    app.saveData = function (...args) {
        if (window.siyuan.saved) {
            saveData.apply(app, args);
        }
        else {
            window.siyuan.saveDataToSiyuan(...args);
        }
    }
    app.hideDialog = function (...args) {
        window.siyuan.saved = true;
        hideDialog.apply(app, args);
    }
});
/* 👆 SIYUAN 👆 */
