// app/models/wedding.js

import Photo from './photo';

var WeddingPhoto = Photo;

WeddingPhoto.reopenClass({
  FIXTURES: [
    {
      id: 1,
      href: 'http://placekitten.com/g/600/450',
      width: 600, 
      height: 450,
      alt: 'Image Description',
      masonryItemClass: 'masonry-item'
    },
    {
      id: 2,
      href: 'http://placekitten.com/g/600/450',
      width: 600, 
      height: 450,
      alt: 'Image Description',
      masonryItemClass: 'masonry-item'
    },
    {
      id: 3,
      href: 'http://placekitten.com/g/600/450',
      width: 600, 
      height: 450,
      alt: 'Image Description',
      masonryItemClass: 'masonry-item'
    },
    {
      id: 4,
      href: 'http://placekitten.com/g/600/450',
      width: 600, 
      height: 450,
      alt: 'Image Description',
      masonryItemClass: 'masonry-item'
    },
    {
      id: 5,
      href: 'http://placekitten.com/g/600/450',
      width: 600, 
      height: 450,
      alt: 'Image Description',
      masonryItemClass: 'masonry-item'
    },
  ]
});

export default WeddingPhoto;