const choices = document.querySelectorAll(".choice");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resetBtn = document.getElementById("reset-btn");

let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    updateUI(userChoice, computerChoice, result);
  });
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function getResult(user, computer) {
  if (user === computer) return "It's a Draw!";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    userScore++;
    return "You Win! 🎉";
  } else {
    computerScore++;
    return "You Lose! 😢";
  }
}

function updateUI(user, computer, result) {
  userChoiceDisplay.textContent = user;
  computerChoiceDisplay.textContent = computer;
  resultDisplay.textContent = result;
  userScoreDisplay.textContent = userScore;
  computerScoreDisplay.textContent = computerScore;
}

resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScoreDisplay.textContent = "0";
  computerScoreDisplay.textContent = "0";
  userChoiceDisplay.textContent = "-";
  computerChoiceDisplay.textContent = "-";
  resultDisplay.textContent = "Make your move!";
});
