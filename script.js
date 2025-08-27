function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let answer = "";
  switch (randomNumber) {
    case 1:
      answer = "rock";
      break;
    case 2:
      answer = "paper";
      break;
    case 3:
      answer = "scissors";
      break;
  }
  return answer;

  /* More elegant code would be
    let choices = ['rock','paper','scissors'];
    return choices[Math.floor(Math.random()*3)];
      */
}

//console.log(getComputerChoice())
let choiceCounter = 0;
function getHumanChoice() {
  let choice = prompt("Pick from: rock, paper, scissors!");
  //let choice = readLine("Pick from: rock, paper, scissors!")  ;
  
  if (
    choice === null ||
    typeof choice !== "string" ||
    !["rock", "paper", "scissors"].includes(choice.toLowerCase())
  ) {
    choiceCounter++
    if(choiceCounter > 3){
        return;
    }
    return getHumanChoice();
  } else {
    return choice.toLowerCase(); // normalize casing
  }
}

let humanScore = 0;
let computerScore = 0;
let game = 0;
let winner = "";

function playRound(humanChoice, computerChoice) {
  //Logic if choice for human is rock
  if (humanChoice === "rock" && computerChoice === "scissors") {
    game++;
    humanScore++;
    return `Human won round!`;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    game++;
    computerScore++;
    return `Computer won round!`;
  } else if (humanChoice === computerChoice) {
    game++;
    return "Draw";
  }
  //Logic if choice for human is paper
  if (humanChoice === "paper" && computerChoice === "rock") {
    game++;
    humanScore++;
    return `Human won round!`;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    game++;
    computerScore++;
    return `Computer won round!`;
  } else if (humanChoice === computerChoice) {
    game++;
    return "Draw";
  }
  //Logic if choice for human is scissors
  if (humanChoice === "scissors" && computerChoice === "paper") {
    game++;
    humanScore++;
    return `Human won round!`;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    game++;
    computerScore++;
    return `Computer won round!`;
  } else if (humanChoice === computerChoice) {
    game++;
    return "Draw";
  }
}
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  game = 0;
  winner = "";
  choiceCounter =0;
}

function playGame() {

 resetGame();

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    if(humanChoice===computerChoice){
        i--;
        alert('Draw: Replay game!')
        continue;
    }
  }

  if (humanScore > computerScore) {
    winner = "Human won the game!";
  } else if (computerScore > humanScore) {
    winner = "Computer won the game!";
  } else {
    winner = "The game is a draw!";
  }

   console.log(`Final score — Human: ${humanScore}, Computer: ${computerScore}. ${winner}`);
}
