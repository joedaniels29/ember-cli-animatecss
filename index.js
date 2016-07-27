'use strict';
module.exports = {
  name : 'ember-cli-animatecss',
  included : function(app) {
    this._super.included(app);
    app.import({
      development: app.bowerDirectory + '/animate.css/animate.css',
      production: app.bowerDirectory + '/animate.css/animate.css.min'
      });
  }
};
