const choicesArr = ["rock","paper", "scissors"];
const playChoose = document.getElementById("PLAY");
const compChoose = document.getElementById("COMP");
const resChoose = document.getElementById("RES");

function playRound(playerSelection){

    const computerSelection = choicesArr[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerSelection === computerSelection){
        result = "TIE!";
    } 
    else{
        switch(playerSelection){
            case "rock":
                result = (computerSelection === "scissors") ? "WIN!" : "LOSE!";
                break;
            case "paper":
                result = (computerSelection === "rock") ? "WIN!" : "LOSE!";
                break;
            case "scissors":
                result = (computerSelection === "paper") ? "WIN!" : "LOSE!";
                break;
        }
    }
playChoose.textContent = `PLAYER CHOSE: ${playerSelection}`;
compChoose.textContent = `COMPUTER CHOSE: ${computerSelection}`;
resChoose.textContent = result;
}
    // console.log(playerSelection)
    // console.log(computerSelection)