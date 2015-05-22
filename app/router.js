import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('weddings');
  this.route('newborns');
  this.route('portraits');

  this.route('personalWork', function() {
    this.route('people');
    this.route('others');
  });

  this.route('about');
  this.route('contact');
});
