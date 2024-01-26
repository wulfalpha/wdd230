const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

// Assuming you have a way to calculate or get site visits
let visits = getSiteVisits(); // Your function to get the number of site visits

// Get the p tag element
let pTag = document.querySelector('p');

// If pTag and visits are valid
if (pTag && visits) {
    // Update the [visits] inside the p tag with the actual visits
    pTag.innerHTML = pTag.innerHTML.replace('[visits]', visits);
}

window.onload = function() {
    const rightsSection = document.querySelector("#rights");
    const paragraphs = rightsSection.querySelectorAll("p");

    // Set the date
    const now = new Date();
    const dateString = now.toLocaleString();
    paragraphs[1].textContent = `Last modified: ${dateString}`;

    // Set the flag
    const usFlag = "\uD83C\uDDFA\uD83C\uDDF8";
    paragraphs[2].textContent = `United States ${usFlag}`;
}