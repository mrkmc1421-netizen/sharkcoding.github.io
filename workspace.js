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
// 🦈 SharkMod Snapping System

const SNAP_DISTANCE = 25;

// Check if two blocks are close enough to snap
function shouldSnap(blockA, blockB) {
  const a = blockA.getBoundingClientRect();
  const b = blockB.getBoundingClientRect();

  const dx = Math.abs(a.left - b.left);
  const dy = Math.abs(a.bottom - b.top);

  return dx < SNAP_DISTANCE && dy < SNAP_DISTANCE;
}

// Snap blockA under blockB
function snapBlock(blockA, blockB) {
  const b = blockB.getBoundingClientRect();

  blockA.style.left = b.left + "px";
  blockA.style.top = (b.bottom + 5) + "px";

  blockA.classList.add("ocean-glow");
}

// Check snapping on mouse release
document.addEventListener("mouseup", () => {
  if (!currentDrag) return;

  const blocks = workspace.querySelectorAll(".block");

  blocks.forEach(other => {
    if (other !== currentDrag && shouldSnap(currentDrag, other)) {
      snapBlock(currentDrag, other);
    }
  });

  currentDrag = null;
});
