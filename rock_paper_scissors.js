function playRound(playerSelection, computerSelection){
    let results = 'You ';
    let playerResult;

    if (playerSelection == 'rock' && computerSelection == 'paper'){
        playerResult = 'lose! Paper beats Rock';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerResult = 'win! Rock beats Scissors';
    }
    
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        playerResult = 'lose! Scissors beats Paper';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerResult = 'win! Paper beats Rock';
    }
    
    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        playerResult = 'lose! Rock beats Scissors';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerResult = 'win! Scissors beats Paper';
    }

    else {
        playerResult = 'tied! No one wins';
    }

    results +=  playerResult;

    return results
}

function computerPlay(){
    let computer_options = ['rock', 'paper', 'scissors'];
    let election = Math.floor(Math.random()*3);
    return computer_options[election]
}

function playerSelection(){
    let player_election;
    player_election = window.prompt('Rock, Paper, or Scissors?');
    return player_election.toLowerCase()
}

function game(){}