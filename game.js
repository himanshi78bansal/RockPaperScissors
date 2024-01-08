let uScore = 0;
let cScore = 0;

// access all three div's of options
const options = document.querySelectorAll(".option");
// access msg paragraph
const msg = document.querySelector("#msg");
const msg1 = document.querySelector("#msg1");
// access userScore
const userScore = document.querySelector("#you")
// access compScore
const compScore = document.querySelector("#comp")

// userChoice
options.forEach((option) => {
    option.addEventListener("click", () => {
        const userChoice = option.getAttribute("id");
        playGame(userChoice);
    })
});

// compChoice
const genCompChoice = () => {
    const choice = ["ROCK", "PAPER", "SCISSORS"];
    let idx = Math.floor(Math.random()*3);
    return choice[idx]; 
};

// game logic
const playGame = (userChoice) =>
{
    console.log("user = " ,userChoice);
    const compChoice = genCompChoice();
    console.log("comp = " ,compChoice);

    if(userChoice == compChoice){
        // draw game
        drawGame(userChoice, compChoice);
    } else {
        let userWin = true;
        if(userChoice === "ROCK"){
            // PAPER, SCISSORS
            userWin = compChoice === "PAPER" ? false : true;
        } else {
            if(userChoice === "PAPER"){
                // ROCK, SCISSORS
                userWin = compChoice === "ROCK" ? true : false;
            } else {
                if(userChoice === "SCISSORS"){
                    // ROCK, PAPER
                    userWin = compChoice === "ROCK" ? false : true;
                }
            }
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// draw game
const drawGame = (userChoice, compChoice) => {
    console.log("Game was draw");
    msg.innerText = "Draw";
    msg1.innerText = `Your ${userChoice} is equals to Computer's ${compChoice}`;
};

// show Winner
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        uScore++;
        userScore.innerText = uScore;
        console.log("You win");
        msg.innerText = "You Win";
        msg1.innerText = `Your ${userChoice} beats Computer's ${compChoice}`;
    } else {
        cScore++;
        compScore.innerText = cScore;
        console.log("You lose");
        msg.innerText = "You Lose";
        msg1.innerText = `Your ${userChoice} is bitten by Computer's ${compChoice}`;
    }
}