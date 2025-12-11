fetch('./data/requirements.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('requirementsGrid');
    const ideal = document.getElementById('idealList');

    // Cards
    grid.innerHTML = data.cards.map(card => `
      <div class="requirement-card">
        <div class="req-header">
          <div class="req-icon">${card.icon}</div>
          <h3 class="req-title">${card.title}</h3>
        </div>
        <ul class="req-list">
          ${card.items.map(item => `<li>○ ${item}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    // Ideal Partner
    ideal.innerHTML = data.idealPartner.map(item => `
      <div class="ideal-item">★ ${item}</div>
    `).join('');
  })
  .catch(err => console.error('Error loading requirements:', err));
