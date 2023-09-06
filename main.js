// main game
let gamePadBoxes = document.querySelectorAll(".box");
let gamePadDiv = document.querySelector(".game-pad");
let gamePad = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// reset button
let resetButton = document.querySelector("button");

// turn
let turnDiv = document.querySelector(".turn");
let turn = "x";
turnDiv.innerText = turn;

gamePadBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      // change the turn on screen
      box.innerText = turn;
      turn = turn == "x" ? "o" : "x";
      turnDiv.innerText = turn;

      // change the turn logically
      gamePad[box.getAttribute("value") - 1] = turn;

      // the winner
      if (
        (gamePad[0] == gamePad[1] && gamePad[1] == gamePad[2]) ||
        (gamePad[3] == gamePad[4] && gamePad[4] == gamePad[5]) ||
        (gamePad[6] == gamePad[7] && gamePad[7] == gamePad[8]) ||
        (gamePad[0] == gamePad[3] && gamePad[3] == gamePad[6]) ||
        (gamePad[1] == gamePad[4] && gamePad[4] == gamePad[7]) ||
        (gamePad[2] == gamePad[5] && gamePad[5] == gamePad[8]) ||
        (gamePad[2] == gamePad[4] && gamePad[4] == gamePad[6]) ||
        (gamePad[0] == gamePad[4] && gamePad[4] == gamePad[8])
      ) {
        let winner = `${turn == "x" ? "o" : "x"} WON`;
        turnDiv.innerText = winner;

        setTimeout(() => {
          reset();
        }, 1000);
      }
    }
  });
});

//setting up the reset button
resetButton.addEventListener("click", () => {
  reset();
});

//    functions    //
// reset function
function reset() {
  gamePad = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  gamePadBoxes.forEach((box) => {
    box.innerText = "";
  });
  turnDiv.innerText = turn;
}
