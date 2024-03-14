async function getWeatherData() {

    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.750000&lon=6.633333&appid=5a0d88a901126cc81d618d978ab200cb';

    const response = await fetch(url);
    const data = await response.json();

    displayResults(data);
}

function displayResults(data){
    // Kelvin to Celsius conversion
    const temperature = data.main.temp - 273.15;
    const description = data.weather[0].description;
    const iconUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');

    currentTemp.textContent = temperature.toFixed(2);
    weatherIcon.src = iconUrl;
    captionDesc.textContent = description;
}

// Call function
getWeatherData();