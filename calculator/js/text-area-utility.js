class ResultArea {
    constructor () {
        this.resultArea = document.querySelector(".result_area");
    }

    addText(textToAdd, isNeedSeparator) {
        const text = document.createElement("span");

        if ( isNeedSeparator ) {
            text.innerText = ` ${textToAdd} `;
        } else {
            text.innerText = `${textToAdd}`;
        }
        
        this.resultArea.append(text);
    }

    clear () {
        this.resultArea.replaceChildren();
    }
}

const resultArea = new ResultArea ();

export { resultArea }; 