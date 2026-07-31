// SharkMod Auth System 🦈
// Uses localStorage to store ocean users

function signup() {
  const user = document.getElementById("newUser").value;
  const pass = document.getElementById("newPass").value;

  if (!user || !pass) {
    alert("🦈 Fill the ocean fields!");
    return;
  }

  const users = JSON.parse(localStorage.getItem("sharkUsers") || "{}");

  if (users[user]) {
    alert("🦈 That ocean name is already swimming!");
    return;
  }

  users[user] = pass;
  localStorage.setItem("sharkUsers", JSON.stringify(users));

  alert("🌊 Welcome to the ocean!");
  window.location.href = "signin.html";
}

function signin() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("sharkUsers") || "{}");

  if (users[user] === pass) {
    localStorage.setItem("sharkCurrentUser", user);
    alert("🦈 Dive successful!");
    window.location.href = "index.html";
  } else {
    alert("🌊 Wrong tide! Try again.");
  }
    }
