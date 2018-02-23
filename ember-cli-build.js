'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const CssImport = require('postcss-import');

module.exports = function(defaults) {
  const app = new EmberAddon(defaults, {
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
