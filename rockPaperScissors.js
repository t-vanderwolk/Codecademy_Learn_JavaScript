const getUserChoice = userInput => { 
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
      return userInput;
    } else {
    return 'Error, please type: rock,paper or scissors.'
    }
    }

//console.log(getUserChoice('paper')) returns paper
//console.log(getUserChoice('rock')) returns rock
//console.log(getUserChoice('scissors'))  returns scissors
//console.log(getUserChoice('toast'))  reurns Error please type: rock,paper or scissors.

const getComputerChoice = () => {
    const randomNumber = (Math.floor(Math.random()*3))
    switch (randomNumber) {
      case 0:
      return 'rock';
      case 1: 
      return 'scissors';
      case 2:
      return 'paper'; 
    }
    };

// console.log(getComputerChoice()) test output computersChoice as rock, paper or scissors 
//console.log(getComputerChoice()) test output computersChoice as rock, paper or scissors 
//console.log(getComputerChoice()) test output computersChoice as rock, paper or scissors 

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice===computerChoice){
      return 'This game is a tie!';
    }
    if (userChoice==='paper'){
      if (computerChoice==='scissors'){
        return 'Sorry, computer won. Scissors cut paper.';
      } else {
        return 'Congratulations, you won!';
      }
    }
    };
    if (userChoice=== 'rock'){
        if(computerChoice==='paper'){
          return 'Sorry, computer won. Paper covers rock.';
        
        } else {
       return 'Congratulations, you won!';
        }
      };
      if (userChoice==='scissors'){ 
          if (computerChoice=== 'rock'){
    return 'Sorry, computer wins, rock breaks scissors';
  } else {
return 'Congratulations, you won!';
  }
};
//console.log(determineWinner('rock', 'scissors'));
//console.log(determineWinner('paper','scissors'));
//console.log(determineWinner('scissors','rock'));