const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.getElementById('btnTry');
const btnReset = document.getElementById('btnReset');

let inputNumber = document.querySelector('#inputNumber');
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

function handleTry(e) {
  e.preventDefault(); // Evita que o formulário seja enviado

  if (inputNumber.value === '') {
    alert('Digite um número');
    return;
  }

  if (Number(inputNumber.value) <= 10 && Number(inputNumber.value) >= 0) {
    if (Number(inputNumber.value) === randomNumber) {
      handleToggleClass();

      document.querySelector(
        '.screen2 h2'
      ).innerHTML = `Acertou em ${xAttempts} vezes`;
    }

    xAttempts++;
  } else {
    alert('Digite um número entre 0 e 10');
  }
}

function handleReset() {
  handleToggleClass();

  inputNumber.value = '';
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function handleToggleClass() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

btnTry.addEventListener('click', handleTry);
btnReset.addEventListener('click', handleReset);
