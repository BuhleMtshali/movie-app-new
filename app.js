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


// CREATING A FUNCTION FOR THE MOVIES/SERIES SLIDESHOW
let slideIndex = 1;
window.plusSlides = plusSlides;
window.currentSlide = currentSlide;
showSlides(slideIndex);

// next/previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('slideshow');
    let dots = document.getElementsByClassName('demo');
    let captionText = document.getElementById('caption');


    if(n > slides.length){
        slideIndex = 1
    }

    if(n < 1){
        slideIndex = slides.length
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt
}