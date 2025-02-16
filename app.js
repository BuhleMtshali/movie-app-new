//Variables



//Adding an event listner to the logo div
document.getElementById('logo').addEventListener('click', function() {
    location.reload()
})

//function for showing the input bar
document.getElementById('submit-btn').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input');
    searchInput.classList.toggle('visible');

    if(searchInput.classList.contains('visible')){
        searchInput.focus(); //focus on the input when it appears
    }
})

//responsive navbar
document.getElementById('toggle-btn').addEventListener('click', () => {
    const middNavBar = document.getElementById('middle-nav');
    const searchBar = document.getElementById('search-icon-container');

    //if btn is clicked
    middNavBar.classList.toggle('responsive')
    searchBar.classList.toggle('responsive-search');
})



