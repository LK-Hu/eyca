// app/models/photo.js

import DS from 'ember-data';

export default DS.Model.extend({
  src: DS.attr('string'),
  w: DS.attr('number'),
  h: DS.attr('number'),
  title: DS.attr('string')
});