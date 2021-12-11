const container = document.querySelector(".container");

for(let i = 0; i < 16*16; i++) {
    const box = document.createElement("div");
    box.classList.add('square');
    container.appendChild(box);
}

function onHover(e) {
    const square = e.target.closest('.square');
    if(!square) return;
    square.style.backgroundColor = 'black';
}

container.addEventListener("mouseover", onHover);