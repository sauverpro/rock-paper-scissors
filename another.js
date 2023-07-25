var results = "";
var ingame = 0;
var comp = "";
var choice;
var computerChoice;
function getComputerChoice() {
  var randomChoice = Math.floor(Math.random() * 3) + 1;
  computerChoice = randomChoice;
  if (computerChoice == 1) {
    return (comp = "rock");
  } else if (computerChoice == 2) {
    return (comp = "paper");
  } else {
    return (comp = "scissors");
  }
}
console.log(`computer choice ${getComputerChoice()}`);
let player = prompt("Enter rock, paper, or scissors");
console.log(`player choise = ${player}`);
function playRound(playerSelection, computerSelection) {
  
    if (playerSelection  == "paper" && computerSelection == "rock" ) {
        results ="You win! Paper beats Rock"
        return results
    }
    else if (playerSelection  == "rock" && computerSelection == "paper" ) {
        results ="You Lose! Paper beats Rock"
        return results
    }
    else if (playerSelection  == "rock" && computerSelection == "scissors" ) {
        results ="You win! rock beats scissors"
        return results
    }
    else if (playerSelection  == "scissors" && computerSelection == "rock" ) {
        results ="You lose! rock beats scissors"
        return results
    }
    else if (playerSelection  == "scissors" && computerSelection == "paper" ) {
        results ="You win! scissors beats papers"
        return results
    }
    else if (playerSelection  == "paper" && computerSelection == "scissors" ) {
        results ="You lose! scissors beats papers"
        return results
    }
    else{
        results = "try again"
        return results
    }
}
console.log(playRound(player,getComputerChoice()));