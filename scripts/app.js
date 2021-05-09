window.addEventListener("DOMContentLoaded", () => {




document.getElementsByClassName("game-cell").forEach(cell => cell.addEventListener('click', clickFunction() ))

clickFunction() {
    console.log("This works!")
}





// let gameCells = document.getElementsByClassName("game-cell")

// for (let i = 0; i < gameCells.length; i++) {
//     gameCells[i].addEventListener("click", () => {
//         let cell = gameCells[i].innerText
//         let newPlayStatus = cell === "X" ? "O" : "X"
//         gameCells[i].innerText = newPlayStatus

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

