
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


//function for the avtive links 
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

