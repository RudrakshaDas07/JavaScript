let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn1 = document.querySelector("#new-btn1");
let newGameBtn2 = document.querySelector("#new-btn2");
let msg1Container = document.querySelector(".msg1-container");
let msg2Container = document.querySelector(".msg2-container");
let msg1 = document.querySelector("#msg1");
let msg2 = document.querySelector("#msg2");
let count = 0;
//selecting elements

let turnO = true;
//changing of playerO & playerX

const winPatterns = [
  //calculating winning pattern
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    //enter the inputs(X/O)
    if (turnO) {
      //playerO
      box.innerText = "O";
      box.style.color = "#b0413e";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      box.style.color = "#211f76";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    //count the inputs(X/O)
    console.log(count++);
  });
});

const checkWinner = () => {
  //checking the winner using winning patterns
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      } else if (count == 8) {
        showDraw();
      }
    }
  }
};

const showWinner = (Winner) => {
  //winner function
  msg1.innerText = `Congratulations, Winner is ${Winner}`;
  msg1Container.classList.remove("hide");
  disableBoxes();
};

const showDraw = () => {
  //draw function
  msg2.innerText = ` Oooh! it's a Draw`;
  msg2Container.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  //disable function
  for (let box of boxes) {
    box.disabled = true;
  }
};

const resetGame = () => {
  //reset function
  turnO = true;
  enableBoxes();
  msg1Container.classList.add("hide");
  msg2Container.classList.add("hide");
  count = 0;
};

const enableBoxes = () => {
  //enable function
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

newGameBtn1.addEventListener("click", resetGame);
//applying reset function
newGameBtn2.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame);
