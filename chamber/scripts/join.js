document.addEventListener("DOMContentLoaded", () => {

  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }

  const form = document.querySelector(".join-form");

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const level = card.dataset.level;
      const modal = document.getElementById(`modal-${level}`);
      if (modal) modal.style.display = "flex";
    });
  });

  document.querySelectorAll(".close-modal").forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      if (modal) modal.style.display = "none";
    });
  });

});
