// app/views/others.js

import Ember from 'ember';
import MasonryMixin from '../../mixins/masonry';

export default Ember.View.extend(MasonryMixin, {
  didInsertElement: function() {
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.get('initMasonry')(this, '#others-masonry', '.grid-sizer', '.masonry-item'));
  }
});