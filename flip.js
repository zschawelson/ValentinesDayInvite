const image = document.getElementById("flipImage");

const images = [
  "./assets/AngryValentine.gif",
  "./assets/PowerPuffValentineMad.gif",
];

let index = 0;

setInterval(() => {
  image.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % images.length;
    image.src = images[index];
    image.style.opacity = 1;
  }, 300);
}, 2000);
