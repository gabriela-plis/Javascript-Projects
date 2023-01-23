import { RandomColor } from "./color-generator.js";
import { modifyDOM } from "./DOM-modifications.js";
import { startGame } from "./on-start.js"
import { whichBtnIsMatched } from "./btns-generator.js"

let audio = new Audio();
audio.volume = 0.1;
let eventIsRunning = false;
let attempt = 0;

const btnsBoard = document.querySelector(".colors_board");
const buttons = btnsBoard.querySelectorAll("button");

buttons.forEach(btn => 
    btn.addEventListener ("click", (e) => {

    if (eventIsRunning) {
        return;
    }

    eventIsRunning = true;
    attempt++;

    let window = undefined;

    if( btn.classList.contains("matched") ) {
        audio.src = "audio/victory.wav";
        window = createInformationWindow (true);
    } else {
        audio.src = "audio/fail.wav";
        window = createInformationWindow (false);
        modifyDOM.changeNumberOfAttempts (3-attempt);

    }

    audio.play();
    modifyDOM.insertWindow(window);

    setTimeout(() => {
        modifyDOM.removeWindow();
    
        if ( attempt===3 || btn.classList.contains("matched") ) {
            resetGame();
        }

        eventIsRunning = false;
    }, 900);

    })
)



function createInformationWindow (isMatched) {
    const window = document.createElement("p");

    if (isMatched) {
        window.innerHTML = `<p class=window_text>Yes, that's the right color!</p>`;
    } else {
        window.innerHTML = `<p class=window_text>No, that's not the right color...</p>`;
    }

    window.classList.add("window");

    return window;
}

function resetGame () {

    attempt = 0;

    const collectionOfColors = [];

    for (let i=0; i<6; i++) {
        const color = new RandomColor();
        collectionOfColors.push( color.get() );
    }

    const numberOfMatchedBtn = whichBtnIsMatched ();

    modifyDOM.resetBtns(collectionOfColors, numberOfMatchedBtn);
    modifyDOM.resetRGBText(collectionOfColors[numberOfMatchedBtn]);
    modifyDOM.changeNumberOfAttempts (3);

}
