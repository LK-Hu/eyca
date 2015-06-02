// app/models/wedding.js

import Photo from './photo';

var WeddingPhoto = Photo;

WeddingPhoto.reopenClass({
  FIXTURES: [
    {
      id: 1,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Wedding/Wedding_01.jpg',
      width: 1000, 
      height: 667,
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 2,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Wedding/Wedding_02.jpg',
      width: 714, 
      height: 1000,
      masonryItemClass: 'masonry-item'
    },
    {
      id: 3,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Wedding/Wedding_03.jpg',
      width: 667, 
      height: 1000,
      masonryItemClass: 'masonry-item'
    },
    {
      id: 4,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Wedding/Wedding_04.jpg',
      width: 1000, 
      height: 662,
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 5,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Wedding/Wedding_05.jpg',
      width: 1000, 
      height: 664,
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 6,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Wedding/Wedding_06.jpg',
      width: 1000, 
      height: 424,
      masonryItemClass: 'masonry-item'
    },
    {
      id: 7,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Wedding/Wedding_07.jpg',
      width: 664, 
      height: 1000,
      masonryItemClass: 'masonry-item'
    },
    {
      id: 8,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Wedding/Wedding_08.jpg',
      width: 1000, 
      height: 662,
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 9,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Wedding/Wedding_09.jpg',
      width: 1000, 
      height: 667,
      masonryItemClass: 'masonry-item'
    },
    {
      id: 10,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Wedding/Wedding_10.jpg',
      width: 664, 
      height: 1000,
      masonryItemClass: 'masonry-item'
    },
    {
      id: 11,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Wedding/Wedding_11.jpg',
      width: 1000, 
      height: 664,
      masonryItemClass: 'masonry-item'
    },
    {
      id: 12,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Wedding/Wedding_12.jpg',
      width: 1000, 
      height: 664,
      masonryItemClass: 'masonry-item'
    },
    {
      id: 13,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Wedding/Wedding_13.jpg',
      width: 662, 
      height: 1000,
      masonryItemClass: 'masonry-item'
    },
    {
      id: 14,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Wedding/Wedding_14.jpg',
      width: 1000, 
      height: 750,
      masonryItemClass: 'masonry-item'
    }
  ]
});

export default WeddingPhoto;