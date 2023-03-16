let rps = ['r', 'p', 's'];
// let response;
let compResponse;
let playerWins = 0;
let compWins = 0;

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

let playGame = (compResponse) => {
    let response = window.prompt('Please enter "R", "P", or "S".');

    if (response === 'R' && compResponse === 'R') {
        console.log("Player: " + response + '\n' +  "Computer: " + compResponse)
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
    }

    
}

if (window.confirm('Would you like to play Rock, Paper, Scissors?')) {
    playGame(compResponse);
}



