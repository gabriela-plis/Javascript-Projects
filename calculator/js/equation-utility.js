class Equation {
    #equationNotation = undefined;

    constructor () {
        this.#equationNotation = [];
    }

    addTo (component) {
        this.#equationNotation.push(component);
    }

    get#equation () {
        return this.#equationNotation;
    }

    reset () {
        this.#equationNotation.length = 0;
    }

    isEmpty () {
        if ( this.#equationNotation.length ===  0 ) {
            return true;
        }
    
        return false;
    }
}

const equation = new Equation();

export { #equation };