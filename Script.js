const left = document.querySelector('.Arrow.left');
const right = document.querySelector('.Arrow.right');
const slider = document.querySelector('.slider');
const image = document.querySelectorAll('.image');
const length = image.length;
let SlideNumber = 1;

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

    slider.style.transform = `translateX(-${(SlideNumber - 1) * 800}px)`;
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
});

right.addEventListener('click', () => {
    if (SlideNumber > 1) {
        prevslide();
    }
    else {
        getLastSlide();
    }
});

const bottom = document.querySelector('.bottom');
for(let i =0;i<length;i++){
    const div = document.createElement('div');
    div.className = 'button';
    bottom.appendChild(div);
};