const button = document.getElementById('button');
const jumpscareContainer = document.getElementById('jumpscare-container');

let visible = true;

// Flashing button
setInterval(() => {
  button.style.visibility = visible ? 'visible' : 'hidden';
  visible = !visible;
}, 1000);

// Show jumpscare on click
button.addEventListener('click', () => {
  jumpscareContainer.style.display = 'flex';
});
