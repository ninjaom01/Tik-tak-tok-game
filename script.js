// console.log("Hello coders")

// let boxes = document.querySelectorAll(".box");
// let resetbtn = document.querySelector("reset");
// let newGamebtn = document.querySelector("newGamebtn");
// let msgContainer = document.querySelector("msg-container");
// let msg = document.querySelector("msg");

// let turnO = true;//playerX , playerO

// const winPatterns = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
// ];

// const resetGame = () =>{
//     turnO = true;
//     enableboxes();
//     masContainer.classList.add("hide");

// }

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("Box was clicked");
//         if(turnO) { //playerO
//             box.innerText = "O";
//             turnO = false;
//         }
//         else{ //playerX
//             box.innerText="X";
//             turnO = true;
//         }
//         box.disabled = true;

//         checkWinner();
//     });
// });
// const disableboxes = () =>{
//     for(let box of boxes){
//         box.disabled = true ;
//     }
// }
// const enableboxes = () =>{
//     for(let box of boxes){
//         box.disabled = false;
//         box.innerText = "";
//     }
// }
// const showWinner = (winner) =>{
//     msg.innerText =`Congratulations, Winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableboxes();
// };

// const checkWinner = () =>{
//     for(pattern of winPatterns){
//         let pos1val = boxes[pattern[0]].innerText
//         let pos2val = boxes[pattern[1]].innerText
//         let pos3val = boxes[pattern[2]].innerText

//         if(pos1val != "" && pos2val != "" && pos3val != "" ){
//             if(pos1val === pos2val && pos2val === pos3val){
//                 console.log("winner" ,pos1val);

//                 showWinner(pos1val);
//             }
//         }
//     }
// };

// newGamebtn.addEventListener("click", resetGame);
// resetbtn.addEventListener("click", resetGame);
console.log("Hello coders");

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset"); // Fixed selector to target class
let newGameBtn = document.querySelector(".newGamebtn"); // Fixed selector to target class
let msgContainer = document.querySelector(".msg-container"); // Fixed selector to target class
let msg = document.querySelector(".msg"); // Fixed selector to target class

let turnO = true; // True for player O's turn, false for player X

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Add event listeners to all boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            // Check whose turn it is
            if (turnO) {
                box.innerText = "O"; // Player O's turn
                turnO = false;
            } else {
                box.innerText = "X"; // Player X's turn
                turnO = true;
            }
            box.style.pointerEvents = "none"; // Disable further clicks on the box
            checkWinner(); // Check if there is a winner after the move
        }
    });
});

// Display winner message
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide"); // Show the message container
    disableAllBoxes(); // Disable all boxes after a winner is found
};

// Check for a winner
const checkWinner = () => {
    for (const pattern of winPatterns) {
        const pos1val = boxes[pattern[0]].innerText;
        const pos2val = boxes[pattern[1]].innerText;
        const pos3val = boxes[pattern[2]].innerText;

        // Check if all three positions have the same value and are not empty
        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            console.log("Winner:", pos1val);
            showWinner(pos1val);
            return;
        }
    }

    // Check for a draw (if all boxes are filled with no winner)
    const allFilled = Array.from(boxes).every(box => box.innerText !== "");
    if (allFilled) {
        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
    }
};

// Disable all boxes
const disableAllBoxes = () => {
    boxes.forEach(box => {
        box.style.pointerEvents = "none";
    });
};

// Reset the game
resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = ""; // Clear box text
        box.style.pointerEvents = "auto"; // Re-enable clicks
    });
    msg.innerText = ""; // Clear the winner message
    msgContainer.classList.add("hide"); // Hide the message container
    turnO = true; // Reset turn to player O
});

// Handle new game button functionality
newGameBtn.addEventListener("click", () => {
    console.log("New game started!");
    resetBtn.click(); // Resets the board for a new game
});