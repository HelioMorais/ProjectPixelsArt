const button = document.getElementById('button-random-color');
button.addEventListener('click', generateRandomColors);

function generateRandomColors() {
  const colorBoxes = document.querySelectorAll('.color');
  colorBoxes[0].style.backgroundColor = 'black';
  for (let i = 1; i < colorBoxes.length; i += 1) {
    colorBoxes[i].style.backgroundColor = getRandomColor();
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener('DOMContentLoaded', () => {
  const blackColorElement = document.querySelector('#color-1');
  blackColorElement.classList.add('selected');
});
