// app/mixins/masonry.js

import Ember from 'ember';

export default Ember.Mixin.create({
  initMasonry: function(self, container, columnWidth, itemSelector) {
    var $container = self.$(container);
    imagesLoaded($container, function() {
      $container.masonry({
        columnWidth: columnWidth,
        itemSelector: itemSelector,
        percentPosition: true,
        gutter: 2
      });
    });
    
  }
});