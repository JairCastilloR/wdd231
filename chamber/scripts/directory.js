const directoryEl = document.getElementById("directory");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");
const filterSelect = document.getElementById("filter");
const page = document.body;

async function loadMembers() {
  const res = await fetch("./data/members.json");
  const members = await res.json();
  renderMembers(members);
}

function renderMembers(members) {
  directoryEl.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("article");
    card.classList.add("member");
    card.dataset.membership = member.membership;

    card.innerHTML = `
  <img src="${member.image}" alt="${member.name}">
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

function setView(mode) {
  if (mode === "list") {
    page.classList.add("list-view");
  } else {
    page.classList.remove("list-view");
  }
}

gridBtn.addEventListener("click", () => setView("grid"));
listBtn.addEventListener("click", () => setView("list"));

loadMembers();
