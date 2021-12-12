const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset-btn");

function generateGrid(rows) {
    for(let i = 0; i < rows*rows; i++) {
        const box = document.createElement("div");
        box.classList.add('square');
        container.appendChild(box);
    }
}

function onHover(e) {
    const square = e.target.closest('.square');
    if(!square) return;
    if(e.buttons !== 1) return;
    square.style.backgroundColor = 'black';
}

function onClick(e) {
    const square = e.target.closest('.square');
    if(!square) return;
    square.style.backgroundColor = 'black';
}

function onReset(e) {
    container.innerHTML = ``;
    const input = Number(prompt("Enter new size"));
    if(!input) {
        alert("Must be a number");
    } else if(input < 1 || input > 100) {
        alert("Number must be between 1 and 100!");
    } else {
        container.style.gridTemplateColumns = `repeat(${input},auto`;
        generateGrid(input);
    }
}

generateGrid(16);

container.addEventListener("mouseover", onHover);
container.addEventListener("mousedown",onClick);
resetBtn.addEventListener("click", onReset);