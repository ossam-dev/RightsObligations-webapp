// Assuming d3 is already included in your index.html

document.addEventListener('DOMContentLoaded', function() {
    fetch('data/output.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log to see the structure
        // Process the data to fit the matrix format required for the chord diagram
        // Then, generate the chord diagram
    })
    .catch(error => console.error('Error loading the data: ', error));
});

