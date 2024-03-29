// scripts.js

// Check if user has visited before
let visited = localStorage.getItem("visited");
window.onload = function () { if (visited !== "yes") { localStorage.setItem("visited", "yes"); } };
