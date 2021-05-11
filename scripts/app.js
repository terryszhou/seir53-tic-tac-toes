window.addEventListener("DOMContentLoaded", () => {

const playerX = "x"
const playerO = "circle"

let currentPlayer
let circleTurn
let winStatus = document.querySelector("#winStatus")
let displayStatus = document.querySelector("#player-turn")
let resetBtn = document.getElementById("reset")

let cell1 = document.querySelector("#cell-1")
let cell2 = document.querySelector("#cell-2")
let cell3 = document.querySelector("#cell-3")
let cell4 = document.querySelector("#cell-4")
let cell5 = document.querySelector("#cell-5")
let cell6 = document.querySelector("#cell-6")
let cell7 = document.querySelector("#cell-7")
let cell8 = document.querySelector("#cell-8")
let cell9 = document.querySelector("#cell-9")

let cells = document.querySelectorAll(".cell")

cells.forEach(cell => {
    cell.addEventListener("click", handleClick, {once:true})
})

function handleClick(e) {
  let cell = e.target
  currentPlayer = circleTurn ? playerO : playerX
  cell.classList.add(currentPlayer)
  circleTurn = !circleTurn
  changeTurnMsg()
  checkWin()
  checkDraw()
}

function changeTurnMsg() {
  if (circleTurn === true) {
    displayStatus.innerText = "CELLS' TURN!"
  } else if (circleTurn !== true) {
    displayStatus.innerText = "SQUIRTS' TURN!"
  }
}

function checkWin() {
if (cell1.classList.contains("x") && cell2.classList.contains("x") && cell3.classList.contains("x")) {
  winStatus.innerText = "SQUIRTS WIN!" 
  stopGame()
} else if (cell1.classList.contains("circle") && cell2.classList.contains("circle") && cell3.classList.contains("circle")){
  winStatus.innerText = "CELLS WIN!" 
  stopGame()
} else if (cell4.classList.contains("x") && cell5.classList.contains("x") && cell6.classList.contains("x")) {
  winStatus.innerText = "SQUIRTS WIN!" 
  stopGame()
} else if (cell4.classList.contains("circle") && cell5.classList.contains("circle") && cell6.classList.contains("circle")) {
  winStatus.innerText = "CELLS WIN!" 
  stopGame()
} else if (cell7.classList.contains("x") && cell8.classList.contains("x") && cell9.classList.contains("x")) {
  winStatus.innerText = "SQUIRTS WIN!" 
  stopGame()
} else if (cell7.classList.contains("circle") && cell8.classList.contains("circle") && cell9.classList.contains("circle")) {
  winStatus.innerText = "CELLS WIN!" 
  stopGame()
} else if (cell1.classList.contains("x") && cell4.classList.contains("x") && cell7.classList.contains("x")) {
  winStatus.innerText = "SQUIRTS WIN!" 
  stopGame()
} else if (cell1.classList.contains("circle") && cell4.classList.contains("circle") && cell7.classList.contains("circle")) {
  winStatus.innerText = "CELLS WIN!" 
  stopGame()
} else if (cell2.classList.contains("x") && cell5.classList.contains("x") && cell8.classList.contains("x")) {
  winStatus.innerText = "SQUIRTS WIN!" 
  stopGame()
} else if (cell2.classList.contains("circle") && cell5.classList.contains("circle") && cell8.classList.contains("circle")) {
  winStatus.innerText = "CELLS WIN!" 
  stopGame()
} else if (cell3.classList.contains("x") && cell6.classList.contains("x") && cell9.classList.contains("x")) {
  winStatus.innerText = "SQUIRTS WIN!" 
  stopGame()
} else if (cell3.classList.contains("circle") && cell6.classList.contains("circle") && cell9.classList.contains("circle")) {
  winStatus.innerText = "CELLS WIN!" 
  stopGame()
} else if (cell1.classList.contains("x") && cell5.classList.contains("x") && cell9.classList.contains("x")) {
  winStatus.innerText = "SQUIRTS WIN!" 
  stopGame()
} else if (cell1.classList.contains("circle") && cell5.classList.contains("circle") && cell9.classList.contains("circle")) {
  winStatus.innerText = "CELLS WIN!" 
  stopGame()
} else if (cell3.classList.contains("x") && cell5.classList.contains("x") && cell7.classList.contains("x")) {
  winStatus.innerText = "SQUIRTS WIN!" 
  stopGame()
} else if (cell3.classList.contains("circle") && cell5.classList.contains("circle") && cell7.classList.contains("circle")) {
  winStatus.innerText = "CELLS WIN!" 
  stopGame()
}
}

function stopGame() {
  displayStatus.innerText = "CONGRATULATIONS!"
  cells.forEach(cell => {
  cell.removeEventListener("click", handleClick)
})
}


function checkDraw() {
  if ((cell1.classList.contains("x") || cell1.classList.contains("circle")) &&
  (cell2.classList.contains("x") || cell2.classList.contains("circle")) &&
  (cell3.classList.contains("x") || cell3.classList.contains("circle")) &&
  (cell4.classList.contains("x") || cell4.classList.contains("circle")) &&
  (cell5.classList.contains("x") || cell5.classList.contains("circle")) &&
  (cell6.classList.contains("x") || cell6.classList.contains("circle")) &&
  (cell7.classList.contains("x") || cell7.classList.contains("circle")) &&
  (cell8.classList.contains("x") || cell8.classList.contains("circle")) &&
  (cell9.classList.contains("x") || cell9.classList.contains("circle")) &&
  (winStatus.innerText === "--")) {
    displayStatus.innerText = "BOO!"
    winStatus.innerText = "IT'S A DRAW!"
  }
}

resetBtn.addEventListener("click", () => {
  cell1.classList = "cell odd"
  cell2.classList = "cell even"
  cell3.classList = "cell odd"
  cell4.classList = "cell even"
  cell5.classList = "cell odd"
  cell6.classList = "cell even"
  cell7.classList = "cell odd"
  cell8.classList = "cell even"
  cell9.classList = "cell odd"
  displayStatus.innerText = "SQUIRTS GO FIRST."
  winStatus.innerText = "--"
  cells.forEach(cell => {
    cell.addEventListener("click", handleClick, {once:true})
})
})

})

