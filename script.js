const button = document.getElementById('button');
const jumpscareContainer = document.getElementById('jumpscare-container');

let visible = true;

// Flashing button
setInterval(() => {
  button.style.display = visible ? 'block' : 'none';
  visible = !visible;
}, 1000);

// Show jumpscare on click
button.addEventListener('click', () => {
  jumpscareContainer.style.display = 'flex';
});
