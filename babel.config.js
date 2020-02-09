module.exports = function (api) {
    api.cache(true);
    const presets = [
        ["@babel/preset-env", {
            "targets": {
                "browsers": ["last 1 version", "ie >= 11"]
            }
        }]
    ];
    return { presets }
};