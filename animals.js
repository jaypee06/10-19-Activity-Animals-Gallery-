const picsumAnimals = [
  {
    id:           237,
    title:        'Puppy',
    src:          '237.jpg'
  },
  {
    id:           433,
    title:        'Bear',
    src:          '433.jpg'
  },
  {
    id:           577,
    title:        'Moose',
    src:          '577.jpg'
  },
  {
    id:           582,
    title:        'Coyote',
    src:          '582.jpg'
  },
  {
    id:           593,
    title:        'Tiger',
    src:          '593.jpg'
  },
  {
    id:           659,
    title:        'Husky',
    src:          '659.jpg'
  },
  {
    id:           718,
    title:        'Wolf',
    src:          '718.jpg'
  },
  {
    id:           783,
    title:        'Monkey',
    src:          '783.jpg'
  },
  {
    id:           790,
    title:        'Elk',
    src:          '790.jpg'
  },
  {
    id:           837,
    title:        'Bulldog',
    src:          '837.jpg'
  },
  {
    id:           1024,
    title:        'Bird',
    src:          '1024.jpg'
  },
  {
    id:           1025,
    title:        'Pug',
    src:          '1025.jpg'
  },
  {
    id:           1074,
    title:        'Big Cat',
    src:          '1074.jpg'
  },
  {
    id:           1084,
    title:        'Walrus',
    src:          '1084.jpg'
  }
];

let output = '';

picsumAnimals.forEach(function(imageId){
 
  output += 
  `<a href="images/sm/${imageId.id}.jpg"> 
  <img class = "image" src="images/sm/${imageId.id}.jpg"  alt= "A cute ${imageId.title}">
  </a>`
});



const gallery = document.querySelector('.Animal-Gallery');
gallery.innerHTML = output;
