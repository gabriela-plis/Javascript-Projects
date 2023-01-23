class RandomColor {
    #RGB = {
        R : 105,
        G : undefined,
        B : undefined
    };
    
    constructor () {

        for (let value in this.#RGB) {
            this.#RGB[value] = this.#generateRandomValue();
        }

    }

    #generateRandomValue () {
        return Math.floor(Math.random() * 225)
    }

    get () {
        return `rgb(${this.#RGB.R},${this.#RGB.G},${this.#RGB.B})`;
    }
}

export { RandomColor };