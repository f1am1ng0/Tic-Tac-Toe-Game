const statusDisplay = document.querySelector('#status');

let gameStart = true;
let player = "x";
let state = ["", "", "", "", "", "", "", "", ""];

let checker = false;

const image0 = document.getElementById('image0');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const image7 = document.getElementById('image7');
const image8 = document.getElementById('image8');

const element = document.createElement('img');
const zeroCell = document.querySelector('.zero');
const oneCell = document.querySelector('.one');
const twoCell = document.querySelector('.two');
const threeCell = document.querySelector('.three');
const fourCell = document.querySelector('.four');
const fiveCell = document.querySelector('.five');
const sixCell = document.querySelector('.six');
const sevenCell = document.querySelector('.seven');
const eightCell = document.querySelector('.eight');

const X = "./images/X_icon.png";
const O = "./images/O_icon.png";

const winningMessage = () => `Player ${player} has won`;
const drawMessage = () => `Draw`;
const playerTurn = () => `${player}'s turn`;

statusDisplay.style.color = '#d38013';

statusDisplay.innerHTML = playerTurn();

const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function cellPlayed (clickedCell, clickedCellIndex) {
    state[clickedCellIndex] = player;
    clickedCell.innerHTMl = player;
}

function playerChange() {
    player = player === "x" ? "o" : "x";
    statusDisplay.innerHTML = playerTurn();
}

function resultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++){
        const winCondition = winningCondition[i];
        let a = state[winCondition[0]];
        let b = state[winCondition[1]];
        let c = state[winCondition[2]];
        if(a === '' || b === '' || c === '') {
            continue;
        }
        if(a === b && b === c){
            roundWon = true;
            break;
        }
    }

    if(roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameStart = false;
        return;
    }

    const drowRound = !state.includes("");
    if(drowRound) {
        statusDisplay.innerHTML = drawMessage();
        gameStart = false;
        return;
    }
 
    playerChange();
}

function cellClick(clickedCellEvent){
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if(state[clickedCellIndex] !== "" || !gameStart) {
        return;
    }

    cellPlayed(clickedCell, clickedCellIndex);
    resultValidation();
}

zeroCell.addEventListener('click',function(){
    if (checker == false){
        image0.src = X
        checker = true;
    } else {
        image0.src = O;
        checker = false;
    }
    image0.style.display = 'block';
    image0.style.position = 'absolute';
    image0.style.marginTop = '25px';
    image0.style.marginLeft = '25px';
    image0.style.width = '50px';
});

oneCell.addEventListener('click',function(){
    if (checker == false){
        image1.src = X
        checker = true;
    } else {
        image1.src = O;
        checker = false;
    }
    image1.style.display = 'block';
    image1.style.position = 'absolute';
    image1.style.marginTop = '25px';
    image1.style.marginLeft = '25px';
    image1.style.width = "50px";
});

twoCell.addEventListener('click',function(){
    if (checker == false){
        image2.src = X
        checker = true;
    } else {
        image2.src = O;
        checker = false;
    }
    image2.style.display = 'block';
    image2.style.position = 'absolute';
    image2.style.marginTop = '25px';
    image2.style.marginLeft = '25px';
    image2.style.width = "50px";
});

threeCell.addEventListener('click',function(){
    if (checker == false){
        image3.src = X
        checker = true;
    } else {
        image3.src = O;
        checker = false;
    }
    image3.style.display = 'block';
    image3.style.position = 'absolute';
    image3.style.marginTop = '25px';
    image3.style.marginLeft = '25px';
    image3.style.width = "50px";
});
fourCell.addEventListener('click',function(){
    if (checker == false){
        image4.src = X
        checker = true;
    } else {
        image4.src = O;
        checker = false;
    }
    image4.style.display = 'block';
    image4.style.position = 'absolute';
    image4.style.marginTop = '25px';
    image4.style.marginLeft = '25px';
    image4.style.width = "50px";
});

fiveCell.addEventListener('click',function(){
    if (checker == false){
        image5.src = X
        checker = true;
    } else {
        image5.src = O;
        checker = false;
    }
    image5.style.display = 'block';
    image5.style.position = 'absolute';
    image5.style.marginTop = '25px';
    image5.style.marginLeft = '25px';
    image5.style.width = "50px";
});
sixCell.addEventListener('click',function(){
    if (checker == false){
        image6.src = X
        checker = true;
    } else {
        image6.src = O;
        checker = false;
    }
    image6.style.display = 'block';
    image6.style.position = 'absolute';
    image6.style.marginTop = '25px';
    image6.style.marginLeft = '25px';
    image6.style.width = "50px";
});

sevenCell.addEventListener('click',function(){
    if (checker == false){
        image7.src = X
        checker = true;
    } else {
        image7.src = O;
        checker = false;
    }
    image7.style.display = 'block';
    image7.style.position = 'absolute';
    image7.style.marginTop = '25px';
    image7.style.marginLeft = '25px';
    image7.style.width = "50px";
});

eightCell.addEventListener('click',function(){
    if (checker == false){
        image8.src = X
        checker = true;
    } else {
        image8.src = O;
        checker = false;
    }
    image8.style.display = 'block';
    image8.style.position = 'absolute';
    image8.style.marginTop = '25px';
    image8.style.marginLeft = '25px';
    image8.style.width = "50px";
});

function gameRestart() {
    location.reload();
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.restart-button').addEventListener('click', gameRestart);
