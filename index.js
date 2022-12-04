const gridContainer = document.querySelector(".grid-container");
const gridSizeButton = document.querySelector(".grid-size-button");

const randomColour = function () {
  let firstValue = Math.floor(Math.random() * 256);
  let secondValue = Math.floor(Math.random() * 256);
  let thirdValue = Math.floor(Math.random() * 256);
  let rgbColour = `${firstValue},${secondValue},${thirdValue}`;
  return rgbColour;
};

let newColor;
let currentColor;
let decreaseColorValue = 0.7;

// Set the mouse trail function

const mouseTrail = function () {
  let squareDivs = document.querySelectorAll(".squareDiv");
  squareDivs.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      if (e.target.style.backgroundColor) {
        console.log(e.target.style.backgroundColor);
        currentColor = e.target.style.backgroundColor;
        console.log(currentColor);
        currentColor = currentColor.slice(4, -1).split(",");

        for (let i = 0; i < currentColor.length; i++) {
          if (currentColor[i] > 0) {
            currentColor[i] = Math.floor(
              currentColor[i] - currentColor[i] * decreaseColorValue
            );
          }
        }
        currentColor = currentColor.toString();
        square.style.backgroundColor = `rgb(${currentColor})`;
      } else {
        newColor = randomColour();
        square.style.backgroundColor = `rgb(${newColor})`;
      }
    });
  });
};

//Set Defult 16x16 grid
const addGrid = function (size) {
  gridContainer.style.setProperty("--grid-rows", size);
  gridContainer.style.setProperty("--grid-cols", size);
  for (let i = 0; i < size * size; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("squareDiv");
    gridContainer.appendChild(squareDiv);
  }
  mouseTrail();
};
addGrid(16);

// Set User's Grid Size
gridSizeButton.addEventListener("click", () => {
  let gridSize = prompt(
    "How many rows an columns should your grid have? Please insert a valid number between between 2 and 100."
  );
  // Check for 'Cancel' button
  if (gridSize === null) return;
  // Check for invalid input
  while (gridSize > 100 || isNaN(gridSize) || gridSize <= 0) {
    gridSize = prompt(
      "Sorry! That's not a value we expect. Please insert a valid number between between 2 and 100"
    );
  }

  gridSize = parseInt(gridSize);
  // Remove existing grid
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  // Add user's grid & mouse trail functionality
  addGrid(gridSize);
});
