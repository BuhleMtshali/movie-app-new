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



//function for the active links 
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.middle-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            //removing the active class
            navLinks.forEach(link => link.classList.remove('active'));

            //Adding the Active class to the clicked link
            this.classList.add('active')
        })
    })
})

