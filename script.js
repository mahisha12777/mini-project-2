const computerchoice = document.getElementById("computer-choice");
const result = document.getElementById("result");
const score = document.getElementById("player-score");
const choices = ["Rock","Paper","Scissor"];
let gameResult;
let scoreCount = 0;
function playerChoice(choice) {
    result.classList.remove("green","red");
    let computer = computerPlayer();
    computerchoice.innerText = computer;
    console.log(choice);
    console.log(computer);

    if(choice == computer){ 
        gameResult = "its a draw";
    }   else{
        switch(choice) {
            case "Rock":
                gameResult = computer == "Scissor"? "you win!" : "you lost!";
                break;
            case "Paper":
                gameResult = computer == "Scissor"? "you lost!" : "you win!";
                break;
            case "Scissor":
                gameResult = computer == "Rock"? "you lost!" : "you win!";
                break;
        }
    }
    if(gameResult == "you win!") {
        scoreCount++;
        score.innerText = scoreCount;
        result.classList.add("green")
    }else if(gameResult == "you lost!") {
        result.classList.add("red")
    }
    result.innerText = gameResult;
}
function computerPlayer() {
    let selection = choices[Math.floor(Math.random() * 3)];
    return selection;
}
