const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  plugins: [{
    plugin: CracoAntDesignPlugin,
    options: {
      customizeThemeLessPath: './src/antd.theme.less'
    },
    cssLoaderOptions: {
      modules: true,
      localIdentName: "[local]_[hash:base64:5]",
    },
  }],
};