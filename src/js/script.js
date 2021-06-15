$(document).ready(function(){
    $('.carousel__inner').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1200,
      prevArrow: '<button class="slick-prev"><img src = "img/slider/button_prev.png"></button>',
      nextArrow: '<button class="slick-next"><img src = "img/slider/button_next.png"></button>'
    });
  });