const displayKey = document.querySelector('.display-key');
const displayKeyName = document.querySelector('.display-key-name');
const displayKeyCode = document.querySelector('.display-key-code');

document.addEventListener('keydown', (e) => {
  console.log(e);
  displayKey.textContent = e.key;
  displayKeyName.textContent = e.code;
  displayKeyCode.textContent = e.key.charCodeAt(0);
});
