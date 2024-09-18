let state = 1;

function Mode() {
    let button = document.getElementById('mode-changer');
    let body = document.getElementById('body');
    let nav = document.getElementById('navigation');
    let searchbar = document.getElementById('search-bar');
    let logo = document.getElementById('logo'); // Assuming logo is an <img> tag
    let cards = document.getElementsByClassName('card')

    if (state === 1) {
        state = 0;
        body.style.backgroundColor = "#FEFCF3"; // Light mode background color
        nav.style.backgroundColor = "#F5EBE0";
        searchbar.style.backgroundColor = "#FEFCF3";
        logo.src = "Images/Palestine Logo Dark.png"; // Correctly setting the src attribute
        searchbar.style.color = "black";
        cards.style.backgroundColor = "#F5EBE0"; // Card background color in light mode
        button.innerHTML = 'Dark Mode'; // Button text to switch to dark mode
    } else {
        state = 1;
        body.style.backgroundColor = "#181C14"; // Dark mode background color
        nav.style.backgroundColor = "#3C3D37";
        searchbar.style.backgroundColor = "#697565";
        logo.src = "Images/Palestine Logo.png"; // Correctly setting the src attribute
        searchbar.style.color = "white";
        cards.style.backgroundColor = "#3C3D37"; // Card background color in dark mode
        button.innerHTML = 'Light Mode'; // Button text to switch to light mode
    }
}
