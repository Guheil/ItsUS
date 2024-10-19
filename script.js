// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Initialize Owl Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 1000, // Transition speed in milliseconds
        responsive: {
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    
    // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
        
        navLinks.forEach(link => {
            link.style.animation = '';
        });
    });
});

// Photo modal functions
function openModal(imgSrc) {
    var modal = document.getElementById("photoModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imgSrc;
    setTimeout(() => {
        modal.classList.add("show");
        modalImg.classList.add("show");
    }, 50);
}

function closeModal() {
    var modal = document.getElementById("photoModal");
    var modalImg = document.getElementById("modalImg");
    modal.classList.remove("show");
    modalImg.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    var modal = document.getElementById("photoModal");
    if (event.target == modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Make sure the body starts with opacity 0
    document.body.style.opacity = '0';
    
    // Show the loader overlay
    document.querySelector('.loader-overlay').style.opacity = '1';
    document.querySelector('.loader-overlay').style.visibility = 'visible';

    setTimeout(function() {
        // Hide the loader
        document.querySelector('.loader-overlay').style.opacity = '0';
        document.querySelector('.loader-overlay').style.visibility = 'hidden';
        
        // Show the main content
        document.body.style.opacity = '1';
    }, 600); // Adjust this value to control how long the animation plays
});

// Function to toggle fullscreen mode
function toggleFullscreen() {
    const modalImg = document.getElementById("modalImg");
    if (!document.fullscreenElement) {
        modalImg.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Function to play background audio
function playBackgroundAudio() {
    const audio = document.getElementById("background-audio");
    audio.volume = 0.2; // Set volume to 10% (adjust as needed)
    audio.play();
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    playBackgroundAudio();
});
