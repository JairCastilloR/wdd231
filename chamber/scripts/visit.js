const messageBox = document.getElementById("visitMessage");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  messageBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diff = now - Number(lastVisit);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days < 1) {
    messageBox.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    messageBox.textContent = "You last visited 1 day ago.";
  } else {
    messageBox.textContent = `You last visited ${days} days ago.`;
  }
}

localStorage.setItem("lastVisit", now.toString());
