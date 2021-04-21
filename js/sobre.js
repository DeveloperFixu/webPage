/**Js sobre nosotros */
//Initialize with Vanilla JavaScript
var elem = document.querySelector('.contenedor_galeria');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.item',
  columnWidth: 230,
  gutter: 20,
  isFitWidth: true
});
