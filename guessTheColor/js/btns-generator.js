import { RandomColor } from "./color-generator.js";

function generateBtns (numberOfBtns, correctColor) {

    const matchedBtn = whichBtnIsMatched();
    const collectionOfBtns= [];

    for (let i=0; i<numberOfBtns; i++) {

        const btn = document.createElement("button");
        btn.innerText = `${i+1}`;
        btn.classList.add("button");
    
        if (matchedBtn === i) {

            btn.style.setProperty("background-color", correctColor.get() );
            btn.classList.add("matched");

        } else {
    
            const color = new RandomColor();
            btn.style.setProperty("background-color", color.get() );
    
        }
    
        collectionOfBtns.push(btn);
        
    }

    return collectionOfBtns;
}


function whichBtnIsMatched () {
    return Math.floor(Math.random() * 6);
}


export { generateBtns, whichBtnIsMatched };