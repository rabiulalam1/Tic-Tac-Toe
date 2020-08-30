let xClass = "x";
let oClass = "o";
let rotateTurn;
let winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let cellElement = document.querySelectorAll("[data-cell]");
let board = document.getElementById("board");

startGame();

function startGame() {
  rotateTurn = false;
  for (cell of cellElement) {
    cell.addEventListener("click", handleClick, { once: true });
  }
  setBoardHoverClass();
}

for (cell of cellElement) {
  cell.addEventListener("click", handleClick, { once: true });
}

function handleClick(e) {
  let cell = e.target;
  let currentClass = rotateTurn ? oClass : xClass;

  placeMark(cell, currentClass);

  switchTurn();
  setBoardHoverClass();
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function switchTurn() {
  rotateTurn = !rotateTurn;
}

function setBoardHoverClass() {
  board.classList.remove(xClass);
  board.classList.remove(oClass);

  if (rotateTurn) {
    board.classList.add(oClass);
  } else {
    board.classList.add(xClass);
  }
}
