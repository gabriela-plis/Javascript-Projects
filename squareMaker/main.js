
//--ROZWIĄZANIE Z UŻYCIEM CREATE ELEMENT + ZMIENNA

// let squareNumber = 0;

// const createSquare = () => {
//     const square = document.createElement("div");
//     square.classList.create("square");
//     square.innerHTML = `<div class ="square_number">${squareNumber}</div>`;
//     return square;
// };

// const squareContainer = document.querySelector(".square_container");
// squareContainer.append(createSquare());

// const btn = document.querySelector(".btn");

// btn.createEventListener("click", () => {
//     squareNumber++;
//     squareContainer.append(createSquare());
// })



//--ROZWIĄZANIE Z UŻYCIEM TEMPLATE + CREATE TEXT NODE
let squareNumber = 0;

const squareContainer = document.querySelector(".square_container");

const createSquare = () => {
    if ("content" in document.createElement("template")) {
        squareNumber++
        const squareTemp = document.querySelector(".square_template");
        const square = squareTemp.content.cloneNode(true);
        return square;
    }
}

squareContainer.append(createSquare());
const text = document.createTextNode(`${squareNumber}`);
const squareText = document.querySelectorAll(".square_number");
console.log(squareText);
squareText[squareText.length-1].append(text);

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    squareContainer.append(createSquare());
    const text = document.createTextNode(`${squareNumber}`);
    const squareText = document.querySelectorAll(".square_number");
    squareText[squareText.length-1].append(text);
})
