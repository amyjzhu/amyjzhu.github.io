let $ = require("jquery");

let maxYMotionPx : number = 35;
let maxXMotionPx : number = 50;
let animationSpeed : number = 1800;

interface Coordinate {
    x: number;
    y: number;
}

function makeNewPosition() : Coordinate {

    let xRand = Math.random() - 0.5;
    let yRand = Math.random() - 0.5;

    return {x: maxXMotionPx * xRand, y: maxYMotionPx * yRand };

}

export function moveBackgroundPiece(id : string) {
    let element: string = "#" + id;
    let newCoords: Coordinate = makeNewPosition();
    let originalCoords: Coordinate = {x: parseFloat($(element).css("left")), y: parseFloat($(element).css("bottom"))};

    let newBottom = originalCoords['y'] + newCoords['y'];
    let newLeft = originalCoords['x'] + newCoords['x'];

    $(element).delay(900).animate({bottom: newBottom, left: newLeft}, animationSpeed, function () {
        returnToOriginal(originalCoords, id);
    });
}

function returnToOriginal(originalCoords : Coordinate, id : string) {
    let element : string = "#" + id;
    $(element).animate({bottom: originalCoords['y'], left: originalCoords['x']}, animationSpeed, function () {
        moveBackgroundPiece(id);});
}