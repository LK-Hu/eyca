// app/views/application.js

import Ember from 'ember';
import InspiniaMixin from '../mixins/inspinia';

export default Ember.Component.extend(InspiniaMixin, {

  loadEffect: function() {
    // minimalize menu
    var self = this;
    Ember.$('.navbar-minimalize').click(function () {
        Ember.$('body').toggleClass("mini-navbar");
        self.get('smoothlyMenu')();
    });
    // f ix height.
    self.get('fixHeight')();
    Ember.$(window).bind("load resize click scroll", function() {
      if(!Ember.$("body").hasClass('body-small')) {
        self.get('fixHeight')();
      }
    });
    // Minimalize menu when screen is less than 768px
    Ember.$(function() {
      Ember.$(window).bind("load resize", function() {
        if (Ember.$(this).width() < 769) {
            Ember.$('body').addClass('body-small');
        } else {
            Ember.$('body').removeClass('body-small');
        }
      });
    });

  }.on('didInsertElement')
});