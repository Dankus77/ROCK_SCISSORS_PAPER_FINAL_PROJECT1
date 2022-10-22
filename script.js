const gameChoices = ['paper', 'scissors', 'rock'];

const gameButtons = document.querySelectorAll('.select');
const scoreEl = document.getElementById('score_number');
const main = document.querySelector('main');
const selection = document.querySelector('.selection');
const playAgain = document.querySelector('.reset_btn');
const userSelect = document.getElementById('user_select');
const compSelect = document.getElementById('comp_select');
const outCome = document.querySelector('#outcome');
let openModal = document.querySelector('#open');
let modal = document.querySelector('#modal');
let closeModal = document.querySelector('#close');
let userChoice;
let score = 0;

gameButtons.forEach(card =>{
    card.addEventListener('click', () =>{
        userChoice = card.getAttribute('data-choice');
        console.log(userChoice);

        getWinner();
    });
});

//console.log(pickRandomChoice());
playAgain.addEventListener('click', () =>{
    main.style.display = 'flex';
    selection.style.display = 'none';
})

openModal.addEventListener('click', ()=>{
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', ()=>{
    modal.style.display = 'none';
})


function updateScore(value){
score += value;
scoreEl.innerHTML = score;
}

function getWinner(){
    const compChoice = pickRandomChoice();

    updateSelection(userSelect, userChoice);
    updateSelection(compSelect, compChoice);

    if(userChoice === compChoice){
        //draw
        outCome.innerHTML = 'tie';
    }
    else if(userChoice === 'paper' && compChoice === 'rock' ||
     userChoice === 'rock' && compChoice === 'scissors' || userChoice === 'scissors' && compChoice === 'paper'){
        //user won
        updateScore(1);
        outCome.innerHTML = 'win';
    }else{
        //user lost
        updateScore(-1);
        outCome.innerHTML = 'lose';
    }

    main.style.display = 'none';
    selection.style.display = 'flex';
}

function updateSelection(selectionEl, choice){
    selectionEl.classList.remove('paper_btn');
    selectionEl.classList.remove('scissors_btn');
    selectionEl.classList.remove('rock_btn');

    const img = selectionEl.querySelector('img');
    selectionEl.classList.add(`${choice}_btn`);
    img.src = `/rock-paper-scissors-master/images/icon-${choice}.svg`;
    img.alt = choice;
}

function pickRandomChoice(){
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

