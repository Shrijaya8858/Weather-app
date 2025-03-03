document.getElementById('search-btn').addEventListener('click', function () {
    const city = document.getElementById('city-input').value;
    fetchWeatherData(city);
});

async function fetchWeatherData(city) {
    const apiKey = '248f2057f72245fde84d3e646a2a6ecb';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        document.getElementById('city-name').textContent = `City: ${data.name}`;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('weather-description').textContent = `Weather: ${data.weather[0].description}`;
    } catch (error) {
        alert("Failed to fetch weather data.");
    }
}
