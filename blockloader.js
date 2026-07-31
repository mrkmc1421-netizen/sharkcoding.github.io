// SharkMod Block Loader 🦈

const scratchBlocks = [
  "move 10 steps", "turn 15 degrees", "go to x:y",
  "say [message]", "switch costume", "change size",
  "when flag clicked", "repeat [10]", "forever",
  "if [condition] then", "wait [1] seconds",
  "touching [sprite]?", "mouse x", "mouse y",
  "join [a] [b]", "pick random [1] [10]",
  "set variable [v] to [value]",
  "broadcast [msg]", "stop all",
  // ... add until you reach 30–63
];

const turbowarpBlocks = [
  "warp block", "set turbo mode", "high precision wait",
  "clone limit", "project fps", "runtime memory",
  "custom js", "eval code", "fetch url",
  "read file", "write file",
  // ... add until you reach 40
];

const penguinBlocks = [
  "advanced list push", "list remove index",
  "cloud write", "cloud read",
  "math sin", "math cos", "math tan",
  "json encode", "json decode",
  "fetch api", "promise wait",
  // ... add until you reach 20
];

const sharkBlocks = [
  "shark sense [target]",
  "bite [sprite] with force [n]",
  "current push [dir] [power]",
  "deepsea glow [level]"
];

function loadBlocks() {
  const palette = document.getElementById("blocks");

  function addBlock(name) {
    const div = document.createElement("div");
    div.className = "block";
    div.innerText = name;
    palette.appendChild(div);
  }

  scratchBlocks.forEach(addBlock);
  turbowarpBlocks.forEach(addBlock);
  penguinBlocks.forEach(addBlock);
  sharkBlocks.forEach(addBlock);
}

loadBlocks();
