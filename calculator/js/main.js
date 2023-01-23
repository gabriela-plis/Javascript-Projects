import { currentNumber } from "./current-number-utility.js";
import { conditions } from "./special-conditions.js";
import { equation } from "./equation-utility.js";
import { solveEquation } from "./solve-equation.js";
import { resultArea } from "./text-area-utility.js";

const buttonArea = document.querySelector(".buttons_area");

let numbersInTextArea=0;

const numberBtns = buttonArea.querySelectorAll(".button--number");

numberBtns.forEach( btn => btn.addEventListener ("click", (e) => {

            if ( conditions.checkGetResultCondIsTrue() ) {
                resultArea.clear();
            }

            currentNumber.update(e.target.textContent);
            resultArea.addText(e.target.textContent, false);

            conditions.fill(true, false, false);
        }
    )
)


const dotBtn = buttonArea.querySelector(".button--dot");

dotBtn.addEventListener ("click", (e) => {

        if ( conditions.checkGetResultCondIsTrue() ) {
            resultArea.clear();
        } else if ( conditions.checkDotCondIsTrue() ) {
            return;
        }

        currentNumber.update(e.target.textContent);
        resultArea.addText(e.target.textContent, false);

        conditions.fill(false, true, false);

    }
)


const operatorBtns = buttonArea.querySelectorAll(".button--operator");

operatorBtns.forEach ( btn => btn.addEventListener ("click", (e) => {
        
            if ( !conditions.checkNumberCondIsTrue() && btn.textContent !== "-" || conditions.checkDotCondIsTrue() ) {
                console.log(`cond nr 1`);
                return;
            }

            if ( conditions.checkGetResultCondIsTrue() ) {

                resultArea.clear();
            } 
            
            if ( currentNumber.isEmpty() && equation.isEmpty() && btn.textContent === "-" ) {

                currentNumber.update(e.target.textContent);
                resultArea.addText(e.target.textContent);

                conditions.fill(false, false, false);

                return;
            }
            
            

            equation.addTo(currentNumber.getNumber());
            currentNumber.reset();

            numbersInTextArea++;

            if (numbersInTextArea === 2) {

                resultArea.clear(); //puste text area

                const result = solveEquation ();
                
                resultArea.addText(result, false); // wstawiam obliczony wynik dwóch liczb
                resultArea.addText(e.target.textContent, true); // wstawiam operator matematyczny;

                equation.reset(); // reset tablicy
                equation.addTo(result); // wstawiam do tablicy wynik
                equation.addTo(btn.textContent);

                numbersInTextArea = 1; // jedna liczba w równaniu 

            } else {

                equation.addTo(btn.textContent);
                resultArea.addText(e.target.textContent, true);
                
            }

            conditions.fill(false, false, false);
            
        }
    )
)



const clearBtn = buttonArea.querySelector(".button--c");

clearBtn.addEventListener ("click", (e) => {

        resultArea.clear();
        
        equation.reset();
        currentNumber.reset();

        numbersInTextArea = 0;

        conditions.fill(false, false, false);

    }
)



const getResultBtn = buttonArea.querySelector(".button--equal");

getResultBtn.addEventListener ("click", (e) => {

        if ( !conditions.checkNumberCondIsTrue() ) {
            return;
        }

        resultArea.clear();

        equation.addTo(currentNumber.getNumber());
        currentNumber.reset();

        const result = solveEquation ();
        resultArea.addText(result, false);

        equation.reset();
        numbersInTextArea = 0;

        conditions.fill(false, false, true);

    }
)