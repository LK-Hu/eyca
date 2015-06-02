// app/models/portrait.js

import Photo from './photo';

var PortraitPhoto = Photo;

PortraitPhoto.reopenClass({
  FIXTURES: [
    {
      id: 1,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Family%20Portrait/family_01.jpg',
      width: 1000, 
      height: 664,
      masonryItemClass: 'masonry-item w4'
    },
    {
      id: 2,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Family%20Portrait/family_02.jpg',
      width: 750, 
      height: 1000,
      masonryItemClass: 'masonry-item w4'
    }
  ]
});

export default PortraitPhoto;