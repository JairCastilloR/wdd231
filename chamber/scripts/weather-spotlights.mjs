
const apiKey = "aaddd3c5f12b6cb13af88683e27b237d";

const lat = -6.7714; 
const lon = -79.8409;


const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;


async function loadCurrentWeather() {
  try {
    const response = await fetch(currentURL);
    const data = await response.json();

    document.getElementById("current-temp").textContent =
      `${data.main.temp.toFixed(0)}°F`;

    document.getElementById("current-desc").textContent =
      data.weather[0].description;

    document.getElementById("high-low").textContent =
      `High: ${data.main.temp_max.toFixed(0)}°F | Low: ${data.main.temp_min.toFixed(0)}°F`;

    document.getElementById("humidity").textContent =
      `Humidity: ${data.main.humidity}%`;

    document.getElementById("sunrise").textContent =
      `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;

    document.getElementById("sunset").textContent =
      `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;

    const icon = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.getElementById("weather-icon").src = iconURL;

  } catch (err) {
    console.error("Error loading current weather:", err);
  }
}




async function loadForecast() {
  try {
    const response = await fetch(forecastURL);
    const data = await response.json();

 
    const indices = [8, 16, 24];
    const labels = ["Tomorrow", "In 2 Days", "In 3 Days"];

    let html = "";

    indices.forEach((i, idx) => {
      const entry = data.list[i];
      const temp = entry.main.temp.toFixed(0);
      html += `<p>${labels[idx]}: <strong>${temp}°F</strong></p>`;
    });

    document.getElementById("forecast").innerHTML = html;

  } catch (err) {
    console.error("Error loading forecast:", err);
  }
}

async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const json = await fetch("data/members.json").then(res => res.json());

   
    const premium = json.members.filter(m =>
      m.membership === "Gold" || m.membership === "Silver"
    );

 
    const shuffled = premium.sort(() => 0.5 - Math.random());

  
    const total = Math.random() > 0.5 ? 3 : 2;
    const selected = shuffled.slice(0, total);

    const container = document.getElementById("spotlight-container");
    container.innerHTML = "";

    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight");

      card.innerHTML = `
        <img src="${member.logo}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p><strong>${member.membership}</strong></p>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    console.error("Error loading spotlights:", err);
  }
}

loadCurrentWeather();
loadForecast();
loadSpotlights();
