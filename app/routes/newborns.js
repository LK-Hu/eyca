// app/routes/newborns.js


import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('newborn');
  }
});