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