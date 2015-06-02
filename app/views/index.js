// app/views/index.js

import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    this._super();
    var options = {
      auto: true
    };

    // console.log('XXX detect viewport: ' + Ember.$(window).height());
    // // console.log('YYY detect viewport: ' + Ember.$('.page-wrapper').width());

    

    this.$('.bxslider').bxSlider(options);
  }
});