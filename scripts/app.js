window.addEventListener("DOMContentLoaded", () => {

const playerX = "x"
const playerO = "circle"

let currentPlayer

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

let xCombos = []
let oCombos = []

const winningCombos = [
    ["#cell-1", "#cell-2", "#cell-3"],
    ["#cell-4", "#cell-5", "#cell-6"],
    ["#cell-7", "#cell-8", "#cell-9"],
    ["#cell-1", "#cell-4", "#cell-7"],
    ["#cell-2", "#cell-5", "#cell-8"],
    ["#cell-3", "#cell-6", "#cell-9"],
    ["#cell-1", "#cell-5", "#cell-9"],
    ["#cell-3", "#cell-5", "#cell-7"]
]

let circleTurn

let cells = document.querySelectorAll(".cell")

cells.forEach(cell => {
    cell.addEventListener("click", handleClick, {once:true})
})

function handleClick(e) {
    let cell = e.target
    currentPlayer = circleTurn ? playerO : playerX
    cell.classList.add(currentPlayer)
    circleTurn = !circleTurn
}






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

