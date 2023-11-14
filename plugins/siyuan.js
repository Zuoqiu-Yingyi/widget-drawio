/**
 * SiYuan Note plugin.
 */
/* 👇 SIYUAN 👇 */
Draw.loadPlugin(function (editorUi) {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    const regs = {
        id: /^\d{14}\-[0-9a-z]{7}$/,
    };

    /* Minimal 主题默认隐藏形状面板与格式面板 */
    window.addEventListener('load', async () => {
        if (window.uiTheme === 'min') {
            editorUi.toggleFormatPanel(false);
            editorUi.sidebarWindow.window.setVisible(false);
        }
    });

    /* 工具栏菜单项 */
    (() => {
        /* 添加菜单 */
        editorUi.menubar?.addMenu(
            mxResources.get('siyuan'),
            function (menu, parent) {
                editorUi.menus.addMenuItem(menu, 'save');
                menu.addSeparator(parent);
                editorUi.menus.addMenuItem(menu, 'siyuanLightbox');
                menu.addSeparator(parent);
                editorUi.menus.addMenuItem(menu, 'siyuanOpenByNewWindow');
                editorUi.menus.addMenuItem(menu, 'siyuanFullscreen');
            },
            document.querySelector('.geStatus'),
        );

        /* 注册菜单项 */
        /* 使用新窗口打开 */
        editorUi.actions.addAction('siyuanOpenByNewWindow', () => {
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
                win.loadURL(url.href);
            } catch (err) {
                console.warn(err);
                window.open(
                    url.href,
                    url.href,
                    `
                        popup = true,
                    `,
                );
            }
        });

        /* 全屏切換 */
        editorUi.actions.addAction('siyuanFullscreen', () => {
            if (document.fullscreenElement) {
                document.exitFullscreen()
            } else {
                document.documentElement.requestFullscreen()
            }
        });
        
        /* 灯箱模式 */
        editorUi.actions.addAction('siyuanLightbox', () => {
            window.siyuan.setBlockAttrs({
                'custom-lightbox': '1',
            }).then(response => {
                if (response.ok) {
                    window.siyuan.url.searchParams.set('lightbox', 1);
                    window.location.href = window.siyuan.url.href;
                }
            })
        });

        // /* 将菜单组添加到菜单 */
        // const menu_extras = editorUi.menus.get('extras');
        // const old_funct = menu_extras.funct;
        // menu_extras.funct = function (menu, parent) {
        //     editorUi.menus.addMenuItems(menu, ['siyuanOpenByNewWindow', 'siyuanFullscreen', '-'], parent);
        //     old_funct.apply(this, arguments);
        // };
    })();


    /* 挂载的对象 */
    window.siyuan = {
        /* 思源配置 */
        config: window.top.siyuan?.config,
        /* 挂件块 ID */
        id,
        /* URL */
        url,
        /* 正则表达式 */
        regs,
        /* 模式 */
        mode: (() => {
            const node = window.frameElement?.parentElement?.parentElement;
            if (node) {
                switch (node.dataset.type) {
                    case 'NodeIFrame':
                        return 'iframe';
                    case 'NodeWidget':
                        return 'widget';
                    default:
                        return node.dataset.type;
                }
            }
            else if (regs.id.test(url.searchParams.get('id'))) {
                return 'window';
            }
            else {
                return null;
            }
        })(),
        /* 设置块属性 */
        setBlockAttrs: async (attrs, id = window.siyuan.id) => fetch('/api/attr/setBlockAttrs', {
            body: JSON.stringify({
                id,
                attrs,
            }),
            method: 'POST',
        }),
        /* 保存方法 */
        save: function (
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
                mxEvent.addListener(button, 'click', async () => {
                    const id = window.siyuan.id;
                    // console.log(id);

                    /* 提取主文件名与文件扩展名 */
                    function filenameParse(filename) {
                        const idx2 = filename.lastIndexOf('.drawio.');
                        const idx = (idx2 > 0) ? idx2 : filename.lastIndexOf('.');
                        const file_name_main = idx > 0 ? filename.substring(0, idx) : filename;
                        const file_name_ext = idx > 0 ? filename.substring(filename.lastIndexOf('.') + 1) : 'drawio';
                        filename = `${file_name_main}.${file_name_ext}`;
                        return { name: filename, main: file_name_main, ext: file_name_ext };
                    }

                    /* 上传至资源文件夹 */
                    async function saveDataToSiyuan(filename, _format, filedata, mime, base64Encoded = false) {
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
                        fetch("/api/asset/upload", {
                            body: formdata,
                            method: "POST",
                            // headers: { Authorization: "Token " + this.apitoken },
                        }).then(response => {
                            return response.json();
                        }).then(data => {
                            // console.log(data);
                            let asset = data.data.succMap[name];
                            console.log(asset);
                            if (asset.startsWith('/assets/'))
                                asset = asset.replace(/^\/assets\//, 'assets/')
                            if (!asset.endsWith(name)) {
                                // 文件名更改
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
                                window.siyuan.setBlockAttrs(
                                    {
                                        'custom-data-assets': asset,
                                        'data-export-md': markdown,
                                        'data-export-html': html,
                                    },
                                    id,
                                ).then((response) => {
                                    return response.json();
                                }).then((data) => {
                                    if (data.code == 0) {
                                        // console.log(editorUi);
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

                                        editorUi.getCurrentFile().rename(file_name); // 更改标题
                                        editorUi.hideDialog();
                                        editorUi.editor.setStatus(mxResources.get('allChangesSaved'));
                                    }
                                })
                            } else {
                                editorUi.hideDialog();
                                editorUi.editor.setStatus(mxResources.get('allChangesSaved'));
                            }
                        });
                    };

                    if (window.siyuan.regs.id.test(id)) {
                        // change(App.MODE_DEVICE);
                        let filename = filenameParse(nameInput.value);
                        file_name = filename.name;
                        file_name_main = filename.main;
                        file_name_ext = filename.ext;

                        let file_content = null;
                        let file_type = null;
                        // 根据文件扩展名调用不同的保存方法
                        switch (file_name_ext) {
                            case 'jpg':
                            case 'pdf':
                            case 'vsdx':
                            default:
                                return;
                            case 'drawio':
                                {
                                    /**
                                     * ~/js/diagramly/EditorUi.js -> EditorUi.prototype.getFileData
                                     */
                                    file_content = editorUi.getFileData(
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
                                    file_type = "application/xml";
                                    saveDataToSiyuan(file_name, undefined, file_content, file_type, undefined);
                                }

                                break;
                            case 'png':
                                /**
                                 * ~/js/diagramly/EditorUi.js -> EditorUi.prototype.showExportDialog
                                 *   👉~/js/diagramly/EditorUi.js -> EditorUi.prototype.exportImage
                                 *     👉~/js/diagramly/EditorUi.js -> EditorUi.prototype.exportToCanvas
                                 *       👉~/js/diagramly/EditorUi.js -> EditorUi.prototype.saveCanvas
                                 */
                                editorUi.showExportDialog(
                                    mxResources.get('formatPng'),
                                    false,
                                    mxResources.get('save'),
                                    'https://www.diagrams.net/doc/faq/export-diagram',
                                    mxUtils.bind(
                                        this,
                                        function (
                                            scale,
                                            transparentBackground,
                                            ignoreSelection,
                                            addShadow,
                                            editable,
                                            embedImages,
                                            border,
                                            cropImage,
                                            currentPage,
                                            dummy,
                                            grid,
                                            keepTheme,
                                            exportType,
                                        ) {
                                            var val = parseInt(scale);

                                            if (!isNaN(val) && val > 0) {
                                                /* 劫持保存文件方法 */
                                                let temp_saveData = editorUi.saveData;

                                                editorUi.saveData = (
                                                    filename,
                                                    ext,
                                                    filedata,
                                                    mime,
                                                    base64Encoded,
                                                ) => {
                                                    saveDataToSiyuan(
                                                        filename,
                                                        ext,
                                                        filedata,
                                                        mime,
                                                        base64Encoded,
                                                    );

                                                    editorUi.saveData = temp_saveData;
                                                };

                                                editorUi.exportImage(
                                                    val / 100,
                                                    transparentBackground,
                                                    ignoreSelection,
                                                    addShadow,
                                                    editable,
                                                    border,
                                                    !cropImage,
                                                    false,
                                                    null,
                                                    grid,
                                                    null,
                                                    keepTheme,
                                                    exportType,
                                                );
                                            }
                                        }),
                                    true,
                                    Editor.defaultIncludeDiagram,
                                    'png',
                                    true,
                                );

                                break;
                            case 'svg':
                                /**
                                 * ~/js/diagramly/EditorUi.js -> EditorUi.prototype.showExportDialog
                                 * REF ~/js/diagramly/Menus.js -> editorUi.showExportDialog(mxResources.get('formatSvg')
                                 */
                                editorUi.showExportDialog(
                                    mxResources.get('formatSvg'),
                                    true,
                                    mxResources.get('save'),
                                    'https://www.diagrams.net/doc/faq/export-diagram',
                                    mxUtils.bind(
                                        this,
                                        function (
                                            scale,
                                            transparentBackground,
                                            ignoreSelection,
                                            addShadow,
                                            editable,
                                            embedImages,
                                            border,
                                            cropImage,
                                            currentPage,
                                            linkTarget,
                                            grid,
                                            keepTheme,
                                            exportType,
                                            embedFonts,
                                            lblToSvg,
                                        ) {
                                            var val = parseInt(scale);

                                            if (!isNaN(val) && val > 0) {
                                                /* 劫持保存文件方法 */
                                                let temp_isLocalFileSave = editorUi.isLocalFileSave;
                                                let temp_getBaseFilename = editorUi.getBaseFilename;
                                                let temp_saveData = editorUi.saveData;

                                                editorUi.isLocalFileSave = (..._args) => true;
                                                editorUi.getBaseFilename = (..._args) => file_name_main;
                                                editorUi.saveData = (...args) => {
                                                    saveDataToSiyuan(...args);

                                                    editorUi.isLocalFileSave = temp_isLocalFileSave;
                                                    editorUi.getBaseFilename = temp_getBaseFilename;
                                                    editorUi.saveData = temp_saveData;
                                                };

                                                editorUi.exportSvg(
                                                    val / 100,
                                                    transparentBackground,
                                                    ignoreSelection,
                                                    addShadow,
                                                    editable,
                                                    embedImages,
                                                    border,
                                                    !cropImage,
                                                    false,
                                                    linkTarget,
                                                    keepTheme,
                                                    exportType,
                                                    embedFonts,
                                                );
                                            }
                                        }),
                                    true,
                                    null,
                                    'svg',
                                    true,
                                );

                                break;
                            case 'html':
                                /**
                                 * ~/js/diagramly/EditorUi.js -> EditorUi.prototype.showHtmlDialog
                                 * REF ~/js/diagramly/Menus.js -> editorUi.showHtmlDialog(mxResources.get('export')
                                 */
                                editorUi.showHtmlDialog(
                                    mxResources.get('save'),
                                    'https://www.diagrams.net/doc/faq/embed-html-options',
                                    undefined,
                                    function (
                                        publicUrl,
                                        zoomEnabled,
                                        initialZoom,
                                        linkTarget,
                                        linkColor,
                                        fit,
                                        allPages,
                                        layers,
                                        tags,
                                        lightbox,
                                        editLink,
                                    ) {
                                        /**
                                         * ~/js/diagramly/EditorUi.js -> EditorUi.prototype.createHtml
                                         * REF ~/js/diagramly/Menus.js -> editorUi.showHtmlDialog(mxResources.get('export')
                                         */
                                        editorUi.createHtml(
                                            publicUrl,
                                            zoomEnabled,
                                            initialZoom,
                                            linkTarget,
                                            linkColor,
                                            fit,
                                            allPages,
                                            layers,
                                            tags,
                                            lightbox,
                                            editLink,
                                            mxUtils.bind(
                                                this,
                                                function (
                                                    html,
                                                    scriptTag,
                                                ) {
                                                    var basename = editorUi.getBaseFilename(allPages);
                                                    var result = '<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=5,IE=9" ><![endif]-->\n'
                                                        + '<!DOCTYPE html>\n<html>\n<head>\n<title>'
                                                        + mxUtils.htmlEntities(basename)
                                                        + '</title>\n'
                                                        + '<meta charset="utf-8"/>\n</head>\n<body>'
                                                        + html
                                                        + '\n'
                                                        + scriptTag
                                                        + '\n</body>\n</html>';

                                                    saveDataToSiyuan(
                                                        file_name,
                                                        'html',
                                                        result,
                                                        'text/html',
                                                    );
                                                },
                                            ),
                                        );
                                    },
                                );

                                break;
                            case 'xml':
                                {
                                    /**
                                     * REF ~/js/diagramly/Menus.js -> editorUi.actions.put('exportXml'
                                     */
                                    let div = document.createElement('div');
                                    div.style.whiteSpace = 'nowrap';
                                    let noPages = editorUi.pages == null || editorUi.pages.length <= 1;

                                    let hd = document.createElement('h3');
                                    mxUtils.write(
                                        hd,
                                        mxResources.get('formatXml'),
                                    );
                                    hd.style.cssText = 'width:100%;text-align:center;margin-top:0px;margin-bottom:4px';
                                    div.appendChild(hd);

                                    let selection = editorUi.addCheckbox(
                                        div,
                                        mxResources.get('selectionOnly'),
                                        false,
                                        editorUi.editor.graph.isSelectionEmpty(),
                                    );
                                    let compressed = editorUi.addCheckbox(
                                        div,
                                        mxResources.get('compressed'),
                                        false,
                                    );
                                    let pages = editorUi.addCheckbox(
                                        div,
                                        mxResources.get('allPages'),
                                        !noPages,
                                        noPages,
                                    );
                                    pages.style.marginBottom = '16px';

                                    mxEvent.addListener(
                                        selection,
                                        'change',
                                        function () {
                                            if (selection.checked) {
                                                pages.setAttribute(
                                                    'disabled',
                                                    'disabled',
                                                );
                                            }
                                            else {
                                                pages.removeAttribute('disabled');
                                            }
                                        });

                                    let dlg = new CustomDialog(
                                        editorUi,
                                        div,
                                        mxUtils.bind(
                                            this,
                                            function () {
                                                /* 劫持保存文件方法 */
                                                let temp_isLocalFileSave = editorUi.isLocalFileSave;
                                                let temp_getBaseFilename = editorUi.getBaseFilename;
                                                let temp_saveData = editorUi.saveData;

                                                editorUi.isLocalFileSave = (..._args) => true;
                                                editorUi.getBaseFilename = (..._args) => file_name_main;
                                                editorUi.saveData = (...args) => {
                                                    saveDataToSiyuan(...args);

                                                    editorUi.isLocalFileSave = temp_isLocalFileSave;
                                                    editorUi.getBaseFilename = temp_getBaseFilename;
                                                    editorUi.saveData = temp_saveData;
                                                };

                                                editorUi.downloadFile(
                                                    'xml',
                                                    !compressed.checked,
                                                    null,
                                                    !selection.checked,
                                                    noPages || !pages.checked,
                                                );
                                            }),
                                        null,
                                        mxResources.get('save'),
                                    );

                                    editorUi.showDialog(
                                        dlg.container,
                                        300,
                                        200,
                                        true,
                                        true,
                                    );
                                }

                                break;
                        }
                    }
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
    }
});
/* 👆 SIYUAN 👆 */
