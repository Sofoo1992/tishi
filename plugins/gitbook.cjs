const RemoveImageSpacesPlugin = require('./remove-image-space-plugin.cjs');

function gitBookPlugin() {
  return {
    name: 'gitbook-plugin',
    configureWebpack(config) {
      config.module.rules.forEach((rule) => {
        if (rule.test.toString().includes('md')) {
          rule.use.push(require.resolve('./gitbook-loader.js'));
        }
      });

      config.plugins.push(new RemoveImageSpacesPlugin());
    },
  };
}

module.exports = gitBookPlugin;
