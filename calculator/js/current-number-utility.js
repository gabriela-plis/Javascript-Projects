class CurrentNumber {
    #number = undefined;

    constructor () {
        this.#number = "";
    }

    update (component) {
        this.#number = this.#number + component;
    }

    getNumber () {
        return this.#number;
    }

    reset () {
        this.#number = "";
    }

    isEmpty() {
        if (this.#number === "") {
            return true;
        }
        return false;
    }
}

const currentNumber = new CurrentNumber ();

export { currentNumber };