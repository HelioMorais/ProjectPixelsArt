/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
// 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores.

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 4; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const button = document.getElementById('button-random-color');
// eslint-disable-next-line no-use-before-define
button.addEventListener('click', generateRandomColors);

function generateRandomColors() {
  const colorBoxes = document.querySelectorAll('.color');
  colorBoxes[0].style.backgroundColor = 'black';
  for (let i = 1; i < colorBoxes.length; i += 1) {
    colorBoxes[i].style.backgroundColor = getRandomColor();
  }
}
// 8 - Defina a cor preta como cor inicial da paleta de cores
const blackColorElement = document.querySelector('#color-1');
blackColorElement.classList.add('selected');

// 9 - Crie uma função para selecionar uma cor na paleta de cores.

const colorPalette = document.querySelectorAll('.color');
for (let i = 0; i < colorPalette.length; i += 1) {
  // eslint-disable-next-line func-names
  colorPalette[i].addEventListener('click', function (event) {
    for (let j = 0; j < colorPalette.length; j += 1) {
      colorPalette[j].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
// 10 Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.
const div = document.querySelectorAll('.pixel');
if (document.getElementsByClassName('selected')[0].style.backgroundColor.value == undefined) {
  for (let i = 0; i < colorPalette.length; i += 1) {
    const colorElement = document.getElementsByClassName('color')[i];
    const cssElement = window.getComputedStyle(colorElement);
    colorElement.style.backgroundColor = cssElement.getPropertyValue('background-color');
  }
}
for (const i of div) {
  i.addEventListener('click', (event) => {
    const elementDiv = document.getElementsByClassName('selected')[0];
    const elementColor = elementDiv.style.backgroundColor;
    console.log(elementDiv.style.backgroundColor);
    event.target.style.backgroundColor = elementColor;
  });
}
// 11 - Crie um botão que retorne a cor do quadro para a cor inicial.
const clearButton = document.getElementById('clear-board');
const pixels = document.querySelectorAll('.pixel');

clearButton.addEventListener('click', () => {
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
  });
});
