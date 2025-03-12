// Scroll to top functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn"); // Get the scroll-to-top button element


// Function to handle showing or hiding the scroll-to-top button
const scrollFunction = () => {
    // Check if the page has been scrolled down more than 20 pixels
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block"; // Show the button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide the button
    }
};


// Attach an event handler to the window's scroll event to call scrollFunction
window.addEventListener('scroll', scrollFunction);


// Ensure the button is hidden initially if the page is not scrolled
scrollFunction();


// Add a click event listener to the scroll-to-top button
scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0; // Scroll to the top for Safari
    document.documentElement.scrollTop = 0; // Scroll to the top for Chrome, Firefox, IE, and Opera
});


// Hover effect for age and gender options
document.addEventListener('DOMContentLoaded', function () {
    const labels = document.querySelectorAll('.btn-group .btn');

    labels.forEach(label => {
        label.addEventListener('mouseover', function () {
            this.classList.add('bg-primary', 'text-white');
        });

        label.addEventListener('mouseout', function () {
            this.classList.remove('bg-primary', 'text-white');
        });
        
        label.addEventListener('mouseover', function () {
            this.classList.add('bg-secondary', 'text-white');
        });

        label.addEventListener('mouseout', function () {
            this.classList.remove('bg-secondary', 'text-white');
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
// Get the form, progress bar, and form elements
    const form = document.getElementById("messageForm");
    const progressBar = document.querySelector(".progress-bar");
    const formElements = form.querySelectorAll("input, select, textarea");
    const genderElements = form.querySelectorAll('input[name="gender"]');
    const photoUploadElement = form.querySelector('#uploadPhoto');


// Function to update the progress bar based on filled form elements
    // Count filled elements excluding gender and photo upload elements
    function updateProgressBar() {
        let filledElements = 0;
        formElements.forEach(element => {
            if (!Array.from(genderElements).includes(element) && element !== photoUploadElement) {
                if ((element.type === "radio" || element.type === "checkbox") && element.checked) {
                    filledElements++;
                } else if (element.type !== "radio" && element.type !== "checkbox" && element.value) {
                    filledElements++;
                }
            }
        });


    // Calculate the total number of unique elements to be filled
        let totalElements = Array.from(formElements).filter(element => {
            if (!Array.from(genderElements).includes(element) && element !== photoUploadElement) {
                if (element.type === "radio") {
                    return element.name;
                }
                return true;
            }
        }).reduce((unique, item) => {
            return unique.includes(item.name) ? unique : [...unique, item.name];
        }, []).length;


    // Calculate and update the progress bar width
        const progressPercentage = (filledElements / totalElements) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressBar.setAttribute("aria-valuenow", progressPercentage);
    }


    // Function to reset the progress bar to 0%
    function resetProgressBar() {
        progressBar.style.width = "0%";
        progressBar.setAttribute("aria-valuenow", 0);
    }


    // Function to clear the form and reset the progress bar
    function clearForm() {
        form.reset();
        resetProgressBar();
    }


    // Add event listeners to radio buttons to update the progress bar on change
    form.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', updateProgressBar);
    });


    // Add event listeners to form elements to update the progress bar on input or change
    formElements.forEach(element => {
        element.addEventListener('input', updateProgressBar);
        element.addEventListener('change', updateProgressBar);
    });


    // Initial call to update the progress bar on page load
    updateProgressBar();


// Form Validity and Submission Handling
(() => {
    'use strict';


    // Get the email input element
    const emailInput = document.getElementById('emailAddress');


    // Define feedback elements and their conditions
    const feedbackElements = [
        { id: 'emailMissingFeedback', condition: () => emailInput.validity.valueMissing },
        { id: 'emailFormatFeedback', condition: () => emailInput.validity.typeMismatch }
    ];


    // Get all radio button elements
    const radioButtons = Array.from(document.querySelectorAll('input[type="radio"]'));


    // Get modal elements for success and error messages
    const successModalEl = document.getElementById('successModal');
    const errorModalEl = document.getElementById('errorModal');


    // Get the reset button
    const resetButton = document.querySelector('button[type="reset"]');


    // Define a regular expression for validating email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    // Handle form submission
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            // Prevent default form submission and show error modal if form is invalid
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
            const errorModal = new bootstrap.Modal(errorModalEl);
            errorModal.show();
        } else {
            // Prevent default form submission, show success modal, and clear the form if valid
            event.preventDefault();
            const successModal = new bootstrap.Modal(successModalEl);
            successModal.show();
            clearForm();
        }
    }, false);


    // Handle input event on the email input field
    emailInput.addEventListener('input', () => {
        // Check the validity of the email input and show/hide feedback elements accordingly
        feedbackElements.forEach(feedback => {
            const feedbackElement = document.getElementById(feedback.id);
            if (feedback.condition()) {
                feedbackElement.style.display = 'block';
            } else {
                feedbackElement.style.display = 'none';
            }
        });


        // Set custom validity messages based on email input value
        if (emailInput.validity.valueMissing) {
            emailInput.setCustomValidity('Please enter your email address.');
        } else if (!emailRegex.test(emailInput.value)) {
            emailInput.setCustomValidity('Please enter a valid email address.');
            document.getElementById('emailFormatFeedback').style.display = 'block';
        } else {
            emailInput.setCustomValidity('');
            document.getElementById('emailFormatFeedback').style.display = 'none';
        }
    });


    // Variable to keep track of the last selected radio button
        let lastRadio = null;


        // Add click event listeners to all radio buttons
        radioButtons.forEach(radio => {
            radio.addEventListener('click', () => {
                // If the same radio button is clicked again, uncheck it and reset lastRadio
                if (lastRadio === radio) {
                    radio.checked = false;
                    lastRadio = null;
                } else {
                    // Otherwise, update lastRadio to the currently selected radio button
                    lastRadio = radio;
                }
                // Update the progress bar based on the current form state
                updateProgressBar();
            });
        });


        // Add event listener to the success modal to clear validation and form when it is hidden
        successModalEl.addEventListener('hidden.bs.modal', () => {
            form.classList.remove('was-validated');
            clearForm();
        });


        // Add click event listener to the reset button to clear the form when clicked
        if (resetButton) {
            resetButton.addEventListener('click', clearForm);
        }


        // Star Rating Functionality
        const stars = document.querySelectorAll('.star'); // Select all star elements
        let selectedRating = 0; // Initialize variable to store the selected rating


        stars.forEach(star => {
            // Add mouseover event listener to each star
            star.addEventListener('mouseover', function() {
                const value = this.getAttribute('data-value'); // Get the value of the hovered star
                stars.forEach(s => {
                    if (s.getAttribute('data-value') <= value) {
                        // Apply filled star styles to stars up to the hovered star
                        s.classList.remove('bi-star');
                        s.classList.add('bi-star-fill', 'text-warning', 'transition');
                    } else {
                        // Revert to empty star styles for stars beyond the hovered star
                        s.classList.remove('bi-star-fill', 'text-warning', 'transition');
                        s.classList.add('bi-star');
                    }
                });
            });


            // Add mouseout event listener to each star
            star.addEventListener('mouseout', function() {
                stars.forEach(s => {
                    if (s.getAttribute('data-value') <= selectedRating) {
                        // Apply filled star styles to stars up to the previously selected rating
                        s.classList.remove('bi-star');
                        s.classList.add('bi-star-fill', 'text-warning', 'transition');
                    } else {
                        // Revert to empty star styles for stars beyond the selected rating
                        s.classList.remove('bi-star-fill', 'text-warning', 'transition');
                        s.classList.add('bi-star');
                    }
                });
            });


            // Add click event listener to each star
            star.addEventListener('click', function() {
                selectedRating = this.getAttribute('data-value'); // Update selected rating based on clicked star
                document.getElementById('ratingMessage').textContent = `You rated: ${selectedRating} star${selectedRating > 1 ? 's' : ''}`; // Display rating message
                stars.forEach(s => {
                    if (s.getAttribute('data-value') <= selectedRating) {
                        // Apply filled star styles to stars up to the selected rating
                        s.classList.remove('bi-star');
                        s.classList.add('bi-star-fill', 'text-warning', 'transition');
                    } else {
                        // Revert to empty star styles for stars beyond the selected rating
                        s.classList.remove('bi-star-fill', 'text-warning', 'transition');
                        s.classList.add('bi-star');
                    }
                });
            });
        });
    })();


// Error Modal Handling
document.getElementById('tryAgainButton').addEventListener('click', function() {
    // Get the error modal instance and hide it when the 'Try Again' button is clicked
    const errorModal = bootstrap.Modal.getInstance(document.getElementById('errorModal'));
    errorModal.hide();
});


// Success Modal Handling
document.getElementById('rateWebsiteButton').addEventListener('click', function() {
    // Hide the original content and show the star rating section when 'Rate Website' button is clicked
    document.getElementById('originalContent').classList.add('d-none');
    document.getElementById('starRatingSection').classList.remove('d-none');
});


document.getElementById('closeRatingSection').addEventListener('click', function() {
    // Get the success modal instance and hide it when the 'Close Rating Section' button is clicked
    const successModal = bootstrap.Modal.getInstance(document.getElementById('successModal'));
    successModal.hide();
});


document.getElementById('submitFeedback').addEventListener('click', function() {
    // Get the selected rating and rating message elements
    const selectedRating = document.querySelector('.star.bi-star-fill');
    const ratingMessage = document.getElementById('ratingMessage');
    
    if (!selectedRating) {
        // If no rating is selected, show a message prompting the user to rate
        ratingMessage.textContent = 'Please rate our website from 1 to 5 stars before submitting feedback.';
    } else {
        // If a rating is selected, hide the star rating section and show feedback confirmation
        ratingMessage.textContent = '';
        document.getElementById('starRatingSection').classList.add('d-none');
        document.getElementById('feedbackConfirmation').classList.remove('d-none');
    }
});


// Highlight stars based on user rating
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', function() {
        // Get the rating value from the clicked star and highlight stars accordingly
        const rating = this.getAttribute('data-value');
        highlightStars(rating);
    });
});


// Function to highlight stars based on the given rating
function highlightStars(rating) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            // Fill stars up to the given rating
            star.classList.remove('bi-star');
            star.classList.add('bi-star-fill');
        } else {
            // Revert to empty stars for ratings beyond the given rating
            star.classList.remove('bi-star-fill');
            star.classList.add('bi-star');
        }
    });
}
});


// Initialize the tooltip for the question mark button
// Select all elements with the data-bs-toggle="tooltip" attribute
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
// Create a new Bootstrap Tooltip instance for each element
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
})
