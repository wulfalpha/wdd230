const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

// Assuming you have a way to calculate or get site visits
let visits = 123; // Placeholder for visits

document.addEventListener('DOMContentLoaded', () => {
    const rightsSection = document.querySelector("#rights");
    const paragraphs = rightsSection.querySelectorAll("p");
    const now = new Date();
    const dateString = now.toLocaleString();
    paragraphs[1].textContent = `Date and Time: ${dateString}`;
    document.querySelector("[data-modified-date]").textContent = document.lastModified;

    let pTag = document.querySelector('.card p'); // More precise selection of p tag
    if(pTag && visits) {
        pTag.innerHTML = pTag.innerHTML.replace('[visits]', visits);
    }
});
// Weather.gov API endpoint
const API_URL = 'https://api.weather.gov/gridpoints/SLC/101,158/forecast';

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const firstPeriod = data.properties.periods[0];
        const forecast = firstPeriod.detailedForecast;
        const temp = firstPeriod.temperature;
        // Extract number from windSpeed string like "7 mph"
        const windSpeed = parseInt(firstPeriod.windSpeed.split(' ')[0]);

        const windchill = calculateWindChill(temp, windSpeed);

        // Update forecast and windchill elements
        document.getElementById('forecast').textContent = `Forecast: ${forecast}`;
        document.getElementById('windchill').textContent = `Wind Chill: ${windchill.toFixed(2)}°F`;
    })
    .catch(error => {
        console.error('Error:', error);
    });