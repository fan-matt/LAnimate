/**
 * Assists in changing coordinates from an imaginary coordinate grid to the
 * actual coordinates used in Canvas, etc.
 */
class CoordinateTranslate {
    // /**
    //  * Simple constructor
    //  * 
    //  * @param {Number[2]} origin The origin of the imaginary coordinate grid in real coordinates
    //  * @param {Number} scale Number of real pixels that equate to 1 "unit" in the imaginary
    //  */
    // constructor(origin , scale) {
    //     this.origin = origin;
    //     this.scale = scale;
    // }

    constructor() {
        this.origin = [0 , 0];
        this.scale = 1;
    }


    toScreen(coordinates) {
        let gridX = coordinates[0];
        let gridY = coordinates[1];

        let screenX = this.origin[0] + (this.scale * gridX);
        let screenY = this.origin[1] - (this.scale * gridY);

        return [screenX , screenY];
    }


    toGrid(coordinates) {
        let screenX = coordinates[0];
        let screenY = coordinates[1];

        let gridX = (screenX - this.origin[0]) / this.scale;
        let gridY = (screenY - this.origin[1]) / (-1 * this.scale);

        return [gridX , gridY];
    }
}


export default CoordinateTranslate;