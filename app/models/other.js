// app/models/person.js

import Photo from './photo';

var OtherPhoto = Photo;

OtherPhoto.reopenClass({
  FIXTURES: [
    {
      id: 1,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Other/other_01.jpg',
      width: 1200, 
      height: 900,
      alt: 'Image Description',
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 2,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Other/other_02.jpg',
      width: 700, 
      height: 1000,
      alt: 'Image Description',
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 3,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Other/other_03.jpg',
      width: 600, 
      height: 450,
      alt: 'Image Description',
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 4,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Other/other_04.jpg',
      width: 600, 
      height: 450,
      alt: 'Image Description',
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 5,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Other/other_05.jpg',
      width: 600, 
      height: 450,
      alt: 'Image Description',
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 6,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Other/other_06.jpg',
      width: 600, 
      height: 450,
      alt: 'Image Description',
      masonryItemClass: 'masonry-item'
    },
    {
      id: 7,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Other/other_07.jpg',
      width: 600, 
      height: 450,
      alt: 'Image Description',
      masonryItemClass: 'masonry-item'
    },
    {
      id: 8,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Other/other_08.jpg',
      width: 600, 
      height: 450,
      alt: 'Image Description',
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 9,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Other/other_09.jpg',
      width: 600, 
      height: 450,
      alt: 'Image Description',
      masonryItemClass: 'masonry-item'
    },
    {
      id: 10,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/Other/other_10.jpg',
      width: 600, 
      height: 450,
      alt: 'Image Description',
      masonryItemClass: 'masonry-item'
    }
  ]
});

export default OtherPhoto;