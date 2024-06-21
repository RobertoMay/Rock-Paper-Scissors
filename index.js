function getComputerChoice() {
    let x = Math.floor((Math.random() * 3) + 1);

    if (x === 1) {
        return 'Rock';
    } else if (x === 2) {
        return 'Paper';
    } else if (x === 3) {
        return 'Scissors';
    }

}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player === 'rock' && computer === 'scissors') {
        return "You Win! Rock beats Scissors"
    } else if (player === 'rock' && computer === 'paper') {
        return "You Lose! Paper beats Rock"
    } else if (player === 'paper' && computer === 'rock') {
        return "You Win! Paper beats Rock"
    } else if (player === 'paper' && computer === 'scissors') {
        return "You Lose! Scissors beat Paper"
    } else if (player === 'scissors' && computer === 'paper') {
        return "You Win! Scissors beat Paper"
    } else if (player === 'scissors' && computer === 'rock') {
        return "You Lose! Rock beats Scissors"
    } else if (player === computer) {
        return "TIE play again"
    } else {
        return "Enter a valid value"
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let index = 0; index < 5; index++) {
        let player = prompt('Select between Rock, Paper or Scissors: ');
        let round = playRound(player, getComputerChoice());
        let winOrLose = round.slice(0, 5);

        if (winOrLose === 'You W') {
            console.log(round);
            scorePlayer++;
            console.log("You: " + scorePlayer + "  Computer: " + scoreComputer);
        } else if (winOrLose === 'You L') {
            console.log(round);
            scoreComputer++;
            console.log("You: " + scorePlayer + "  Computer: " + scoreComputer);
        } else if (winOrLose === 'TIE p') {
            console.log(round);
            console.log("You: " + scorePlayer + "  Computer: " + scoreComputer);
        } else {
            console.log(round);
            break;
        }
    }

    if (scorePlayer > scoreComputer) {
        console.log("");
        console.log("You Win!!!");
        console.log("You: " + scorePlayer + "  Computer: " + scoreComputer);
    } else if (scorePlayer === scoreComputer) {
        console.log("TIE");
    } else {
        console.log();
        console.log("You Lose!");
        console.log("You: " + scorePlayer + "  Computer: " + scoreComputer);
    }

}

document.addEventListener('DOMContentLoaded', () => {
    let scorePlayer = 0;
    let scoreComputer = 0;
    const choices = document.querySelectorAll('.choice');
    const resultText = document.getElementById('result-text');
    const score = document.getElementById('score');
    const winner = document.getElementById('winner');

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const playerChoice = choice.id;
            let result = playRound(playerChoice, getComputerChoice());
            let winOrLose = result.slice(0, 5);


            if (winOrLose === 'You W') {
                scorePlayer++;
            } else if (winOrLose === 'You L') {
                scoreComputer++;
            } else if (winOrLose === 'TIE p') {
            } else {
                console.log(result);
            }

            resultText.textContent = result;
            score.textContent = "You " + scorePlayer + " Computer " + scoreComputer;

            if (scorePlayer === 5) {
                winner.textContent = "You Win :)";
                scorePlayer = 0;
                scoreComputer = 0;
            } else if (scoreComputer === 5) {
                winner.textContent = "You Lose :("
                scorePlayer = 0;
                scoreComputer = 0;
            } else {
                winner.textContent = "";
            }

        });
    });

});

// game();