/* 👇 SIYUAN 👇 */
/* 启用开发模式 */
(() => {
    const SIYUAN_PLUGIN_ID = 'siyuan'; // 思源插件 ID

    function updateURL(url, id, asset = null, lightbox = null) {
        url.searchParams.set('id', id); // 块 ID
        url.searchParams.set('client', 1); // 跳过新建时选择储存位置
        
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
            url.hash = `#U${url.origin}/${asset}`;
        }

        if (lightbox) {
            url.searchParams.set('lightbox', lightbox);
        }

        if (url.searchParams.get('dev') !== '1') {
            url.searchParams.set('dev', 1);
            // console.log(url.href);
            window.location.href = url.href;
        }
    }

    const url = new URL(window.location);
    // console.log(urlParams);
    // console.log(window.location);

    let id = url.searchParams.get('id');
    const reg = /^\d{14}\-[0-9a-z]{7}$/;

    if (!reg.test(id)) {
        const node = window.frameElement?.parentElement?.parentElement;
        if (node) {
            if (node.dataset.type === 'NodeIFrame') {
                alert('在 iframe 块中无法保存资源文件至思源笔记！\nUnable to save resource file to SiYuan Note in an iframe block.');
                return;
            }
            id = node.dataset.nodeId;
        }
    }

    if (reg.test(id)) {
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
            updateURL(url, id, asset, lightbox);
        });
    }
})();
/* 👆 SIYUAN 👆 */
