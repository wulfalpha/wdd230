const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const darkmodeBtn = document.querySelector('#darkModeBtn');
const ctaButton = document.querySelector('.cta-button');


// Event listener for hamburger menu
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Event listener for 'Dark Mode' button
darkmodeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
});

// Event listener for 'Call To Action' button
ctaButton.addEventListener('click', () => {
    // Handle click event for 'Join chamber'
    joinMember(); // Assuming you have a function for this action
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

function joinMember() {
    // Logic for joining member goes here
    console.log("Joining member...");
}

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
let galleryImageElement = document.querySelector('#gallery .poi img');
let galleryImageIndex = 0;
let galleryImages = ["poi_mall.webp", "poi_1.webp", "poi_convention.webp", "poi_frontrunner.webp", "poi_library.webp", "poi_mainstreet.webp", "poi_museum.webp"] // Add all gallery image file names here

setInterval(() => {
    galleryImageIndex = (galleryImageIndex + 1) % galleryImages.length;  // Increment the index and wrap around to 0 if it's larger than image count
    galleryImageElement.src = "images/" + galleryImages[galleryImageIndex];  // Change image source
}, 2000);
window.onload = function() {
    let visitMessageElement = document.querySelector('.visit');

    let lastVisitTime = localStorage.getItem('lastVisitTime');
    let currentTime = new Date().getTime();

    if (lastVisitTime === null) {
        visitMessageElement.textContent = 'Welcome! Let us know if you have any questions.';
    } else {
        let timeDifference = ((currentTime - lastVisitTime) / (1000 * 60 * 60 * 24)); // In days

        if (timeDifference < 1) {
            visitMessageElement.textContent = 'Back so soon! Awesome!';
        } else {
            let days = Math.round(timeDifference)
            visitMessageElement.textContent = `Welcome back! You last visited ${days} day(s) ago.`;
        }
    }

    localStorage.setItem('lastVisitTime', currentTime);
};