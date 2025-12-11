fetch('data/benefits.json')
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById('benefitsGrid');

    grid.innerHTML = data.map(item => `
      <div class="benefit-card">
        <div class="icon-box">${item.icon}</div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-text">${item.text}</p>
      </div>
    `).join('');
  })
  .catch(err => console.error('Error loading benefits:', err));
