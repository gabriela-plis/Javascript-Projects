const borderOne = document.querySelector(".border_one");
const borderTwo = document.querySelector(".border_two");
const eyeImage = document.querySelector(".cursor--eye");
const cowImage = document.querySelector(".cursor--cow");


class cursorFunctionality {
    constructor (border, image) {
        this.border = border;
        this.image = image;

        this.cursorMove();
        this.cursorOut();
        this.cursorOver();
    }

    cursorMove () {
        this.border.addEventListener("mousemove", e => {
            this.image.style.left = `${e.offsetX}px`;
            this.image.style.top = `${e.offsetY}px`;
        })
    }

    cursorOut () {
        this.border.addEventListener("mouseout", e => {
            this.image.style.display = "none";
        })
    }

    cursorOver () {
        this.border.addEventListener( "mouseover", e => {
            this.image.style.display = "flex";
        })
    }
}


new cursorFunctionality (borderOne, eyeImage);
new cursorFunctionality (borderTwo, cowImage);

// const makeImageAsCursor = function (positionX, positionY, image) {
//     image.style.left = `${positionX}px`;
//     image.style.top = `${positionY}px`;
// }

// borderOne.addEventListener("mousemove", e => {
//     makeImageAsCursor(e.offsetX, e.offsetY, eyeImage);
// });

// borderOne.addEventListener("mouseout", e => {
//     eyeImage.style.display = "none";
// });

// borderOne.addEventListener("mouseover", e => {
//     eyeImage.style.display = "flex";
// })



// borderTwo.addEventListener("mousemove", e => {
//     makeImageAsCursor(e.offsetX, e.offsetY, cowImage);

// });

// borderTwo.addEventListener("mouseout", e => {
//     cowImage.style.display = "none";
// });

// borderTwo.addEventListener("mouseover", e => {
//     cowImage.style.display = "flex";
// })