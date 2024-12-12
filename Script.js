const left = document.querySelector('.Arrow.left');
const right = document.querySelector('.Arrow.right');
const slider = document.querySelector('.slider');
const image = document.querySelectorAll('.image');
const length = image.length;
let SlideNumber = 1;

const bottom = document.querySelector('.bottom');
for (let i = 0; i < length; i++) {
    const div = document.createElement('div');
    div.className = 'button';
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';

const resetBg = () => {
    buttons.forEach((button) => {
        button.addEventListener('mouseover', ClearSlideshow);
        button.addEventListener('mouseout', slideshow);
        button.style.backgroundColor = 'transparent';
    });
};

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        resetBg();
        slider.style.transform = `translateX(-${i * 800}px)`;
        SlideNumber = i + 1;
        button.style.backgroundColor = 'white'
    });
});

const changecolor = () => {
    resetBg();
    buttons[SlideNumber - 1].style.backgroundColor = 'white';
};


const nextSlide = () => {
    slider.style.transform = `translateX(-${SlideNumber * 800}px)`;
    slider.style.transition = 'transform 0.5s ease-in-out';
    SlideNumber++;
};
const getFirstSlide = () => {
    slider.style.transition = 'none';
    slider.style.transform = `translate(0px)`;
    SlideNumber = 1;
};
const prevslide = () => {

    slider.style.transform = `translateX(-${(SlideNumber - 2) * 800}px)`;
    slider.style.transition = 'transforms 0.5s ease-in-out';
    SlideNumber--;
};
const getLastSlide = () => {
    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`
    SlideNumber = length;
};
left.addEventListener('click', () => {
    if (SlideNumber < image.length) {
        nextSlide();
    }
    else {
        getFirstSlide();
    }
    changecolor();
});

right.addEventListener('click', () => {
    if (SlideNumber > 1) {
        prevslide();
    }
    else {
        getLastSlide();
    }
    changecolor();
});

let sliderInterval;
const slideshow = () => {
    sliderInterval = setInterval(() => {
        if (SlideNumber < length) {
            nextSlide();
        }
        else {
            getFirstSlide();
        }
        changecolor();
    }, 2000);
};

slideshow();

const ClearSlideshow = () => {
    clearInterval(sliderInterval);
};

slider.addEventListener('mouseover', ClearSlideshow);
slider.addEventListener('mouseout', slideshow);
right.addEventListener('mouseover', ClearSlideshow);
right.addEventListener('mouseout', slideshow);
left.addEventListener('mouseover', ClearSlideshow);
left.addEventListener('mouseout', slideshow);