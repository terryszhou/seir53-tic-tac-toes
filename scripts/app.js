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
  winStatus.innerText = "SQUIRTS WINS!" 
  stopGame()
} else if (cell1.classList.contains("circle") && cell2.classList.contains("circle") && cell3.classList.contains("circle")){
  winStatus.innerText = "CELLS WINS!" 
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

// function stopGame() {
//   board.removeEventListener("click", handleClick)
// }


// let board = document.getElementById("board")
// console.log(board)

// board.addEventListener("click", handleClick,)

// function clearBoard() {
//   let cells = document.querySelectorAll(".cell")
//   cells.classList.remove("x")
//   cells.classList.remove("circle")
// }

// resetBtn.addEventListener("click", () => {
//   let cells = document.querySelectorAll(".cell")
//   for (let i = 0; i <= cells.length; i++) {
//     cells.classList.remove("x", "circle");
//   }
// })

// let cells = document.querySelectorAll(".cell")

// cells.forEach(cell => {
//     cell.addEventListener("click", handleClick, {once:true})
// })

// function handleClick(e) {
//     let cell = e.target
//     currentPlayer = circleTurn ? playerO : playerX
//     cell.classList.add(currentPlayer)
//     circleTurn = !circleTurn
//     checkWin()
//     checkDraw()
// }

// clearBoard() {
//   cell1.classList.remove("x") cell1.classList.remove("circle")
//   cell2.classList.remove("x") cell2.classList.remove("circle")
//   cell3.classList.remove("x") cell3.classList.remove("circle")
//   cell4.classList.remove("x") cell4.classList.remove("circle")
//   cell5.classList.remove("x") cell5.classList.remove("circle")
//   cell6.classList.remove("x") cell6.classList.remove("circle")
//   cell7.classList.remove("x") cell7.classList.remove("circle")
//   cell8.classList.remove("x") cell8.classList.remove("circle")
//   cell9.classList.remove("x") cell9.classList.remove("circle") 
// }


// if (cell1.content !== "" && cell1.content === cell2.content === cell3.content) {
//   console.log("X wins")
// }


// if (cell1, cell2, cell3.classList.contains("x") === true) {
//   console.log("True")
// }

// console.log(cell1, cell2, cell3.classList)

//  if (cell1, cell2, cell3).classList.contains("x")) {
//   console.log("True")
// } else {
//   console.log("False")
// }


// function checkWin() {
//   for (const winCombo of winningCombos) {
//     if (winCombo[0] === playerX && winCombo[1] === playerX && winCombo[2] === playerX) {
//       console.log("Winner")
//       }
//     }
// }



// // function checkWin() {
//   for (const winCombo of winningCombos) {
//     let xCombos = document.querySelectorAll(".x")
//       if (winCombo[0] === xCombos && winCombo[1] === xCombos && winCombo[2] === xCombos) {
//       console.log("Winner")
//       }
//     }
// // }


// // function checkX() {
// for (let i = 0; i <= cells.length; i++) {
//   if (cells[i].classList.contains("x")) {
//     console.log(this)
//   }
// }
// // }

// for (let j = 0; j <= winningCombos.length; j++) {
//   console.log(winningCombos[j])
// }


// function checkWin() {
//   for (let i = 0; i <= winningCombos.length; i++) {
//     if (winningCombos[i].class === playerX) {
//       console.log("X wins")
//     } 
//   }
// }

// function checkWin() {
//   winningCombos.forEach(element => {
//     for (i = 0; i < winningCombos.length; i++) {
//       for (j = 0; j < winningCombos[i].length; j++) {
        
//       }
//     }
//   }

//   )
// }

//     checkX()
//     checkCircles()
//     checkWin()


// function checkX() {
//     return xCombos
// }

// function checkCircles() {
//     return circleCombos
// }

// let xCombos = []
// let circleCombos = []

// function handleClick(e) {
//   let cell = e.target
//   let currentPlayer = circleTurn ? playerO : playerX
//   cell.classList.add(currentPlayer)
//   circleTurn = !circleTurn
//   let returnedId = this.id
//   if (currentPlayer === "x") {
//     xCombos.push(returnedId)
//   } else if (currentPlayer === "circle") {
//     circleCombos.push(returnedId)
//   }
// }


// function checkWin() {
//     for (let i = 0; i <= 7; i++) {
//     let winCombo = winningCombos[i]
//     if winCombo.some(checkX) === true) {
//         console.log("X wins!")
//     } else if (winCombo.some(checkCircles) === true) {
//         console.log("Circle wins!")
//     }
// }
// }

// const winningCombos = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

// const winningCombos = [
//     ["#cell-1", "#cell-2", "#cell-3"],
//     ["#cell-4", "#cell-5", "#cell-6"],
//     ["#cell-7", "#cell-8", "#cell-9"],
//     ["#cell-1", "#cell-4", "#cell-7"],
//     ["#cell-2", "#cell-5", "#cell-8"],
//     ["#cell-3", "#cell-6", "#cell-9"],
//     ["#cell-1", "#cell-5", "#cell-9"],
//     ["#cell-3", "#cell-5", "#cell-7"]
// ]

// function handleClick(e) {
//     let cell = e.target
//     let currentPlayer = circleTurn ? playerO : playerX
//     cell.classList.add(currentPlayer)
//     circleTurn = !circleTurn
//     xCombos.push(this.id)
//     console.log(xCombos)
// }

// function handleClick(e) {
//     let cell = e.target
//     let currentPlayer = circleTurn ? playerO : playerX
//     cell.classList.add(currentPlayer)
//     circleTurn = !circleTurn
//     return this.id
//     // console.log(this.id)
//     if (currentPlayer = playerX) {
//         xCombos.push(this.id)
//         console.log(xCombos)
//     } else if (currentPlayer = playerO) {
//         oCombos.push(this.id)
//         console.log(oCombos)
//     }

// }

// function logXCombos() {
//     return document.querySelectorAll(".x")
// }

// console.log(winningCombos.some(logXCombos()))


// function checkWin() {
//     for (let i = 0; i <= 7; i++) {
//         let winCombo = winningCombos[i]
//         if (winCombo.some(xCombos)) {
//             console.log("X wins")
//         }
//     }
// }

// for (let i = 0; i <= 7; i++) {
//     let xCombos = document.querySelectorAll(".x")
//     console.log(xCombos)
// }


    // MARK CELL

    // function placeMark(cell, currentPlayer) {
    //     cell.classList.add(currentPlayer)
    // }

    // CHECK FOR WIN

    // function checkWin(currentPlayer) {
    //     return winningCombos.some(combination => {
    //         return combination.every(index => {
    //             return cells[index].classList.contains(currentPlayer)
    //         })
    //     })
    // }

    // function checkWin() {
    //     for (let i = 0; i <= 7; i++) {
    //         let winCombo = winningCombos[i]
    //         let xSelections = document.querySelectorAll(".x")
    //         let oSelections = document.querySelectorAll(".circle")
    //         if (xSelections === winCombo) {
    //             console.log("X wins")
    //     } else if (oSelections === winCombo) {
    //         console.log("O wins")
    //     }
    // }
    // }

    // CHECK FOR DRAW

    // SWITCH TURNS

    // function switchTurn() {
    //     circleTurn = !circleTurn
    // }


// let gameCells = document.getElementsByClassName("game-cell")
    

// for (let i = 0; i < gameCells.length; i++) {
//     gameCells[i].addEventListener("click", () => {
//         let cell = gameCells[i].innerText
//         let newPlayStatus = cell === "X" ? "O" : "X"
//         gameCells[i].innerText = newPlayStatus,
            // {once: true}

//     })
// }

// 1. Create Win Function

// If player X class = cell id [possible wins] then log X win,
// else if player O class = cell id [possible wins] then log O win
// else if all ids have been assigned classes and no wins detected, then tie

// 2. Assign Players
// 3. Create Ties

// function clearBoard() {
//     document.getElementById("clear").innerText = " ";
// }

// for (let i = 0; i < gameCells.length; i++) {
//     gameCells[i].addEventListener("click", () => {
//         let cell = gameCells[i].innerText
//         let newPlayStatus = cell === "X" ? "O" : "X"
//         gameCells[i].innerText = newPlayStatus

//     })
// }


})

