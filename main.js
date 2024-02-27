/* 👇 SIYUAN 👇 */
/* 启用开发模式 */
(async () => {
    const SIYUAN_PLUGIN_ID = 'siyuan'; // 思源插件 ID
    window.siyuan = {};
    window.siyuan.url = new URL(window.location);

    /* 切换至开发模式 */
    if (window.siyuan.url.searchParams.get('dev') !== '1') {
        window.siyuan.url.searchParams.set('dev', 1);
        window.location.href = window.siyuan.url.href;
    }

    window.siyuan.regs = {
        id: /^\d{14}\-[0-9a-z]{7}$/,
    };
    window.siyuan.node = window.frameElement?.parentElement?.parentElement;
    // console.log(urlParams);
    // console.log(window.location);

    window.siyuan.id = window.siyuan.url.searchParams.get('id');

    /* 移除字符串后缀 */
    function trimSuffix(str, suffix) {
        return str.endsWith(suffix) ? str.slice(0, -suffix.length) : str;
    }

    function init(
        id,
        url,
        asset = null,
        params = {},
    ) {
        url.searchParams.set('siyuan-inited', 1); // 初始化完成标志

        url.searchParams.set('id', id); // 块 ID
        url.searchParams.set('client', 1); // 跳过新建时选择储存位置
        url.searchParams.set('stealth', 1); // 静默模式
        // url.searchParams.set('local', 1); // 本地模式
        // url.searchParams.set('offline', 1); // 离线模式
        // url.searchParams.set('lockdown', 1); // 禁闭模式

        /* 加载思源插件 */
        const p = url.searchParams.get('p');
        if (p) {
            if (!p.includes(SIYUAN_PLUGIN_ID)) {
                url.searchParams.set('p', `${SIYUAN_PLUGIN_ID};${p}`);
            }
        }
        else {
            url.searchParams.set('p', SIYUAN_PLUGIN_ID);
        }

        // 加载文件
        if (asset) {
            const file_name = asset.split('/').pop();
            const url_asset = new URL(url.origin);
            const base_pathname = trimSuffix(url.pathname, "/widgets/drawio/");

            url_asset.pathname = `${base_pathname}/${asset}`;
            url_asset.searchParams.set("t", Date.now());

            url.searchParams.set("url", url_asset.href);
            url.searchParams.set("title", file_name);
        }

        for (const [key, value] of Object.entries(params)) {
            if (value) {
                url.searchParams.set(key, params[key]);
            }
        }

        window.location.href = url.href;
    }

    if (!window.siyuan.regs.id.test(window.siyuan.id)) {
        if (window.siyuan.node) {
            if (window.siyuan.node.dataset.type === 'NodeIFrame') {
                alert('在 iframe 块中无法保存资源文件至思源笔记！\nUnable to save resource file to SiYuan Note in an iframe block.');
                return;
            }
            window.siyuan.id = window.siyuan.node.dataset.nodeId;
        }
    }

    /* 获取同源的思源全局属性 */
    window.siyuan.frame = (() => {
        var frame = window.self;
        switch (frame) {
            case window.top:
            case window.parent:
                return null;

            default:
                while (frame !== window.top) {
                    if (!!frame.siyuan && frame.siyuan !== window.siyuan) break;
                    frame = frame.parent;
                }
                return frame;
        }
    })();
    window.siyuan.openAPI = window.siyuan.frame?.openAPI;
    window.siyuan.global = window.siyuan.frame?.siyuan;
    window.siyuan.config = window.siyuan.global?.config;
    window.mxIsSiyuan = !!window.siyuan.global;

    /* 模式 */
    window.siyuan.mode = (() => {
        if (window.siyuan.node) {
            switch (window.siyuan.node.dataset.type) {
                case 'NodeIFrame':
                    return 'iframe';
                case 'NodeWidget':
                    return 'widget';
                default:
                    return window.siyuan.node.dataset.type;
            }
        }
        else if (window.siyuan.regs.id.test(window.siyuan.url.searchParams.get('id'))) {
            return 'window';
        }
        else {
            return null;
        }
    })();

    window.siyuan.ready = new Promise(resolve => {
        window.siyuan.resolve = resolve;
    });


    /* 设置块属性 */
    window.siyuan.setBlockAttrs = async function (attrs = this.attrs, id = this.id) {
        const response = await fetch('/api/attr/setBlockAttrs', {
            body: JSON.stringify({
                id,
                attrs,
            }),
            method: 'POST',
        });
        const body = await response.json();
        return body;
    }

    /* 获取块属性 */
    window.siyuan.getBlockAttrs = async function (id = this.id) {
        const response = await fetch('/api/attr/getBlockAttrs', {
            body: JSON.stringify({
                id,
            }),
            method: 'POST',
        });
        const body = await response.json();
        return body;
    }

    /* 跳转到认证页面 */
    window.siyuan.auth = function (to = globalThis.location.href.slice(globalThis.location.origin.length)) {
        const url = new URL(window.location.origin);
        url.pathname = "/check-auth";
        url.searchParams.set("to", to);
        window.location.replace(url); // 当前页面不会保存到会话历史中
    }

    if (window.siyuan.regs.id.test(window.siyuan.id)) {
        try {
            const response = await window.siyuan.getBlockAttrs();
            window.siyuan.attrs = response.data;

            if (window.siyuan.url.searchParams.get('siyuan-inited') !== '1') {
                const asset = window.siyuan.attrs['custom-data-assets'];
                const lightbox = window.siyuan.attrs['custom-lightbox'];
                const dark = window.siyuan.attrs['custom-dark'];
                const ui = window.siyuan.attrs['custom-ui'];

                init(
                    window.siyuan.id,
                    window.siyuan.url,
                    asset,
                    {
                        lightbox,
                        dark,
                        ui,
                    },
                );
            }

            window.siyuan.resolve();
        } catch (err) {
            window.siyuan.auth();
        }
    }
})();
/* 👆 SIYUAN 👆 */
