// app/models/wedding.js

import Photo from './photo';

var WeddingPhoto = Photo;

WeddingPhoto.reopenClass({
  FIXTURES: [
    {
      id: 1,
      src: 'http://placekitten.com/g/600/400',
      w: 300,
      h: 200,
      title: 'whooa'
    }
  ]
});

export default WeddingPhoto;