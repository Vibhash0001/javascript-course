let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

let computerMove = '';

document.querySelector('.js-rock-btn')
    .addEventListener('click', () => {
        playGame('rock'); //If we use fn directly it will give the undefined value 
    }
);

document.querySelector('.js-paper-btn')
    .addEventListener('click', () => {
        playGame('paper'); //If we use fn directly it will give the undefined value 
    }
);

document.querySelector('.js-scissors-btn')
    .addEventListener('click', () => {
        playGame('scissors'); //If we use fn directly it will give the undefined value 
    }
);

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r' || event.key === 'R'){
        console.log(event.key);
        playGame('rock');
    } else if(event.key === 'p' || event.key === 'P'){
        console.log(event.key);
        playGame('paper');
    } else if(event.key === 's' || event.key === 'S'){
        console.log(event.key);
        playGame('');
    }
});

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
let flag = false;
let intervalId = null;

function autoPlay(){
    if(flag == false){
        flag = true;
        console.log('Auto Play start');
        document.querySelector('.js-autoplay-btn').innerHTML = 'Stop';
        intervalId = setInterval(() => {
            getComputerMove();
            playerCompMove = computerMove; 
            playGame(playerCompMove);
        }, 1000); 

    }
    else if(flag == true){
        flag = false;
        clearInterval(intervalId);
        document.querySelector('.js-autoplay-btn').innerHTML = 'Auto Play';
        console.log('Auto Play Stop')
    }

}

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
    console.log( 'Computer Move: ' + computerMove);
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
    console.log('Player Move: ' + playerMove)
    console.log(result);

//             alert(`You picked ${playerMove}, Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    
}