log = console.log;

// Select the div element with 'app' id
const app = document.getElementById('app');

// Create a new H1 element
const header = document.createElement('h1');

// Create a new text node for the H1 element
const headerContent = document.createTextNode(
    'Develop. Preview. Ship.',
);

// Append the text to the H1 element
header.appendChild(headerContent);

// Place the H1 element inside the div
app.appendChild(header);