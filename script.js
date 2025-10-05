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
