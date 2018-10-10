//Definitions
const CANVAS_BORDER_COLOUR = 'black';
const CANVAS_BACKGROUND_COLOUR = "white";

let snake = [
    { x: 150, y: 150 },
    { x: 140, y: 150 },
    { x: 130, y: 150 },
    { x: 120, y: 150 },
    { x: 110, y: 150 },
];

//Getting the elemesnts from canvas
var area = document.getElementById("area");
var ctx = area.getContext("2d");

drawSnake();

//Fill the canvas
ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
ctx.strokestyle = CANVAS_BORDER_COLOUR;
ctx.fillRect(0, 0, area.width, area.height);
ctx.strokeRect(0, 0, area.width, area.height);

//Dra snake function
function drawSnakePart(snakePart) {
    ctx.fillStyle = 'lightgreen';
    ctx.strokestyle = 'darkgreen';
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    console.log('Drawing snake is done');
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}