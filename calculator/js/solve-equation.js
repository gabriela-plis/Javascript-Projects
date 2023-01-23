import { equation } from "./equation-utility.js";

const solveEquation = function () {

    const RPN = convertToRPN(equation.getEquation());

    let stack = [];

    RPN.forEach (el => {

        if ( Number.isInteger(parseInt(el)) ) {
            stack.push(el);
        } else {
            const numb2 = stack.pop();
            const numb1 = stack.pop();

            switch (el) {
                case "+": {
                    stack.push( parseFloat(numb1) + parseFloat(numb2) );
                    break;
                }
        
                case "-": {
                    stack.push( parseFloat(numb1) - parseFloat(numb2) );
                    break;
                }
        
                case "/": {
                    stack.push( parseFloat(numb1) / parseFloat(numb2) );
                    break;
                }
        
                case "*": {
                    stack.push( parseFloat(numb1) * parseFloat(numb2) );
                    break;
                }
            }

        }
    })

    if ( !Number.isInteger(stack[0]) ) {
        return stack[0].toFixed(2);
    }

    return stack.toString();
}


const convertToRPN = function (equation) {

    let RPNequation = [];
    let operatorsStack = [];

    equation.forEach( el => {
        if ( Number.isInteger(parseInt(el)) ) {

            RPNequation.push( parseFloat(el) );

        } else {

            if (operatorsStack.length === 0) {

                operatorsStack.push(el);

            } else {
                for (let i = operatorsStack.length - 1; i>=0 ; i--) {

                    let isHigher = checkIfHigherOperatorPriority(operatorsStack[i], el);
                    if ( isHigher === true ) {
                        
                        RPNequation.push(operatorsStack[i]);
                        operatorsStack.pop();
                    } 
                    
                }
                operatorsStack.push(el);
            }
        }
    })

    for (let i = operatorsStack.length-1; i>=0; i--) {
        RPNequation.push(operatorsStack[i]);
    }

    return RPNequation;
}

const checkIfHigherOperatorPriority = function (operator, compareOp) {
    if ( getPriority(operator) >= getPriority(compareOp) ) {
        return true;
    }
    return false;
}

const getPriority = function (operator) {
    if (operator === "+" || operator === "-") {
        return 1;
    } else if (operator === "*" || operator === "/") {
        return 2;
    }
}


export { solveEquation };