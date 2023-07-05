export default class Slider {
    constructor({container = null, 
        btns = null, 
        next = null, 
        prev = null,
        prevBtns = null,
        nextBtns = null,
        activeClass = '',
        animate,
        autoplay,
        paused } = {}) {
        this.container = document.querySelector(container);
        try {this.slides = this.container.children;} catch(e){}
        this.btns = document.querySelectorAll(btns);
        this.prevBtns = document.querySelectorAll(prevBtns);
        this.nextBtns = document.querySelectorAll(nextBtns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.paused = paused;
        this.slideIndex = 1; 
    }
}
