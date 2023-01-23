class SpecialConditions {

        #lastBtnWasNumber = false;
        #lastBtnWasDot = false;
        #lastBtnWasGetResult = false;

    constructor() {
        this.#lastBtnWasNumber = false;
        this.#lastBtnWasDot = false;
        this.#lastBtnWasGetResult = false;
    }

    fill (lastBtnWasNumber, lastBtnWasDot, lastBtnWasGetResult) {
        this.#lastBtnWasNumber = lastBtnWasNumber;
        this.#lastBtnWasDot = lastBtnWasDot;
        this.#lastBtnWasGetResult = lastBtnWasGetResult;
    }

    checkNumberCondIsTrue () {
        return this.#lastBtnWasNumber;
    }   
    checkDotCondIsTrue () {
        return this.#lastBtnWasDot;
    }   
    checkGetResultCondIsTrue () {
        return this.#lastBtnWasGetResult;
    }
}

const conditions = new SpecialConditions ();

export { conditions };