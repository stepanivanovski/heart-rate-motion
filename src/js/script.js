// "use strict";
//import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

window.addEventListener("DOMContentLoaded", function() {
  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    controls: false,
    controlsText: ["<img src = '../img/slider/button_prev.png'", "<img src = '../img/slider/button_next.png'"],
    nav:false
  });

  document.querySelector('.next-btn').addEventListener('click', function () {
    slider.goTo("next");
  });

  document.querySelector('.prev-btn').addEventListener('click', function () {
    slider.goTo("prev");
  });
  
  $('.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('.container').find('.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
});
