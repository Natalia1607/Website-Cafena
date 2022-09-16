const prev = document.getElementById('btn_prev'),
      next = document.getElementById('btn_next'),
      slides = document.querySelectorAll('.review__container');

let index = 0;

/* Slider */
const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};

const prepareCurrentSlide = int => {
    activeSlide(index);
};

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
};

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
};

/*Scroll header */
function scrollHeader(){
    const header = document.getElementById('header');
    const logotip = document.getElementById('logotip');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header');
        logotip.src = './../img/header-logo-light.png';
    } 
    else {
        header.classList.remove('scroll-header');
        logotip.src = './../img/header-logo.png';
    }
}

window.addEventListener('scroll', scrollHeader);
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);