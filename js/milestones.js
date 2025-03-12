// Scroll to top functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");


// Function to handle showing or hiding the scroll-to-top button
const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};


// Attach an event handler to the window's scroll event
window.addEventListener('scroll', scrollFunction);


// Ensure the button is hidden initially
scrollFunction();


// Add a click event listener to the scroll-to-top button
scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// Achievements Section
// Cards hover effect
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card'); // Select all card elements


    cards.forEach(card => {
        // Add mouseenter event listener to each card
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)'; // Enlarge the card
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.8)'; // Add shadow to the card
            this.style.transition = 'transform 0.3s, box-shadow 0.3s'; // Smooth transition
        });


        // Add mouseleave event listener to each card
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)'; // Reset card size
            this.style.boxShadow = 'none'; // Remove shadow
        });
    });
});


// Image profile hover effect for dimming
document.addEventListener('DOMContentLoaded', function() {
    // Select the image elements
    const images = document.querySelectorAll('.rounded-circle.image-profile');


    // Function to handle mouse enter (hover) event
    function handleMouseEnter() {
        this.style.opacity = '0.5'; // Set opacity to make it dimmer
    }

    
    // Function to handle mouse leave (hover out) event
    function handleMouseLeave() {
        this.style.opacity = '1'; // Reset opacity to original
    }


    // Add event listeners for each image
    images.forEach(image => {
        image.addEventListener('mouseenter', handleMouseEnter);
        image.addEventListener('mouseleave', handleMouseLeave);
    });
});


// Future Plans Section
// Images hover effect
document.querySelectorAll('.hover-effect').forEach(img => {
    // Add mouseover event listener to each image
    img.addEventListener('mouseover', () => {
        img.style.opacity = '0.5'; // Dim the image
    });
    // Add mouseout event listener to each image
    img.addEventListener('mouseout', () => {
        img.style.opacity = '1'; // Reset the opacity
    });
});