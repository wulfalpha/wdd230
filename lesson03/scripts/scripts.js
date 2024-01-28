window.onload = function() {
    // Get the paragraphs in the colors section
    var colorParagraphs = document.getElementById('colors').getElementsByTagName('p');

    // Iterate over each paragraph
    for(let i = 0; i < colorParagraphs.length; ++i) {
        // Extract the color slug from the paragraph by splitting the text content on brackets and taking the second value
        let color = colorParagraphs[i].textContent.split('[')[1].split(']')[0];

        // Replace the slug with a span element containing the actual color
        colorParagraphs[i].innerHTML = colorParagraphs[i].textContent.replace('[' + color + ']', '<span style="background-color: #' + color + ';">&nbsp;&nbsp;&nbsp;</span>');
    }
};