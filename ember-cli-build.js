'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const CssImport = require('postcss-import');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [{
          module: CssImport,
        }]
      }
    }
  });

  return app.toTree();
};
