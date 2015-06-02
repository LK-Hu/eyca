// app/models/person.js

import Photo from './photo';

var PersonPhoto = Photo;

PersonPhoto.reopenClass({
  FIXTURES: [
    {
      id: 1,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/People/people_01.jpg',
      width: 1000, 
      height: 664,
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 2,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/People/people_02.jpg',
      width: 750, 
      height: 1000,
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 3,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/People/people_03.jpg',
      width: 1000, 
      height: 662,
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 4,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/People/people_04.jpg',
      width: 1000, 
      height: 667,
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 5,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/People/people_05.jpg',
      width: 1000, 
      height: 667,
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 6,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/People/people_06.jpg',
      width: 1000, 
      height: 750,
      masonryItemClass: 'masonry-item'
    },
    {
      id: 7,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/People/people_07.jpg',
      width: 667, 
      height: 1000,
      masonryItemClass: 'masonry-item'
    },
    {
      id: 8,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/People/people_08.jpg',
      width: 1000, 
      height: 664,
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 9,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/People/people_09.jpg',
      width: 1000, 
      height: 667,
      masonryItemClass: 'masonry-item w2'
    },
    {
      id: 10,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/People/people_10.jpg',
      width: 1000, 
      height: 664,
      masonryItemClass: 'masonry-item'
    },
    {
      id: 11,
      href: 'https://dl.dropboxusercontent.com/u/15863535/EYPhotos/People/people_11.jpg',
      width: 1000, 
      height: 664,
      masonryItemClass: 'masonry-item w2'
    }
  ]
});

export default PersonPhoto;