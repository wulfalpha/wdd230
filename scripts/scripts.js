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
    window.onload = function() {
        const rightsSection = document.querySelector("#rights");
        const paragraphs = rightsSection.querySelectorAll("p");
        const now = new Date();
        const dateString = now.toLocaleString();
        paragraphs[1].textContent = `Last modified: ${dateString}`;
    }

    let pTag = document.querySelector('.card p'); // More precise selection of p tag
    if(pTag && visits) {
        pTag.innerHTML = pTag.innerHTML.replace('[visits]', visits);
    }
});