// Simplified query selector <-- ADD THIS
function select(selector) {
    return document.querySelector(selector);
}

// Simplified event attaching <-- ADD THIS
function on(element, event, handler) {
    element.addEventListener(event, handler);
}

// Event handlers for specific elements <-- ADD THIS
const handlers = {
    '#ham-menu': () => {
        select('.navigation').classList.toggle('open');
        select('#ham-menu').classList.toggle('open');
    },
    '#darkModeBtn': () => {
        document.body.classList.toggle('dark-mode');
    },
    '.cta-button': () => joinMember(),
    '.gridify #grid': () => displayMembers('grid'),
    '.gridify #list': () => displayMembers('block'),
};

// Apply event handlers <-- ADD THIS
function applyHandlers() {
    Object.entries(handlers).forEach(([selector, handler]) => {
        on(select(selector), 'click', handler);
    });
}

// Function for member joining <-- ADD THIS
function joinMember() {
    console.log("Joining member...");
}

// Function for displaying members <-- ADD THIS
function displayMembers(displayType) {
    const membersSection = select('.members');
    membersSection.style.display = displayType;
    Array.from(membersSection.children).forEach(child => {
        child.style.width = displayType === 'grid' ? "auto" : "100%";

        // For grid layout, define columns
        if(displayType === "grid") {
            membersSection.style.gridTemplateColumns = "repeat(3, 1fr)";
        }
    });
}

// Call applyHandlers function after ensuring the DOM is completely loaded <-- ADD THIS
document.addEventListener("DOMContentLoaded", applyHandlers);

!function(d,s,id){let js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

// Assuming you have a way to calculate or get site visits
let visits = 123; // Placeholder for visits

document.addEventListener('DOMContentLoaded', () => {
    const rightsSection = select("#rights");
    const paragraphs = rightsSection.querySelectorAll("p");
    const now = new Date();
    const dateString = now.toLocaleString();
    paragraphs[1].textContent = `Date and Time: ${dateString}`;
    select("[data-modified-date]").textContent = document.lastModified;

    let pTag = select('.card p'); // More precise selection of p tag
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
        select('#forecast').textContent = `Forecast: ${forecast}`;
        select('#windchill').textContent = `Wind Chill: ${windchill.toFixed(2)}°F`;
    })
    .catch(error => {
        console.error('Error:', error);
    });

let galleryImageElement = select('#gallery .poi img');
let galleryImageIndex = 0;
let galleryImages = ["poi_mall.webp", "poi_1.webp", "poi_convention.webp", "poi_frontrunner.webp", "poi_library.webp", "poi_mainstreet.webp", "poi_museum.webp"] // Add all gallery image file names here

setInterval(() => {
    galleryImageIndex = (galleryImageIndex + 1) % galleryImages.length;  // Increment the index and wrap around to 0 if it's larger than image count
    galleryImageElement.src = "images/" + galleryImages[galleryImageIndex];  // Change image source
}, 2000);

window.onload = function() {
    let visitMessageElement = select('.visit');

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
    let visitField = select('input[name="visit"]');
    visitField.value = Date.now();
};

// Fetch members.json data
fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
        const membersSection = select('.members');
        let membersData = "";
        for (let member in data.Members) {
            membersData += `
                <div class="member">
                    <h2>${data.Members[member].name}</h2>
                    <p>${data.Members[member].position}</p>
                    <a href="mailto:${data.Members[member].email}">${data.Members[member].email}</a>
                </div>
            `
        }
        membersSection.innerHTML = membersData;
    });