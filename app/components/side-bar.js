// app/components/side-bar.js

import Ember from 'ember';

export default Ember.Component.extend({
  initMerisMenu: function() {
    this.$('#side-menu').metisMenu();
  }.on('didInsertElement')
});