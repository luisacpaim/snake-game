let canvas = document.getElementById ("snake");
let context = canvas.getContext ("2d");
let box = 32;

let snake = [];
snake [0] = {
    x: 8 * box,
    y: 8 * box
}

/*Variável para que a cobrinha ande: */
let direction = "right";

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect (0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo() {
    criarBG();
    criarCobrinha();

    /* definindo ponto de partida da cobrinha, para quando jogo for resetado */
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop(); /*tira o ultimo elemento do array*/

    /*cabeça móvel da cobrinha; " 'unshift' - acrescenta uma no primeiro elemento*/
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}   

let jogo = setInterval (iniciarJogo, 100); /*100 milisegundos; intervalo para atualização do jogo(?) */