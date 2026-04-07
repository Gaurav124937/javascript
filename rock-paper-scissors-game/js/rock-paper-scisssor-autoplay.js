const score = localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')) : { win: 0, lose: 0, tie: 0 };

updateScoreElement();

//function to play the game

function ComputerChoice() {
    let randomNumber = Math.random();
    let ComputerChoice = '';
    if (randomNumber > 0 && randomNumber < 1 / 3) {
        ComputerChoice = 'rock';
    } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
        ComputerChoice = 'paper';
    } else {
        ComputerChoice = 'scissors';
    }
    return ComputerChoice;
}


//main game function
function playGame(playerChoice) {
    document.querySelector('.js-previous-score').innerHTML = '';


    let returnedComputerChoice = ComputerChoice();

    //function to compare choices and determine result
    function copmarison() {
        let result = '';
        if (playerChoice === returnedComputerChoice) {
            score.tie++;
            result = 'Tie';
        } else if (
            (playerChoice === 'rock' && returnedComputerChoice === 'scissors') ||
            (playerChoice === 'paper' && returnedComputerChoice === 'rock') ||
            (playerChoice === 'scissors' && returnedComputerChoice === 'paper')
        ) {
            score.win++;
            result = "You win.";
        } else {
            score.lose++;
            result = "You lose.";
        }
        //store score in local storage
        localStorage.setItem('score', JSON.stringify(score));
        return result;
    }




    //display results on the webpage
    const resultElement = document.querySelector('.displayresult');
    resultElement.innerText = copmarison();
    resultElement.classList.add('result-display');


    //display choices
    const choiceElement = document.querySelector('.choices');

    choiceElement.innerHTML = `You chose: <img src="../images/${playerChoice}-emoji.png" class="button-emoji"> | Computer chose: <img src="../images/${returnedComputerChoice}-emoji.png" class="button-emoji">`;
    choiceElement.classList.add('choice-display');

    //display score
    updateScoreElement();



}
//function to reset score
function resetScore() {
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.removeItem('score');
    alert(`Scores have been reset.`);
    updateScoreElement();
    document.querySelector('.choices').innerText = '';
    document.querySelector('.displayresult').innerText = '';

}

function updateScoreElement() {
    document.querySelector('.score-display').innerText = `Win: ${score.win} | Lose: ${score.lose} | Tie: ${score.tie}`;
}


let isAutoPlaying = false;  
let autoPlayInterval;
function autoPlay() {
    if(!isAutoPlaying){
        autoPlayInterval = setInterval(function(){
        let playerMove=ComputerChoice();
        playGame(playerMove);
    }, 2000);
    isAutoPlaying=true;
    }
    else{
        clearInterval(autoPlayInterval);
        isAutoPlaying=false;
    }
}