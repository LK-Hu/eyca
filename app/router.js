import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('weddings');
  this.route('newborn');
  this.route('portrait');

  this.route('personalWork', function() {
    this.route('people');
    this.route('other');
  });

  this.route('about');
  this.route('contact');
});
