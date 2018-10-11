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
var dx = 10;

drawSnake();
advanceSnake();
drawSnake();

//Dra snake function
function drawSnakePart(snakePart) {
    ctx.fillStyle = 'lightgreen';
    ctx.strokestyle = 'darkgreen';
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() {
    console.log('draw snake');
    drawBackground();
    console.log('snake: ' + JSON.stringify(snake));
    snake.forEach(drawSnakePart);
    snake.forEach(advanceSnake);
}

//Fill the canvas
function drawBackground() {
    // ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
    ctx.strokestyle = CANVAS_BORDER_COLOUR;
    ctx.fillRect(0, 0, area.width, area.height);
    ctx.strokeRect(0, 0, area.width, area.height);
}

function advanceSnake() {
    for (i = 1; i < snake.length; i++) {
        console.lof(snake[i-1].x, snake[i-1].y)
        // snake[i] = { x = snake[i - 1].x, y = snake[i - 1].y };
    }
    snake[0] = { x = x+ x.dx, y = y };
}
