// Toggle Dark Mode
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Auto-enhance image contrast when page loads
window.addEventListener("load", () => {
  document.querySelectorAll("img").forEach(img => {
    img.style.filter = "contrast(1.1) brightness(1.05)";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const greeting = document.createElement("p");

  const hour = new Date().getHours();
  let message = "Welcome to Empower Together!";

  if (hour < 12) {
    message = "Good morning! " + message;
  } else if (hour < 18) {
    message = "Good afternoon! " + message;
  } else {
    message = "Good evening! " + message;
  }

  greeting.textContent = message;
  greeting.style.fontStyle = "italic";
  greeting.style.textAlign = "center";
  greeting.style.marginTop = "10px";
  greeting.style.color = "#333";

  header.appendChild(greeting);
});
