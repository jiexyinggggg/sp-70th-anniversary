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


// Countdown Timer
// Set the target date and time for the countdown
const countDownDate = new Date("Oct 27, 2024 00:00:00").getTime();


// Update the countdown every second
const x = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();
    // Calculate the distance between now and the countdown target date
    const distance = countDownDate - now;


    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // Update the HTML elements with the calculated values
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


    // If the countdown is finished, clear the interval and set values to 0
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
    }
}, 1000); // Update every second


// Countdown Box hover effects
document.querySelectorAll('[data-bs-toggle="countdown"]').forEach(function (box) {
    // Apply transition property initially for smooth scaling and shadow effects
    box.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';


    // Add hover effects for the countdown box
    box.addEventListener('mouseenter', function () {
        box.classList.add('shadow-lg', 'scale-up'); // Add shadow and scale effect on hover
    });
    box.addEventListener('mouseleave', function () {
        box.classList.remove('shadow-lg', 'scale-up'); // Remove shadow and scale effect when not hovering
    });
});


// Create a style element for custom scaling class
const style = document.createElement('style');
style.textContent = `
    .scale-up {
        transform: scale(1.1);
    }
`;
document.head.append(style); // Append the style element to the document head


// Toggle Arrow Icon
document.addEventListener('DOMContentLoaded', function () {
    // Get the collapse element and toggle icon
    const collapseElement = document.getElementById('anniversaryDetails');
    const toggleIcon = document.getElementById('toggleIcon');

    if (!collapseElement || !toggleIcon) {
        console.error('Required elements are missing.'); // Log an error if required elements are not found
        return;
    }


    // Initialize Bootstrap Collapse instance
    const collapseInstance = new bootstrap.Collapse(collapseElement, {
        toggle: false
    });


    // Change the toggle icon on collapse show and hide events
    collapseElement.addEventListener('show.bs.collapse', function () {
        toggleIcon.classList.remove('bi-chevron-down'); // Remove down chevron icon
        toggleIcon.classList.add('bi-chevron-up'); // Add up chevron icon
    });


    collapseElement.addEventListener('hide.bs.collapse', function () {
        toggleIcon.classList.remove('bi-chevron-up'); // Remove up chevron icon
        toggleIcon.classList.add('bi-chevron-down'); // Add down chevron icon
    });
});


// For All Ages Book Hover Effect
document.addEventListener("DOMContentLoaded", function() {
    // Get the image element by its ID
    const image = document.getElementById("hover-image");


    // Add an event listener for the mouseover event
    image.addEventListener("mouseover", function() {
        // Scale up the image on hover
        image.style.transform = "scale(1.1)";
        image.style.transition = "transform 0.3s ease";
    });


    // Add an event listener for the mouseout event
    image.addEventListener("mouseout", function() {
        // Reset the image scale when the mouse moves out
        image.style.transform = "scale(1)";
    });
});

// Cards Hover Effect
document.addEventListener("DOMContentLoaded", function() {
    // Get the card elements by their IDs
    const cards = [
        document.getElementById("card-1"),
        document.getElementById("card-2"),
        document.getElementById("card-3")
    ];


    // Add hover effect to each card
    cards.forEach(card => {
        card.addEventListener("mouseover", function() {
            // Scale up the card on hover
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease"; // Smooth transition effect
        });


        card.addEventListener("mouseout", function() {
            // Reset the card scale when the mouse moves out
            card.style.transform = "scale(1)";
        });
    });
});


// Flip Card Handling
// Add click event listeners to the 'learn more' buttons
document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', function() {
        // Get the closest card and its content sections
        const card = this.closest('.card');
        const frontContent = card.querySelector('.front-content');
        const backContent = card.querySelector('.back-content');
        const image = card.querySelector('.card-image');


        // Show the back content and hide the front content and image
        frontContent.classList.add('d-none');
        image.classList.add('d-none');
        backContent.classList.remove('d-none');
    });
});


// Add click event listeners to the 'go back' buttons
document.querySelectorAll('.go-back').forEach(button => {
    button.addEventListener('click', function() {
        // Get the closest card and its content sections
        const card = this.closest('.card');
        const frontContent = card.querySelector('.front-content');
        const backContent = card.querySelector('.back-content');
        const image = card.querySelector('.card-image');


        // Show the front content and image, and hide the back content
        frontContent.classList.remove('d-none');
        image.classList.remove('d-none');
        backContent.classList.add('d-none');
    });
});


// Product Cards Expansion
document.addEventListener('DOMContentLoaded', function() {
    // Get all hoverable product cards
    const cards = document.querySelectorAll('.hover-card');


    // Add hover effect to each card
    cards.forEach(card => {
      card.addEventListener('mouseover', () => {
        // Scale up the card and change background color on hover
        card.style.transform = 'scale(1.05)';
        card.style.backgroundColor = '#cda5a5'; // Change to desired hover color
        card.style.transition = 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out'; // Smooth transition effect
      });


      card.addEventListener('mouseout', () => {
        // Reset the card scale and background color when the mouse moves out
        card.style.transform = 'scale(1)';
        card.style.backgroundColor = ''; // Reset to original color
        card.style.transition = 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out'; // Smooth transition effect
      });
    });
});


