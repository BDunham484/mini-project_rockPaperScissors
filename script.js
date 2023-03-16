let compResponse;
let playerWins = 0;
let compWins = 0;
let ties = 0;

let playGame = () => {
    let rpsFunc = () => {
        let num = Math.floor(Math.random() * ((3 - 1) + 1)) + 1
    
        if (num === 1) {
            let compResponse = "R";
            return compResponse;
        } else if (num === 2) {
            let compResponse = "P";
            return compResponse;
        } else {
            let compResponse = "S";
            return compResponse;
        }
    }
    
    compResponse = rpsFunc();

    let response = window.prompt('Please enter "R", "P", or "S".').toUpperCase();

    if (response === 'R' && compResponse === 'R') {
        console.log("Player: " + response + '\n' +  "Computer: " + compResponse)
        ties++;
        console.log('Tie');
    } else if (response === 'R' && compResponse === 'P') {
        console.log("Player: " + response + '\n' +  "Computer: " + compResponse)
        compWins++;
        console.log('Computer Wins');
    } else if (response === 'R' && compResponse === 'S') {
        console.log("Player: " + response + '\n' +  "Computer: " + compResponse)
        playerWins++;
        console.log("Player Wins");
    } else if (response === 'P' && compResponse === 'P') {
        console.log("Player: " + response + '\n' +  "Computer: " + compResponse)
        ties++;
        console.log('Tie');
    } else if (response === 'P' && compResponse === 'R') {
        console.log("Player: " + response + '\n' +  "Computer: " + compResponse)
        playerWins++;
        console.log("Player Wins");
    } else if (response === 'P' && compResponse === 'S') {
        console.log("Player: " + response + '\n' +  "Computer: " + compResponse)
        compWins++;
        console.log('Computer Wins');
    } else if (response === 'S' && compResponse === 'S') {
        console.log("Player: " + response + '\n' +  "Computer: " + compResponse)
        ties++;
        console.log('Tie');
    } else if (response === 'S' && compResponse === 'P') {
        console.log("Player: " + response + '\n' +  "Computer: " + compResponse)
        playerWins++;
        console.log("Player Wins");
    } else if (response === 'S' && compResponse === 'R') {
        console.log("Player: " + response + '\n' +  "Computer: " + compResponse)
        compWins++;
        console.log('Computer Wins');
    } else {
        console.log("I don't know what just happened.");
    };

    window.alert("Totals: \n Player Wins: " + playerWins + " \n Computer Wins: " + compWins + "\n Ties: " + ties);

    if (window.confirm('Would you like to play Rock, Paper, Scissors?')) {
        playGame();
    };
};

if (window.confirm('Would you like to play Rock, Paper, Scissors?')) {
    playGame();
}



