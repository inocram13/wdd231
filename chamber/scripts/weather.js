async function fetchWeather() {
    try {
        // Example API request (replace with your actual API and key)
        const apiKey = '2ed35afebf26a75b72e060b3991275f8';
        const city = 'Manila';  // Change this to the desired city
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        // Extract weather icon code (from OpenWeatherMap API)
        const weatherIconCode = data.weather[0].icon;  // Example: "10d"
        
        // Construct the icon URL dynamically
        const iconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}.png`;

        // Set the weather icon
        document.getElementById('weather-icon').src = iconUrl;

        // Display other weather data
        document.getElementById('city-name').textContent = data.name;
        document.getElementById('current-temp').textContent = `${data.main.temp}°C`;
        document.getElementById('weather-desc').textContent = data.weather[0].description;
        document.getElementById('high-temp').textContent = `${data.main.temp_max}°C`;
        document.getElementById('low-temp').textContent = `${data.main.temp_min}°C`;
        document.getElementById('humidity').textContent = `${data.main.humidity}%`;
        document.getElementById('sunrise').textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById('sunset').textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Call the function to fetch and display the weather
fetchWeather();
