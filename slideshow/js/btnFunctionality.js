import { changeDotsColorWhenChangingSlides, getMatchedDot } from './dotFunctionality.js';
import {slides, getCurrentImage} from './utility.js'


/* BUTTON FUNCTIONALITY */

const previousBtn = document.querySelector(".button--left");
const nextBtn = document.querySelector(".button--right");

nextBtn.addEventListener("click", e => {

    const currentImage = getCurrentImage();

    if (currentImage === slides.lastElementChild) {
        changeDotsColorWhenChangingSlides( getMatchedDot(slides.firstElementChild) )
        slides.firstElementChild.style.display = "block";
    } else {
        changeDotsColorWhenChangingSlides (getMatchedDot(currentImage.nextElementSibling) )
        currentImage.nextElementSibling.style.display = "block";
    }

    currentImage.style.display = "none";

})

previousBtn.addEventListener("click", e => {

    const currentImage = getCurrentImage();

    if (currentImage === slides.firstElementChild) {
        changeDotsColorWhenChangingSlides( getMatchedDot(slides.lastElementChild) )
        slides.lastElementChild.style.display = "block";
    } else {
        changeDotsColorWhenChangingSlides( getMatchedDot(currentImage.previousElementSibling) )
        currentImage.previousElementSibling.style.display = "block";
    }

    currentImage.style.display = "none";

})
