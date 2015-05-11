// app/models/photo.js

import DS from 'ember-data';

export default DS.Model.extend({
  href: DS.attr('string'),
  width: DS.attr('number'),
  height: DS.attr('number'),
  alt: DS.attr('string'),
  title: DS.attr('string'),
  masonryItemClass: DS.attr('string')
});