let currentPlayer = 'X';
let nextPlayer = 'O';

let playerXSelections = [];
let playerOSelections = [];
// let playerSelections = [];

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

// Criação do texto da vez do jogador inserindo apenar 1 filho <p>
const div = document.getElementById('jogo');
const textPlayer = document.createElement("p");
const textResult = document.createElement("p");
div.appendChild(textPlayer);
div.appendChild(textResult);


const handleClick = function (event) {
    const cell = event.target;
    console.log(cell.innerHTML)

    if (cell.innerHTML === "") {
        cell.innerHTML = currentPlayer;
        //Verifica qual jogador esta na vez
        if (currentPlayer === 'X') {
            textPlayer.innerHTML = "É a vez do jogador O"
            playerSelections = playerXSelections;
            nextPlayer = 'O';
        } else {
            textPlayer.innerHTML = "É a vez do jogador X"
            playerSelections = playerOSelections;
            nextPlayer = 'X';
        }
        playerSelections.push(Number(cell.id));
        if (checkWinner(playerSelections)) {
            textPlayer.innerHTML = 'Player ' + currentPlayer + ' wins!';
            resetGame();
        }
        if (checkDraw()) {
            textPlayer.innerHTML = 'Draw';
            resetGame();
        }
        currentPlayer = nextPlayer;
        console.log(playerSelections)
    }
}


// Seleciona todas as celulas da tela com evento de clique
const cells = document.querySelectorAll('td');
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick);
}

function checkWinner() {
    // Verifica para cada combinação  se o jogador tem todos os valores
    let matches = 0;
    for (let i = 0; i < winningCombinations.length; i++) {
        matches = 0;
        for (let j = 0; j < winningCombinations[i].length; j++) {
            if (winningCombinations[i].includes(playerSelections[j])) {
                matches++;
            }
        }
        if (matches === 3) {
            return true;
        }
    }
    return false
}

function checkDraw() {
    return (playerOSelections.length + playerXSelections.length) >= cells.length;
}

function resetGame() {
    setTimeout( () => {
        location.reload()
        playerXSelections = new Array();
        playerOSelections = new Array();
        playerSelections = "";
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', handleClick);
        }
	}, 2000);
       
}
