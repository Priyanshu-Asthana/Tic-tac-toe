let boxes = document.querySelector(".box");
let resetbtn = document.querySelector("#reset-button");
let newgamebtn = document.querySelector("#new-btn");
let msgconatiner =  document.querySelector(".msg-conatiner");
let msg = document.querySelector(".hide");
let turnO = true;  //player x, player O
let count = 0;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () =>{
      turnO  = true;
      enableBoxes();
      msgconatiner.classList.add("hide");

}
const drawgame = () =>
    {
        msg.innerText = "Game was a Draw.";
        msgconatiner.classList.remove("hide");
        disbaleboxes();
    }

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
       let iswinner =  checkwinner();
       if(count === 9 && !iswinner){
         drawgame();
       }
    });

});
const disbaleboxes = () =>
    {
        for(let box of boxes)
            {
                box.disabled = true;
            }
    }
const enableboxes = () =>
    {
        for(let box of boxes)
            {
                box.disabled = false;
                box.innerText = "empty;"
            }
    }
const showwinner = () =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgconatiner.classList.remove("hide");
    disbaleboxes();
};


const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner",pos1Val);
                showwinner(pos1Val);
            }
        }
    }

}


newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
