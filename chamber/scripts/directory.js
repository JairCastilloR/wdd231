const directoryEl = document.getElementById("directory");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");
const page = document.body;

// =============== LOAD MEMBERS ===================
async function loadMembers() {
  try {
    const res = await fetch("./data/members.json");
    if (!res.ok) throw new Error("We can't load members.json");

    const members = await res.json();
    renderMembers(members);

  } catch (err) {
    console.error("Error cargando miembros:", err);
  }
}

// =============== RENDER MEMBERS ===================
function renderMembers(members) {
  directoryEl.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("article");
    card.classList.add("member");
    card.dataset.membership = member.membership;

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}" loading="lazy">
      <div class="member-info">
        <h3>${member.name}</h3>
        <p class="desc">${member.description}</p>
        <p class="addr">${member.address}</p>
        <p class="phone">${member.phone}</p>
        <a href="${member.website}" target="_blank">Sitio web</a>
      </div>
    `;

    directoryEl.appendChild(card);
  });
}

// =============== VIEW MODE SWITCH ===================
function setView(mode) {
  if (mode === "list") {
    page.classList.add("list-view");
    gridBtn.classList.remove("active");
    listBtn.classList.add("active");
  } else {
    page.classList.remove("list-view");
    listBtn.classList.remove("active");
    gridBtn.classList.add("active");
  }
}

// Buttons
gridBtn.addEventListener("click", () => setView("grid"));
listBtn.addEventListener("click", () => setView("list"));

// Start
loadMembers();
