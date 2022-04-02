let order = [];
let clickOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - azul
// 3 - amarelo

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');

// cria ordem aleatória
let shuffleOrder = () => {
    let color = Math.floor(Math.random() * 4);
    order.push(color);
    clickOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    }, 500);
}

// checa se as cores foram clicadas na ordem certa
let checkOrder = () => {
    for(let i in clickOrder) {
        if(clickOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if(clickOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`)
        nextLevel();
    }
}

// clique do usuário
let click = (color) => {
    clickOrder.push(color);
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

// retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1){
        return red;
    } else if (color == 2){
        return blue;
    } else {
        return yellow;
    }
}

// próximo level
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nGame Over :()`)
    order = [];
    clickOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando jogo!')
    score =0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
blue.onclick = () => click(2);
yellow.onclick = () => click(3);


playGame();