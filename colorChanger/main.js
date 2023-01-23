const rangeSlider = document.querySelector("#slider");

rangeSlider.addEventListener ("input", () => {
    let sliderValue = rangeSlider.value;

    const root = document.documentElement; //document.document element = root
    root.style.setProperty("--CHANGED-VALUE", sliderValue);
})

// const background = document.querySelector("body");

// background.addEventListener("mouseenter", e => {
//     background.style.setProperty("background-color", "white");
// })

// background.addEventListener("mouseleave", e => {
//     background.style.setProperty("background-color", "black");
// })