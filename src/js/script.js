$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/carousel/chevron-left-solid.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/chevron-right-solid.png" alt="next"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                dots: true
              }
            }
        ]
      });
  });