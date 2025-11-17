const directoryEl = document.getElementById("directory");

async function loadSpotlight() {
  try {
    const res = await fetch("./data/members.json");
    if (!res.ok) throw new Error("We can't load members.json");

    const members = await res.json();
    const spotlight = members.slice(0, 3);

    renderSpotlight(spotlight);
  } catch (err) {
    console.error("Error spotlight:", err);
  }
}

function renderSpotlight(members) {
  directoryEl.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("article");
    card.classList.add("member");

    card.innerHTML = `
      <div class="member-header">
        <h3>${member.name}</h3>
        <p class="member-tagline">${member.description}</p>
      </div>

      <div class="member-content">
        <img src="${member.image}" alt="${member.name}" loading="lazy">

        <div class="member-info">
          <p><strong>ADDRESS:</strong> ${member.address}</p>
          <p><strong>PHONE:</strong> ${member.phone}</p>
          <p><strong>URL:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        </div>
      </div>
    `;

    directoryEl.appendChild(card);
  });
}


loadSpotlight();
