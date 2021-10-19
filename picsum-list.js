const picsumIds = [
  237,
  433,
  577,
  582,
  593,
  659,
  718,
  783,
  790,
  837,
  1024,
  1025,
  1074,
  1084
];

let output = '';

picsumIds.forEach(function(imageId){

  output += `<img src="https://picsum.photos/id/${imageId}/300/300" alt="Lorem Picsum Image">`

});

const gallery = document.querySelector('.gallery');
gallery.innerHTML = output;