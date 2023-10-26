import initButtonTop from "./modules/button-top.js";
import initScrollAnimation from "./modules/scroll-animation.js";
initButtonTop();
initScrollAnimation();

if (window.SimpleAnime) {
  new SimpleAnime();
}
