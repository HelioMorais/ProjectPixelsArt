const button = document.getElementById('button-random-color');
const colors = ['#000000'];
const corAleatoriaBox = document.querySelectorAll('.color');

button.addEventListener('click', () => {
  const randomColor = getRandomColor();
  corAleatoriaBox.push(randomColor);
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
