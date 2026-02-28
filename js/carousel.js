const track = document.getElementById('carouselTrack');
const slides = Array.from(track.children);
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');

let currentIndex = 0;
let autoPlayInterval;

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateCarousel();
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateCarousel();
}

// Event Listeners for manual control
nextButton.addEventListener('click', () => {
    nextSlide();
    resetAutoPlay();
});

prevButton.addEventListener('click', () => {
    prevSlide();
    resetAutoPlay();
});

// Auto-play functionality
function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000); // changes every 5 seconds
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Adjust carousel on window resize
window.addEventListener('resize', updateCarousel);

// Initialize
startAutoPlay();
