/* 👇 SIYUAN 👇 */
/* 启用开发模式 */
(() => {
    function updateURL(url, id, asset = null, lightbox = null) {
        url.searchParams.set('id', id); // 块 ID
        url.searchParams.set('client', 1); // 跳过新建时选择储存位置

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

    let url = new URL(window.location.href);
    // console.log(urlParams);
    // console.log(window.location);

    let id = url.searchParams.get('id');
    let reg = /^\d{14}\-[0-9a-z]{7}$/;

    window.mxIsSiyuan = reg.test(id);

    if (!reg.test(id)) {
        let node = window.frameElement?.parentElement?.parentElement;
        if (node) {
            if (node.getAttribute('data-type') == 'NodeIFrame') {
                alert('在 iframe 块中无法保存资源文件至思源笔记！\nUnable to save resource file to SiYuan Note in an iframe block.');
                return;
            }
            id = node.getAttribute('data-node-id');
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
            let asset = data.data['custom-data-assets'];
            let lightbox = data.data['custom-lightbox'];
            updateURL(url, id, asset, lightbox);
        });
    }
})();
/* 👆 SIYUAN 👆 */
