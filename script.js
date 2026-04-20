const display = document.getElementById("display");
const bg = document.getElementById("bg");

// Calculator functions
function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// 3D floating cubes background
for (let i = 0; i < 20; i++) {
    let cube = document.createElement("div");
    cube.classList.add("cube");

    cube.style.left = Math.random() * 100 + "vw";
    cube.style.animationDuration = (5 + Math.random() * 10) + "s";
    cube.style.opacity = Math.random();

    bg.appendChild(cube);
}
