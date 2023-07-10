const body = document.querySelector("body");
const container = document.createElement("div");
body.style.background = "#000";

body.appendChild(container);
body.setAttribute(
  "style",
  "display:flex; align-items:center; justify-content:center; flex-direction:column; gap:1.5rem; width:100vw; height:100vh; background:#000;"
);

container.setAttribute(
  "style",
  "background:#000; display: grid; width:600px; height:600px; border:2px solid yellow; border-radius:15px"
);

function setGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}.1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridBoxes = document.createElement("div");
    gridBoxes.style.userSelect = "none";
    gridBoxes.style.border = ".5px solid #fff";
    gridBoxes.addEventListener("mouseover", changeColor);
    gridBoxes.addEventListener("mousedown", changeColor);
    container.appendChild(gridBoxes);
  }
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let mode = "rainbow";
function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (mode === "rainbow") {
    let colorR = Math.floor(Math.random() * 256);
    let colorB = Math.floor(Math.random() * 256);
    let colorG = Math.floor(Math.random() * 256);
    e.target.style.background = `rgb(${colorR}, ${colorB}, ${colorG})`;
  } else if (mode === "clear") {
    e.target.style.background = "red";
  }
}

setGrid(50);
