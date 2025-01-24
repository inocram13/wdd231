const apiKey = "2ed35afebf26a75b72e060b3991275f8";
const lat = 14.3372;
const lon = 120.8533;

async function getWeather() {
    try {
        // Fetch current weather
        const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
        );
        const weatherData = await weatherResponse.json();

        // Fetch 3-day forecast
        const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
        );
        const forecastData = await forecastResponse.json();

        // Update current weather
        document.getElementById("city-name").textContent = weatherData.name;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        document.getElementById("weather-icon").alt = weatherData.weather[0].description;
        document.getElementById("current-temp").textContent = `${Math.round(weatherData.main.temp)}°F`;
        document.getElementById("weather-desc").textContent = weatherData.weather[0].description;
        document.getElementById("high-temp").textContent = `${Math.round(weatherData.main.temp_max)}°F`;
        document.getElementById("low-temp").textContent = `${Math.round(weatherData.main.temp_min)}°F`;
        document.getElementById("humidity").textContent = `${weatherData.main.humidity}%`;
        document.getElementById("sunrise").textContent = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById("sunset").textContent = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();

        // Update 3-day forecast
        const forecastElements = document.getElementById("forecast").children;
        for (let i = 0; i < 3; i++) {
            const dayForecast = forecastData.list[i * 8]; // 8 items per day
            const date = new Date(dayForecast.dt * 1000);
            forecastElements[i].textContent = `${date.toLocaleDateString("en-US", { weekday: "long" })}: ${Math.round(dayForecast.main.temp)}°F`;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Call the function on page load
getWeather();
