/* 配置文件(可以被 data/widgets/custom.js 覆盖) */

export var config = {
    token: '', // API token, 无需填写
};

try {
    let custom = await import('/widgets/custom.js');
    config = custom.config;
} catch (err) {
    console.log(err);
} finally {
    console.log(config);
}

