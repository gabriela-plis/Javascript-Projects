
export const slides = document.querySelector(".slides");
export const images = slides.children;

export const sliderDots = document.querySelector(".slider_dots");
export const dots = sliderDots.children;

export const getCurrentImage = function () {
    for (let i=0; i<images.length; i++) {
        if (getComputedStyle(images[i]).display === "block") {
            return images[i];
        }
    }
}
