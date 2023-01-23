const displayedValue = document.querySelector(".number");

let counter = 0;
let numberOnPage = document.createTextNode(counter);
displayedValue.append(numberOnPage);

incrementBtn = document.querySelector(".button--increment");

incrementBtn.addEventListener ("click", e => {
    counter++;
    numberOnPage.nodeValue = counter;
})

const prevEntries = document.querySelector(".saved_results > p:first-of-type");
// const placeForSavedNumbers = prevEntries.querySelector(".numbers");

saveBtn = document.querySelector(".button--save");

saveBtn.addEventListener("click", e => {
    
    const number = document.querySelector(".saved_number");
    let lastSaved;

    if (prevEntries.contains(number)) {
    const savedNumbers = document.querySelectorAll(".saved_number");
    lastSaved = savedNumbers[savedNumbers.length-1].textContent;
    }
    
    if (counter !== parseInt(lastSaved) ) {

    const savedNumber = document.createElement("span");
    savedNumber.innerText = `${counter}`;
    savedNumber.classList.add("saved_number");
    prevEntries.append(savedNumber);

    const connector = document.createElement("span");
    connector.innerText = ` - `;
    connector.classList.add("connector");
    prevEntries.append(connector);

    }
})

