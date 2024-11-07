// search.js

function performSearch() {
    // Get the search input value
    const query = document.getElementById('search-input').value.trim();

    // Check if there's a search term
    if (query) {
        // Display the search term (for testing purposes)
        alert('You searched for: ' + query);

        // Redirect to a search results page or perform other actions
        // Uncomment the line below and replace with your search results page
        // window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
    } else {
        alert("Please enter a search term.");
    }
}
