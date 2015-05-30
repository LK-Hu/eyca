// app/views/index.js

import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    this._super();
    console.log('XXX: ' + this.$('.bxslider').html());
    this.$('.bxslider').bxSlider();
  }
});