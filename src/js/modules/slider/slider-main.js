import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(container, btns, prevBtns, nextBtns) {
        super(container, btns, prevBtns, nextBtns);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            this.hanson.style.display = 'none';
            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.display = 'block';
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp');
            }
        }catch(e){}

        this.slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.remove('animated', 'fadeInDown');
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
        this.slides[this.slideIndex - 1].classList.add('animated', 'fadeInDown');
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1);
            });
            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.prevBtns.forEach(item => {
            item.addEventListener('click', (e) => {
                
                e.preventDefault();
                e.stopPropagation();
                this.plusSlides(-1);
            });
        });

        this.nextBtns.forEach(item => {
            item.addEventListener('click', (e) => {
            
                e.preventDefault();
                e.stopPropagation();
                this.plusSlides(1);
            });
        });
    }

    render() {


        if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson');
            } catch(e){}
            
            this.showSlides(this.slideIndex);
            this.bindTriggers();

        }   
    }
}