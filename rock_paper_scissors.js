function playRound(){}

function computerPlay(){}

function computerSelection(){
    let computer_options = ['rock', 'paper', 'scissors'];
    let election = Math.floor(Math.random()*3);
    return computer_options[election]
}

function playerSelection(){
    let player_election;
    player_election = window.prompt('Rock, Paper, or Scissors?');
    return player_election.toLowerCase()
}