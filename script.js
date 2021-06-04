const createLetter = document.getElementById('criar-carta');

function getInputText() {
  let texto = document.getElementById('carta-texto').value;
  texto = texto.split(' ');

  return texto;
}

createLetter.addEventListener('click', () => {
  const text = getInputText();
  const generateLetter = document.getElementById('carta-gerada');
  const inputText = document.getElementById('carta-texto');

  generateLetter.innerHTML = '';

  if (inputText.value === '' || inputText.value === ' ') {
    generateLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < text.length; index += 1) {
      const createSpan = document.createElement('span');
      createSpan.innerText = text[index];
      generateLetter.appendChild(createSpan);
    }
  }
});

const styles = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  size: ['medium', 'big', 'reallybig'],
  rotation: ['rotateleft', 'rotateright'],
  slope: ['skewleft', 'skewright'],

};

createLetter.addEventListener('click', () => {
  const span = document.getElementsByTagName('span');

  for (let index = 0; index < span.length; index += 1) {
    span[index].classList.add(styles.style[Math.floor(Math.random() * styles.style.length)]);
    span[index].classList.add(styles.size[Math.floor(Math.random() * styles.size.length)]);
    span[index].classList.add(styles.rotation[Math.floor(Math.random() * styles.rotation.length)]);
    span[index].classList.add(styles.slope[Math.floor(Math.random() * styles.slope.length)]);
  }
});

createLetter.addEventListener('click', () => {
  const spanAmount = document.getElementsByTagName('span').length;
  document.getElementById('carta-contador').innerText = spanAmount;
});