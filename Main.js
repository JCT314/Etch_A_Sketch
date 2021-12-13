function generateGrid(rows) {
    gridContainer.innerHTML = ``;
    gridContainer.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
    gridContainer.grid
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

function onClick(e) {
    e.preventDefault();
    const square = e.target.closest('.square');
    if(!square) return;
    square.style.backgroundColor = color;
}

const gridContainer = document.querySelector(".grid-container");
const currentColorDisplay = document.querySelector(".current-color-display");
currentColorDisplay.value = '#000';
const buttons = document.querySelectorAll('.menu-btn');
const colorButton = buttons[0];
const rainbowButton = buttons[1];
const eraseButton = buttons[2];
const clearButton = buttons[3];
const slider = document.querySelector('.slider');
const sliderDisplay = document.querySelector('.slider-display');
const menu = document.querySelector('.menu-container');
let color = "#000";
let isRainbow = false;
let isColor = true;
let isEraser = false;

generateGrid(16);

gridContainer.addEventListener("mouseover", onHover);
gridContainer.addEventListener("mousedown", onClick);
currentColorDisplay.addEventListener("change",(e) => {
    color = e.currentTarget.value;
});
slider.addEventListener("input", (e) => {
    const value = e.currentTarget.value;
    sliderDisplay.textContent = `${value} x ${value}`;
});
slider.addEventListener("change", (e) => {
    const value = e.currentTarget.value;
    generateGrid(value);
});
menu.addEventListener("click", (e) => {
    const menuBtn = e.target.closest('.menu-btn');
    if(!menuBtn) return;

    if(menuBtn !== clearButton) {
        buttons.forEach(button => {
            button.classList.remove('menu-btn--active');
        });
        menuBtn.classList.add('menu-btn--active');
    }
    
    isRainbow = isEraser = isColor = false;
    if(menuBtn === rainbowButton) {
        isRainbow = true;
    }
    if(menuBtn === colorButton) {
        isColor = true;
    }
    if(menuBtn === eraseButton) {
        isEraser = true;
    }
    if(menuBtn === clearButton) {
        generateGrid(slider.value);
    }
});