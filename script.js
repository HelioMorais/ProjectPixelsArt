// 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores.

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const button = document.getElementById('button-random-color');
button.addEventListener('click', generateRandomColors);

function generateRandomColors() {
  const colorBoxes = document.querySelectorAll('.color');
  colorBoxes[0].style.backgroundColor = 'black';
  for (let i = 1; i < colorBoxes.length; i += 1) {
    colorBoxes[i].style.backgroundColor = getRandomColor();
  }
}

// 8 - Defina a cor preta como cor inicial da paleta de cores

document.addEventListener('DOMContentLoaded', () => {
  const blackColorElement = document.querySelector('#color-1');
  blackColorElement.classList.add('selected');
});

// 9 - Crie uma função para selecionar uma cor na paleta de cores.

const colorPalette = document.querySelectorAll('.color');
for (let i = 0; i < colorPalette.length; i += 1) {
  colorPalette[i].addEventListener('click', function () {
    for (let j = 0; j < colorPalette.length; j += 1) {
      colorPalette[j].classList.remove('selected');
    }
    this.classList.add('selected');
  });
}
