let targetNumber = Math.floor(Math.random() * 20) + 1;
let attempt = 0;
let points = 20;
let high = 0;
let intGuess = document.querySelector('#Guess');
let btnCheck = document.querySelector('#check');
let btnReset = document.querySelector('#reset');
let message = document.querySelector('#p1');
let attemptsCount = document.querySelector('#p2');
let score = document.querySelector('#p3');
let highScore = document.querySelector('#p4');
let img = document.querySelector('.hide');
btnCheck.addEventListener('click',display);
function display () {
    let Guess = parseInt(intGuess.value);
    
    if(isNaN(Guess) || Guess < 1 || Guess > 20){
        message.textContent = 'Please enter a valid number between 1 and 20.';
    }
    else{
        attempt++;
        attemptsCount.textContent = 'Number of attempts: ' + attempt;

        if (Guess < targetNumber) {
            points--;
            message.textContent = 'Try higher than ' + Guess;
            score.textContent = 'score: '+ points;
    }
        else if ( Guess > targetNumber) {
            points--;
            message.textContent = 'Try lower than ' + Guess;
            score.textContent = 'score: '+ points;
    }
        else{
            
            message.textContent = 'Congratulations! You guess the number '+ targetNumber + ' in ' + attempt + ' attempts';
            btnCheck.disabled = true;
            intGuess.disabled = true;
            img.classList.remove('hide');
        if (points > high){
            high = points;
            highScore.textContent = 'Highscore: '+ high;
            attempt = 0;
            score.textContent = 'Your score is ' + points;
        }
        else{
            attempt = 0;
            score.textContent = 'Your score is '+ points;
        }
    }
    }
    intGuess.value = '';
    console.log(targetNumber);
    
}

btnReset.addEventListener('click', resetGame);

function resetGame () {
    targetNumber = Math.floor(Math.random() * 20) + 1;
    attempt = 0;
    points = 20;
    attemptsCount.textContent = 'Number of attempts: ' + attempt;
    message.textContent = '----?----';
    score.textContent = 'score: 20'
    btnCheck.disabled = false;
    intGuess.disabled = false;
    img.classList.add('hide');
}
let resetHighScore = document.querySelector('#resetscore');
resetHighScore.addEventListener('click' , resetHigh);
function resetHigh(){
    high = 0;
    highScore.textContent = 'Highscore:N/A';
}