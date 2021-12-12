function generateGrid(rows) {
    for(let i = 0; i < rows*rows; i++) {
        const box = document.createElement("div");
        box.classList.add('square');
        gridContainer.appendChild(box);
    }
}

function onHover(e) {
    const square = e.target.closest('.square');
    if(!square) return;
    if(e.buttons !== 1) return;
    square.style.backgroundColor = color;
}

function onClick(e,color) {
    e.preventDefault();
    const square = e.target.closest('.square');
    if(!square) return;
    square.style.backgroundColor = color;
}

function onReset(e) {
    gridContainer.innerHTML = ``;
    const input = Number(prompt("Enter new size"));
    if(!input) {
        alert("Must be a number");
    } else if(input < 1 || input > 100) {
        alert("Number must be between 1 and 100!");
    } else {
        gridContainer.style.gridTemplateColumns = `repeat(${input},auto`;
        generateGrid(input);
    }
}

const gridContainer = document.querySelector(".grid-container");
const resetBtn = document.querySelector(".reset-btn");
let color = "#000";

generateGrid(16);

gridContainer.addEventListener("mouseover", onHover);
gridContainer.addEventListener("mousedown", onClick);
resetBtn.addEventListener("click", onReset);

color = "#ed11a9";