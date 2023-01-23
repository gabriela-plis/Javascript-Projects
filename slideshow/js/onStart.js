import {images, slides, sliderDots, dots, getCurrentImage} from './utility.js'

// Add all images



 // First image is always active which means it's display is block. 
 // the rest of the photos are hidden (display = none)


const firstImage = slides.firstElementChild;
firstImage.classList.add("active");


const checkIfActive = function (image) {
    const separatedClasses = image.className.split(" ");

    for (const singleClass of separatedClasses) {
        if (singleClass === "active") {
            return true;
        }
    }
    return false;
}

for (let i=0; i<images.length; i++) {
    if ( checkIfActive(images[i]) ) {
        images[i].style.display = "block";
    } else {
        images[i].style.display = "none";
    }

}

// Add all required dots

const countedImages = slides.childElementCount;

const dotTemp = document.querySelector(".dot_template");

for (let i=0; i<countedImages; i++) {
    const dot = dotTemp.content.cloneNode(true);
    sliderDots.append(dot);

}

for (let i=0; i<dots.length; i++) {
    dots[i].setAttribute("data-number", `${i+1}`);
}


for (let i=0; i<dots.length; i++) {
    
    if ( dots[i].getAttribute("data-number") === getCurrentImage().getAttribute("data-number") ) {
        const dotColor = getComputedStyle(document.documentElement).getPropertyValue('--MATCHED-DOT-COLOR');
    
        dots[i].style.backgroundColor = dotColor; 
        
    }

}
