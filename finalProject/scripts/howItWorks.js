fetch('./data/howItWorks.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('stepsContainer');

    container.innerHTML = data.map(step => `
      <div class="step-card">
        <div class="step-number">${step.number}</div>

        <h3 class="step-title">${step.title}</h3>
        <p class="step-text">${step.text}</p>

        <div class="step-badge">${step.badge}</div>
      </div>
    `).join('');
  })
  .catch(err => console.error('Error loading steps:', err));
