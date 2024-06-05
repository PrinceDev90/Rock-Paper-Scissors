let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScores = document.querySelector("#user_score");
const compScores = document.querySelector("#comp_score");
const msg = document.querySelector("#msg");

const genComChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw play Again";
  msg.style.backgroundColor = "#081b31";
};
const showUserWin = (userWin, compChoice, userChoice) => {
  if (userWin) {
    userScore++;
    userScores.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScores.innerText = compScore;
    msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("userChoice is = ", userChoice);
  //Generate the computer choice
  const compChoice = genComChoice();
  console.log("computer choice is =", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showUserWin(userWin, compChoice, userChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log(userChoice);
    playGame(userChoice);
  });
});
