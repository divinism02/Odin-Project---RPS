// Step 2: Get the computer's random choice
function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Step 3: Get the human's choice
function getHumanChoice() {
  const humanChoice = prompt("Choose rock, paper, or scissors:");
  return humanChoice;
}

// Step 6: Play the entire game (5 rounds)
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Step 5: Play a single round
  function playRound(humanChoice, computerChoice) {
    // Make humanChoice case-insensitive
    const normalizedHumanChoice = humanChoice.toLowerCase();

    if (normalizedHumanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${computerChoice}.`);
      return;
    }

    const winConditions = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (winConditions[normalizedHumanChoice] === computerChoice) {
      humanScore++;
      console.log(
        `You win! ${capitalize(normalizedHumanChoice)} beats ${capitalize(
          computerChoice
        )}.`
      );
    } else {
      computerScore++;
      console.log(
        `You lose! ${capitalize(computerChoice)} beats ${capitalize(
          normalizedHumanChoice
        )}.`
      );
    }
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  for (let round = 1; round <= 5; round++) {
    console.log(`--- Round ${round} ---`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log("--- Game Over ---");
  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("The computer won the game!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame();