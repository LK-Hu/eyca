// app/models/newborn.js

import Photo from './photo';

var NewbornPhoto = Photo;

NewbornPhoto.reopenClass({
  FIXTURES: [
    {
      id: 1,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Maternity/Maternity_01.jpg',
      width: 1000, 
      height: 668,
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 2,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Maternity/Maternity_02.jpg',
      width: 1000, 
      height: 668,
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 3,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Maternity/Maternity_03.jpg',
      width: 668, 
      height: 1000,
      masonryItemClass: 'masonry-item'
    },
    {
      id: 4,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Maternity/Maternity_04.jpg',
      width: 668, 
      height: 1000,
      masonryItemClass: 'masonry-item'
    },
    {
      id: 5,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Maternity/Maternity_05.jpg',
      width: 647, 
      height: 1000,
      masonryItemClass: 'masonry-item'
    },
    {
      id: 6,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Maternity/Maternity_06.jpg',
      width: 1000, 
      height: 668,
      masonryItemClass: 'masonry-item'
    },
    {
      id: 7,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Maternity/Maternity_07.jpg',
      width: 1000, 
      height: 668,
      masonryItemClass: 'masonry-item'
    }
  ]
});

export default NewbornPhoto;