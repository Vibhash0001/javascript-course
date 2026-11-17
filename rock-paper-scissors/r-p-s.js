let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

let computerMove = '';


// if(!score){
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     };
// }

// const score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
// };

// console.log(JSON.parse(localStorage.getItem('score')));

function getResultElement(result, playerMove, computerMove){
    document.querySelector('.js-result')
        .innerHTML = (`${result}. <br> <br> You <img src="images/${playerMove}-emoji.png"> - <img src = "images/${computerMove}-emoji.png"> Computer`);
}

function updateScoreElement(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function getComputerMove(){
    let randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    } else if(randomNumber >= 2/3 && randomNumber <= 1/1){
        computerMove = 'scissors'
    }
    console.log(computerMove);
}

function playGame(playerMove){
    getComputerMove();
    result = '';

    if(playerMove === 'scissors'){
        if(computerMove === 'scissors'){
            result = 'Tie';
        } else if(computerMove === 'rock'){
            result = 'You Lose';
        } else if(computerMove === 'paper'){
            result = 'You Won';
        }
    } else

    if(playerMove === 'paper'){
        if(computerMove === 'paper'){
            result = 'Tie';
        } else if(computerMove === 'scissors'){
            result = 'You Lose';
        } else if(computerMove === 'rock'){
            result = 'You Won';
        }
    } else

    if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result = 'Tie';
        } else if(computerMove === 'paper'){
            result = 'You Lose';
        } else if(computerMove === 'scissors'){
            result = 'You Won';
        }
    }

    if(result === 'You Won'){
        score.wins++;
    }else if(result === 'You Lose'){
        score.losses++;
    }else if(result === 'Tie'){
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    getResultElement(result, playerMove, computerMove);

    updateScoreElement();
    console.log(result);

//             alert(`You picked ${playerMove}, Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    
}