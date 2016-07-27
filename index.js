'use strict';
module.exports = {
  name : 'ember-cli-animatecss',
  included : function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/animate.css/index.js');
  }
};
