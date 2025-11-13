const wrapper = document.querySelector('.wrapper'),
  qrInput = wrapper.querySelector('.form input'),
  generateButton = wrapper.querySelector('.form button'),
  qrImage = wrapper.querySelector('.qr-code img');

generateButton.addEventListener('click', () => {
  let qrValue = qrInput.value;
  if (!qrValue) return; // if the input is empty, return nothing
  generateButton.innerText = 'Generating QR Code...';
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  qrImage.addEventListener('load', () => {
    wrapper.classList.add('active');
    generateButton.innerText = 'Generate QR Code';
  });
});

qrInput.addEventListener('keyup', () => {
  if (!qrInput.value) {
    wrapper.classList.remove('active');
  }
});