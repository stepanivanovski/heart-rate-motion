// "use strict";
//import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  controls: false,
  controlsText: ["<img src = '../img/slider/button_prev.png'", "<img src = '../img/slider/button_next.png'"],
  navPosition: 'bottom'
});

document.querySelector('.next-btn').addEventListener('click', function () {
  slider.goTo("next");
});

document.querySelector('.prev-btn').addEventListener('click', function () {
  slider.goTo("prev");
});