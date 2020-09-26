// Global Selections and Variables
const colorsDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelector("input[type='range']");
const currentHexse = document.querySelectorAll(".color h2");

let initialColors;

// Functions

// Color Generator
function generateHex() {
  const letters = "1234567890ABCDEF";
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash += letters[Math.floor(Math.random() * 16)];
  }
  return hash;
}

// let randomHex = generateHex();
// console.log(randomHex);

function randomColors() {
  colorsDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();

    // add the color to the background

    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;
  });
}

randomColors();
