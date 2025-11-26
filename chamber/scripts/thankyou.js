document.addEventListener("DOMContentLoaded", () => {

  const count = Number(localStorage.getItem("reviewCount")) || 0;
  const reviewsCountElement = document.getElementById("reviewsCount");

  if (reviewsCountElement) {
    reviewsCountElement.textContent = `Total Reviews Submitted: ${count}`;
  }

  const params = new URLSearchParams(window.location.search);

  const fields = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "orgName",
    "timestamp"
  ];

  fields.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = params.get(id) || "(not provided)";
    }
  });
});
