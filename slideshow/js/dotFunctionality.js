import {images, sliderDots, dots, getCurrentImage} from './utility.js'

/* SLIDER DOTS FUNCTIONALITY */


const getMatchedImage = function (dot) {

    for (let i=0; i<images.length; i++) {
        if (images[i].getAttribute("data-number") === dot.getAttribute("data-number")) {
            return images[i];
        }
    }

}

export const getMatchedDot = function (image) {

    for (let i=0; i<dots.length; i++) {
        if ( dots[i].getAttribute("data-number") === image.getAttribute("data-number") ) {
            return dots[i];
        }
    }
    
}

export const changeDotsColorWhenChangingSlides = function (changingDot) {
    const currentImage = getCurrentImage();
    
    const currentDot = getMatchedDot(currentImage);
    const basicDotColor = getComputedStyle(document.documentElement).getPropertyValue("--DOT-COLOR");
    currentDot.style.backgroundColor = basicDotColor; 
    
    const matchedDotColor = getComputedStyle(document.documentElement).getPropertyValue('--MATCHED-DOT-COLOR');
    changingDot.style.backgroundColor = matchedDotColor; 
}

for (let i=0; i<dots.length; i++) {

    dots[i].addEventListener ("click", e => {

        changeDotsColorWhenChangingSlides(dots[i]);

        const currentImage = getCurrentImage();
        currentImage.style.display = "none";

        const matchedImage = getMatchedImage(dots[i]);
        matchedImage.style.display = "block";

        
    })

}
