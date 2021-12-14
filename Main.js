const gridContainer = document.querySelector(".grid-container");
const currentColorDisplay = document.querySelector(".current-color-display");
let color = "#000";
currentColorDisplay.value = color;
const buttons = document.querySelectorAll('.menu-btn');
const colorButton = buttons[0];
const rainbowButton = buttons[1];
const eraseButton = buttons[2];
const clearButton = buttons[3];
const slider = document.querySelector('.slider');
const sliderDisplay = document.querySelector('.slider-display');
const menu = document.querySelector('.menu-container');
let isRainbow = false;
let isColor = true;
let isEraser = false;

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

function colorSquare(square) {
    if(isColor) {
        square.style.backgroundColor = color;
    }
    if(isRainbow) {
        const r = Math.floor(Math.random() * 256);
        const g= Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
    if(isEraser) {
        square.style.backgroundColor = '#ddd';
    }
}

function onMouseOver(e) {
    const square = e.target.closest('.square');
    if(!square) return;
    if(e.buttons !== 1) return;
    colorSquare(square);
}

function onMouseDown(e) {
    e.preventDefault();
    const square = e.target.closest('.square');
    if(!square) return;
    colorSquare(square);
}

function onColorDisplayChange(e) {
    color = e.currentTarget.value;
}

function onInput(e) {
    const value = e.currentTarget.value;
    sliderDisplay.textContent = `${value} x ${value}`;
}

function onSliderChange(e) {
    const value = e.currentTarget.value;
    generateGrid(value);
}

function onClick(e) {
    const menuBtn = e.target.closest('.menu-btn');
    if(!menuBtn) return;

    if(menuBtn !== clearButton) {
        buttons.forEach(button => {
            button.classList.remove('menu-btn--active');
        });
        menuBtn.classList.add('menu-btn--active');
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
    } else {
        generateGrid(slider.value);
    }
}

generateGrid(16);

gridContainer.addEventListener("mouseover", onMouseOver);
gridContainer.addEventListener("mousedown", onMouseDown);
currentColorDisplay.addEventListener("change",onColorDisplayChange);
slider.addEventListener("input", onInput);
slider.addEventListener("change", onSliderChange);
menu.addEventListener("click", onClick);