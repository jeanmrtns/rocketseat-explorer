const btnTry = document.getElementById('btnTry');
const btnReset = document.getElementById('btnReset');
const inputNumber = document.getElementById('inputNumber');
const gamePage = document.querySelector('.game');
const finishPage = document.querySelector('.finish');
let randomNumber = getRandomNumber(); 
let xAttempts = 1;

btnTry.addEventListener('click', handleTry);
btnReset.addEventListener('click', handleReset);

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function handleTry(event) {
  event.preventDefault();
  
  if (Number(inputNumber.value) === randomNumber) {
    gamePage.classList.add('hidden');
    finishPage.classList.remove('hidden');
    
    finishPage.querySelector('h2 span').innerText = xAttempts;
  }

  xAttempts++;
}

function handleReset() {
  xAttempts = 1;
  randomNumber = getRandomNumber(); 
  gamePage.classList.remove('hidden');
  finishPage.classList.add('hidden');
  inputNumber.value = 0;
}
 