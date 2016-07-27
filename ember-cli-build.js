var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
                                       // Add options here
                                   });

  // app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css.map', {
  // destDir: 'assets'
  // });
  app.import(app.bowerDirectory + '/animate.css/index.js');

  return app.toTree();
};
