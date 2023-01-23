//--TWORZENIE ELEMENTU

//można też bez funkcji - ale wtedy gdy chcę wstawić w dwa różne miejsca stworzony element to nie będzie to możliwe z racji, że traktowany jest jako jeden obiekt.
function createText() {
    let showingText = document.createElement("div");
    showingText.innerText = `I love so much tacos!`;
    showingText.style.color = "black";
    showingText.style.backgroundColor = "pink";
    showingText.style.border = "2px solid white";
    showingText.style.marginTop = "1rem";
    showingText.setAttribute("class", "my-new-text");
    return showingText;
}

const paragraph = document.querySelector(".interactive_text");
console.log(paragraph);


//wstawiłam do HTML tag div z zawartością w paragrafie na samej górze. Append - na końcu. Before przed paragrafem. After po paragrafie
paragraph.prepend(createText());

const text = document.querySelector(".interactive_text");
text.append("If u want try taco");
const changingText = document.createTextNode(" CLICK HERE");
// let changingText = " CLICK HERE"; - nie dlatego, ze tekst się nie zmieni potem, gdy w evencie dam changingText = " DON'T CLICK HERE"
// gdy dam znowu append to pojawi sie obok. Dynamiczna zmiana - użyj createTextNode
text.append(changingText);

text.addEventListener ( "mouseover", () => {
    changingText.textContent = " DON'T CLICK HERE";
})

const testArea = document.querySelector(".test_area");

//sklonowany wyłącznie tag section bez zawartości
const cloneArea = testArea.cloneNode();
testArea.after(cloneArea);

//sklonowany tag z zawartością. Uwaga tutaj eventy nie zadziałają! trzeba pisać osobno
const deepCloneArea = testArea.cloneNode(true);
testArea.after(deepCloneArea);


//usunęłam płytką kopię
cloneArea.remove();

//usuwam głęboką kopię gdy przycisne 
const btn = document.querySelector(".button");
btn.addEventListener ( "click", () => {
    deepCloneArea.remove();
})

//zm template
const squareTemp = document.querySelector(".square_temp");

const square = document.createElement("div");
square.innerHTML = `
    <div class="square">
        <p class="square_number">2</p>
    </div>
`

const squareContainer = document.querySelector(".squares_container");
squareContainer.append(square);

let numberOfSquare = 0;
let squareText = document.querySelector(".square_number");
squareText.textContent = numberOfSquare;

const addButton = document.querySelector(".add_button");

function createSquare(number) {
    const square = document.createElement("div");
    square.innerHTML = `<div class="square"><p class="square_number">${number}</p></div>`
    return square;
}

addButton.addEventListener("click", () => {
    numberOfSquare++;
    squareContainer.append(createSquare(numberOfSquare));
})