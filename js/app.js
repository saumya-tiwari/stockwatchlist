// Function to handle adding stock to the watchlist
function addToWatchlist() {
    const inputElement = document.getElementById('search-input');
    const symbol = inputElement.value.trim().toUpperCase();
    
    // Validate if the input is not empty
    if (symbol === '') {
        alert('Please enter a valid stock symbol.');
        return;
    }

    // Clear the input field
    inputElement.value = '';

    // Create a new list item and add it to the watchlist
    const watchlist = document.getElementById('watchlist');
    const listItem = document.createElement('li');
    listItem.textContent = symbol;
    watchlist.appendChild(listItem);
}

// Event listener for the add button
document.getElementById('add-button').addEventListener('click', addToWatchlist);

// Event listener for the enter key in the input field
document.getElementById('search-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addToWatchlist();
    }
});
