/* 👇 SIYUAN 👇 */
/* 启用开发模式 */
(() => {
    const SIYUAN_PLUGIN_ID = 'siyuan'; // 思源插件 ID
    const url = new URL(window.location);

    if (url.searchParams.get('dev') !== '1') {
        url.searchParams.set('dev', 1);
        window.location.href = url.href;
    }

    const regs = {
        id: /^\d{14}\-[0-9a-z]{7}$/,
    };
    const node = window.frameElement?.parentElement?.parentElement;
    // console.log(urlParams);
    // console.log(window.location);

    let id = url.searchParams.get('id');

    /* 移除字符串后缀 */
    function trimSuffix(str, suffix) {
        return str.endsWith(suffix) ? str.slice(0, -suffix.length) : str;
    }

    function init(url, id, asset = null, params = {}) {
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

        if (url.searchParams.get('siyuan-inited') !== '1') {
            url.searchParams.set('siyuan-inited', 1);
            // console.log(url.href);
            window.location.href = url.href;
        }
    }

    if (!regs.id.test(id)) {
        if (node) {
            if (node.dataset.type === 'NodeIFrame') {
                alert('在 iframe 块中无法保存资源文件至思源笔记！\nUnable to save resource file to SiYuan Note in an iframe block.');
                return;
            }
            id = node.dataset.nodeId;
        }
    }

    if (regs.id.test(id)) {
        fetch("/api/attr/getBlockAttrs", {
            body: JSON.stringify({
                id: id,
            }),
            method: "POST",
            // headers: { Authorization: "Token " + this.apitoken },
        }).then((response) => {
            return response.json();
        }).then((data) => {
            // console.log(data);
            const asset = data.data['custom-data-assets'];
            const lightbox = data.data['custom-lightbox'];
            const dark = data.data['custom-dark'];
            const ui = data.data['custom-ui'];
            init(
                url,
                id,
                asset,
                {
                    lightbox,
                    dark,
                    ui,
                },
            );
        });
    }

    /* 获取同源的思源全局属性 */
    const siyuan = (() => {
        var frame = window.self;
        switch (frame) {
            case window.top:
            case window.parent:
                return null;

            default:
                while (frame !== window.top) {
                    if (!!frame.siyuan) break;
                    frame = frame.parent;
                }
                return frame?.siyuan;
        }
    })();

    /* 模式 */
    const mode = (() => {
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
    })();

    window.mxIsSiyuan = !!siyuan;
    window.siyuan = {
        id,
        url,
        regs,
        mode,
        global: siyuan,
        config: siyuan?.config,
    };
})();
/* 👆 SIYUAN 👆 */
