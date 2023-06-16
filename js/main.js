/* Slick JS */

$(document).ready(function(){
  $('.carousel').slick({
    arrows: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }]
  });
});

/* Filtro de Tabs */

function changeCategory(categoria) {
  var items = document.querySelectorAll('.carousel__item');
  
  items.forEach(item => {
    var item_category = item.getAttribute('data-category');
    
    if ( item_category !== categoria) {
      item.classList.remove('show');
      item.classList.add('hide');
    } else {
      item.classList.remove('hide');
      item.classList.add('show');
    }
  });
}