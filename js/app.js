document.getElementById('search-btn').addEventListener('click',
    function() {
     const city = document.getElementById('city-input').value;
     console.log('City entered:', city);
     // Additional code to fetch weather data will be added later
    });
    async function fetchWeatherData(city) {
        const apiKey = '248f2057f72245fde84d3e646a2a6ecb';
        const apiUrl
       =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
       apiKey}`;
        try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('Weather data:', data);
        // Additional code to update DOM with weather information
        } catch (error) {
        console.error('Error fetching weather data:', error);
        }
    }