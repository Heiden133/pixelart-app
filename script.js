let click = true;
let color = 'black';
const DEFAULT_MODE = 'color';
let mode = DEFAULT_MODE;

document.addEventListener("DOMContentLoaded", () => {
    generateGrid(16);
    

})

const sizeButton = document.getElementById("size-button");
const blackColor = document.getElementById("black");
const randomColor = document.getElementById("random-color");
const choiceColor = document.getElementById("color-picker");
const resetButton = document.getElementById("reset");
const colorButton = document.getElementById("color-mode");
let choosenColor = choiceColor.value;

console.log(choosenColor);

choiceColor.addEventListener("input", () => choiceColor.value)


sizeButton.addEventListener("click", () => {
    let size = getSize();
    generateGrid(size);
})




function generateGrid(size) {
    let grid = document.querySelector(".board");

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    let numDivs = size * size;

    for (let i = 0; i <numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", setColor)
        grid.insertAdjacentElement("beforeend", div);
    }
}

function getSize() {
    let input = prompt("Enter a size in range 1-100:");
    return input;
}

 /*
function setRandomColor() {

} */

function setColor() {
  if (click) {
      if (mode === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      } else if (mode === "color") {
        this.style.backgroundColor = choiceColor.value;
      } else if (mode === "eraser") {
        this.style.backgroundColor = 'white'
      }
    }
}

function clearGrid() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}

function changeColor(choice) {
    mode = choice;
  }

  document.querySelector(".board").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
      click = !click;
      if (click) {
        document.querySelector(".mode").textContent = "Mode: Coloring";
      } else {
        document.querySelector(".mode").textContent = "Mode: Not Coloring";
      }
    }
  });