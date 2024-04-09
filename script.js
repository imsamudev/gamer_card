const card = document.querySelector(".card");
let hue = 0;

function rotateHue() {
  hue = (hue + 1) % 360;
  card.style.boxShadow = `0 0 10px 5px hsl(${hue}, 100%, 50%)`;
}

setInterval(rotateHue, 5);