// SP70 Shirts
document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'hover-card'
    var cards = document.querySelectorAll('.hover-card');
    // Select the image element in the modal
    var modalImage = document.getElementById('modalImage');


    // Add click event listeners to each card
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            // Get the image source from the card's data attribute
            var imgSrc = card.getAttribute('data-img-src');
            // Set the modal image source to the card's image source
            modalImage.src = imgSrc;
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Select all card elements
    const cards = document.querySelectorAll('.card');


    // Add hover effects to each card
    cards.forEach(card => {
        card.addEventListener('mouseover', function () {
            // Get the front and back elements of the card
            const front = this.querySelector('.card-front');
            const back = this.querySelector('.card-back');
            // Show the back content and hide the front content on hover
            front.classList.add('d-none');
            back.classList.remove('d-none');
        });


        card.addEventListener('mouseleave', function () {
            // Get the front and back elements of the card
            const front = this.querySelector('.card-front');
            const back = this.querySelector('.card-back');
            // Show the front content and hide the back content when mouse leaves
            front.classList.remove('d-none');
            back.classList.add('d-none');
        });
    });
});


// JavaScript for shadow effect
document.addEventListener('DOMContentLoaded', function() {
    // Select all images with the class 'card-img-top'
    const images = document.querySelectorAll('.card-img-top');
    

    // Function to add shadow and dim effect on hover
    function addEffects() {
        this.style.transition = 'box-shadow 0.3s ease, filter 0.3s ease'; // Smooth transition for effects
        this.style.boxShadow = '-10px 0 15px rgba(0, 0, 0, 0.5), 10px 0 15px rgba(0, 0, 0, 0.5)'; // Shadow effect
        this.style.filter = 'brightness(80%)'; // Dim the image
    }
    

    // Function to remove shadow and dim effect
    function removeEffects() {
        this.style.boxShadow = 'none'; // Remove shadow
        this.style.filter = 'brightness(100%)'; // Reset brightness
    }
    

    // Add event listeners for hover effects to each image
    images.forEach(img => {
        img.addEventListener('mouseover', addEffects); // Add effects on hover
        img.addEventListener('mouseout', removeEffects); // Remove effects when not hovering
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Get references to various elements in the quiz
    const startButton = document.getElementById('start-btn');
    const submitButton = document.getElementById('submit-btn');
    const nextButton = document.getElementById('next-btn');
    const previousButton = document.getElementById('previous-btn');
    const questions = document.querySelectorAll('.question');
    const questionNumber = document.getElementById('question-number');
    const errorMessage = document.getElementById('error-message');
    const completionModal = new bootstrap.Modal(document.getElementById('completionModal'));
    const quizContainer = document.getElementById('quiz-container');
    const quizCover = document.getElementById('quiz-cover');
    const occupationSelect = document.getElementById('occupation');
    const answerButtons = document.querySelectorAll('.answer-btn');

    
    // Hide elements initially
    submitButton.classList.add('d-none');
    nextButton.classList.add('d-none');
    previousButton.classList.add('d-none');
    quizContainer.classList.add('d-none');


    let currentQuestionIndex = 0;
    let selectedButton = null;
    const answers = Array(questions.length).fill(null);


    // Function to update button visibility based on current question and answer selection
    function updateButtons() {
        const answer = answers[currentQuestionIndex];
        if (answer) {
            nextButton.style.display = 'inline-block'; // Show next button if an answer is selected
            submitButton.style.display = 'none';
        } else {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block'; // Show submit button if no answer is selected
        }
        previousButton.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none'; // Show previous button if not on the first question
        if (currentQuestionIndex === questions.length - 1) {
            nextButton.style.display = 'none'; // Hide next button on the last question
        }
    }


    // Function to save the selected answer
    function saveAnswer() {
        if (!selectedButton) return; // Return if no button is selected
        const isCorrect = selectedButton.getAttribute('data-answer') === 'true'; // Check if the selected answer is correct
        answers[currentQuestionIndex] = {
            selected: selectedButton,
            correct: isCorrect
        };
    }


    // Function to show the correct and incorrect answers after submission
    function showAnswer() {
        const answer = answers[currentQuestionIndex];
        if (!answer) return;

        answerButtons.forEach(button => {
            button.classList.remove('btn-outline-primary', 'selected', 'correct', 'incorrect'); // Reset button classes
            button.disabled = true; // Disable all buttons
            if (button === answer.selected) {
                button.classList.add(answer.correct ? 'correct' : 'incorrect'); // Add correct or incorrect class to the selected button
            } else if (button.getAttribute('data-answer') === 'true') {
                button.classList.add('correct'); // Add correct class to the correct answer button
            }
        });
    }


    // Function to calculate the user's score
    function calculateScore() {
        return answers.reduce((score, answer) => answer && answer.correct ? score + 1 : score, 0);
    }


    // Function to update the completion modal with the user's score
    function updateCompletionModal(score, total) {
        const modalTitle = document.getElementById('completionModalLabel');
        const scoreSpan = document.getElementById('score');
        const totalSpan = document.getElementById('total');

        scoreSpan.textContent = score;
        totalSpan.textContent = total;

        // Update the modal title based on the score
        if (score >= 5) {
            modalTitle.innerHTML = `Congratulations! You scored <span id="score">${score}</span> out of <span id="total">${total}</span>`;
        } else {
            modalTitle.innerHTML = `You scored <span id="score">${score}</span> out of <span id="total">${total}</span>`;
        }
    }


    // Event listener for the submit button
    submitButton.addEventListener('click', () => {
        if (!selectedButton) {
            errorMessage.style.display = 'block'; // Show error if no button is selected
            return;
        }
        saveAnswer(); // Save the selected answer
        updateButtons(); // Update button visibility
        showAnswer(); // Show answer feedback
        if (currentQuestionIndex === questions.length - 1) {
            const score = calculateScore(); // Calculate the score
            const total = questions.length;
            updateCompletionModal(score, total); // Update the completion modal
            completionModal.show(); // Show the completion modal
        }
    });


    // Event listener for the next button
    nextButton.addEventListener('click', () => {
        questions[currentQuestionIndex].classList.add('d-none'); // Hide current question
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            questions[currentQuestionIndex].classList.remove('d-none'); // Show next question
            questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
        }
        if (selectedButton) {
            selectedButton.classList.remove('selected'); // Deselect the previously selected button
            selectedButton = null;
        }
        answerButtons.forEach(button => {
            button.classList.remove('correct', 'incorrect', 'selected'); // Reset button classes
            button.classList.add('btn-outline-primary'); // Add default class
            button.disabled = false; // Enable all buttons
        });
        showAnswer(); // Show answer feedback
        updateButtons(); // Update button visibility
        errorMessage.style.display = 'none'; // Hide error message
    });


    // Event listener for the previous button
    previousButton.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            questions[currentQuestionIndex].classList.add('d-none'); // Hide current question
            currentQuestionIndex--;
            questions[currentQuestionIndex].classList.remove('d-none'); // Show previous question
            questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
            if (selectedButton) {
                selectedButton.classList.remove('selected'); // Deselect the previously selected button
                selectedButton = null;
            }
            answerButtons.forEach(button => {
                button.classList.remove('correct', 'incorrect', 'selected'); // Reset button classes
                button.classList.add('btn-outline-primary'); // Add default class
                button.disabled = false; // Enable all buttons
            });
            showAnswer(); // Show answer feedback
            updateButtons(); // Update button visibility
            errorMessage.style.display = 'none'; // Hide error message
        }
    });


    // Function to reset the quiz and start again
    function playAgain() {
        currentQuestionIndex = 0;
        answers.fill(null); // Reset answers array
        questions.forEach((question, index) => {
            question.classList.toggle('d-none', index !== 0); // Show only the first question
        });
        answerButtons.forEach(button => {
            button.classList.remove('correct', 'incorrect', 'selected'); // Reset button classes
            button.classList.add('btn-outline-primary'); // Add default class
            button.disabled = false; // Enable all buttons
        });
        selectedButton = null;
        questionNumber.textContent = `Question 1 of ${questions.length}`;
        updateButtons(); // Update button visibility
        errorMessage.style.display = 'none'; // Hide error message
        completionModal.hide(); // Hide completion modal
        quizContainer.classList.remove('d-none'); // Show quiz container
        quizCover.classList.add('d-none'); // Hide quiz cover
    }


    // Expose the playAgain function to the global scope
    window.playAgain = playAgain;


    // Event listener for the start button
    startButton.addEventListener('click', () => {
        if (occupationSelect.value === "") {
            errorMessage.style.display = 'block'; // Show error if occupation is not selected
            return;
        }
        startButton.classList.add('d-none'); // Hide start button
        quizContainer.classList.remove('d-none'); // Show quiz container
        submitButton.classList.remove('d-none'); // Show submit button
        nextButton.classList.remove('d-none'); // Show next button
        previousButton.classList.remove('d-none'); // Show previous button
        playAgain(); // Reset and start the quiz
    });


    // Ensure the quiz is hidden initially
    quizContainer.classList.add('d-none');


    // Add hover effect to quiz cover
    quizCover.addEventListener('mouseover', () => {
        quizCover.style.transition = 'transform 0.2s ease-in-out'; // Smooth transition for hover effect
        quizCover.style.transform = 'scale(1.05)'; // Increase size on hover
    });


    quizCover.addEventListener('mouseout', () => {
        quizCover.style.transition = 'transform 0.2s ease-in-out'; // Smooth transition for hover effect
        quizCover.style.transform = 'scale(1)'; // Reset size when not hovering
    });


    // Add event listeners to answer buttons
    answerButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (selectedButton) {
                selectedButton.classList.remove('selected'); // Deselect the previously selected button
            }
            button.classList.add('selected'); // Select the clicked button
            selectedButton = button;
            errorMessage.style.display = 'none'; // Hide error message
        });
    });
});