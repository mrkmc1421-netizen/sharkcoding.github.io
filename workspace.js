// SharkMod Workspace 🦈🌊
// Basic drag-and-drop block system

const workspace = document.getElementById("workspace");
let currentDrag = null;
let offsetX = 0;
let offsetY = 0;

function makeBlockInstance(text) {
  const div = document.createElement("div");
  div.className = "block";
  div.innerText = text;

  div.style.position = "absolute";
  div.style.left = "40px";
  div.style.top = "120px";

  div.addEventListener("mousedown", (e) => {
    currentDrag = div;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  });

  workspace.appendChild(div);
}

document.addEventListener("mousemove", (e) => {
  if (currentDrag) {
    currentDrag.style.left = (e.pageX - offsetX) + "px";
    currentDrag.style.top = (e.pageY - offsetY) + "px";
  }
});

document.addEventListener("mouseup", () => {
  currentDrag = null;
});

// When clicking a palette block, clone it into workspace
function enablePaletteCloning() {
  const palette = document.getElementById("blocks");
  const items = palette.querySelectorAll(".block");

  items.forEach(item => {
    item.addEventListener("click", () => {
      makeBlockInstance(item.innerText);
    });
  });
}

enablePaletteCloning();
