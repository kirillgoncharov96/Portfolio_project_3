import MainSlider from "./modules/slider/slider-main";
import VideoPlayer from "./modules/playVideo";
import MiniSlider from "./modules/slider/slider-mini";
import Defference from "./modules/difference";
import Form from "./modules/forms";
import ShowInfo from "./modules/showInfo";
import Download from "./modules/download";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const slider = new MainSlider({container : '.page', btns : '.next'});
    slider.render();

    const modulePageSlider = new MainSlider({container : '.moduleapp', btns : '.next', prevBtns: '.prevmodule', nextBtns: '.nextmodule'});
    modulePageSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true,
        paused: false
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    new Defference('.officerold', '.officernew', '.officer__card-item').init();

    new Form('form', 'input').init();

    new ShowInfo('.plus__content').init();

    new Download('.download').init();
});


