import { whichBtnIsMatched } from "./btns-generator.js";

class DOMModifications {
    #btnsBoard = document.querySelector(".colors_board");
    #RGBTextContainer = document.querySelector(".RGB_container");
    #AttemptNumber = document.querySelector(".attempt");

    constructor () {};

    insertBtns (collectionOfBtns) {
        
        for (const btn of collectionOfBtns) {
            this.#btnsBoard.append(btn);
        }
    }

    resetBtns (collectionOfColors, whichIsMatched) {
        
        const buttons = this.#btnsBoard.querySelectorAll("button");
        for (const [index, btn] of buttons.entries()) {
            if (btn.classList.contains("matched")) {

                btn.classList.remove("matched");
            }

            if (index === whichIsMatched) {
                btn.classList.add("matched");
            }

            btn.style.setProperty("background-color", collectionOfColors[index] );
        }
    }

    insertRBGText (text) {
        const rgbText = document.createElement("p"); 
        rgbText.classList.add("rgb_text");
        rgbText.innerText = text;

        this.#RGBTextContainer.append(rgbText);
    }

    resetRGBText (text) {
        const rgbText = this.#RGBTextContainer.querySelector(".rgb_text");
        rgbText.innerText = text;
    }

    insertWindow (window) {
        this.#btnsBoard.append(window);
    }

    removeWindow () {
        const windowOnPage = document.querySelector(".window");
        this.#btnsBoard.removeChild(windowOnPage);
    }

    changeNumberOfAttempts (attempt) {
        this.#AttemptNumber.innerText = attempt;

        if (attempt===1) {
            this.#AttemptNumber.style.color = "red";
        } else {
            this.#AttemptNumber.style.color = "black";
        }
    }
}

const modifyDOM = new DOMModifications ();

export { modifyDOM };