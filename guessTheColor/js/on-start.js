import { RandomColor } from "./color-generator.js";
import { modifyDOM } from "./DOM-modifications.js";
import { generateBtns } from "./btns-generator.js";


const correctColor = new RandomColor();

startGame(correctColor);

function startGame (correctColor) {

    // INSERT RGB TO HTML
    
    modifyDOM.insertRBGText( correctColor.get() );
    
    // INSERT BUTTON TO HTML
    
    const collectionOfBtns = generateBtns(6, correctColor);
    
    modifyDOM.insertBtns(collectionOfBtns);
    
}




export { correctColor, startGame};