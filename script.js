document.getElementById('startButton').addEventListener('click', function() {
    const colors = ['#6a0dad', '#ff758c', '#a18cd1', '#fbc2eb', '#fad0c4'];

    // Disable the button to prevent multiple clicks
    this.disabled = true;

    // Inform the user that a surprise is coming
    alert("Get ready for a surprise! 🎉");

    // Play birthday music
    const audio = new Audio('./assets/WhatsApp Audio 2024-12-11 at 11.51.35_6ccfe063.mp3');
    
    // Play the audio and handle the promise rejection if audio fails to load
    audio.play().catch(error => {
        console.error("Audio failed to play:", error);
        alert("Sorry, we couldn't play the birthday music.");
    });

    // Create floating confetti
    const confettiCount = 200; // Number of confetti pieces
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random duration between 2s and 5s
        confetti.style.animationDelay = Math.random() * 2 + 's'; // Random delay
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove(); // Clean up confetti after animation
        }, 5000);
    }

    // Re-enable the button after 60 seconds (or adjust to fit your animation duration)
    setTimeout(() => {
        this.disabled = false; // Re-enable the button after 5 seconds
    }, 60000);
});


// Image carousel manual controls
let index = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function moveToNextImage() {
    index++;
    if (index >= totalImages) {
        index = 0;
    }
    updateCarousel();
}

function moveToPreviousImage() {
    index--;
    if (index < 0) {
        index = totalImages - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    const carouselBox = document.querySelector('.carousel-box');
    carouselBox.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('nextButton').addEventListener('click', moveToNextImage);
document.getElementById('prevButton').addEventListener('click', moveToPreviousImage);
