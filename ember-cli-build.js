var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
                                       // Add options here
                                   });

  // app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css.map', {
  // destDir: 'assets'
  // });
  app.import({
    development: app.bowerDirectory + '/animate.css/animate.css',
    production: app.bowerDirectory + '/animate.css/animate.css.min'
    });
  return app.toTree();
};
