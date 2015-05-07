// app/mixins/inspinia.js

import Ember from 'ember';

export default Ember.Mixin.create({
  smoothlyMenu: function() {
    if (!Ember.$('body').hasClass('mini-navbar') || Ember.$('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        Ember.$('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
            function () {
                Ember.$('#side-menu').fadeIn(500);
            }, 100);
    } else if (Ember.$('body').hasClass('fixed-sidebar')){
        Ember.$('#side-menu').hide();
        setTimeout(
            function () {
                Ember.$('#side-menu').fadeIn(500);
            }, 300);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        Ember.$('#side-menu').removeAttr('style');
    }
  },
  fixHeight: function() {
    var heightWithoutNavbar = Ember.$("body > #wrapper").height() - 61;
    Ember.$(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");
  }
});