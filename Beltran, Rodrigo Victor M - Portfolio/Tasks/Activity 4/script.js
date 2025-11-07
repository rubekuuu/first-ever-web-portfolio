// Array of image filenames for the slider
const sliderImages = [
    "itachi1.jpg",
    "itachi2.jpg",
    "itachi3.jpg",
    "itachi_par.jpg",
    "itachi4.jpg",
    "itachi5.jpg",
    "itachi6.jpg",
    "itachi_gen.jpg",
    "itachi_nin.jpg",
    "itachi_sus.jpg",
    "itachi7.jpg",
    "itachi8.jpg"
];

let currentIndex = 0; // Tracks the current image index

// Get DOM elements for slider functionality
const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.getElementById('sliderIndicators');

// Updates the displayed image and active indicator
function updateSlider() {
    sliderImage.src = sliderImages[currentIndex];
    // Highlight the active indicator dot
    Array.from(indicators.children).forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
    });
}

// Navigates to a specific slide by index
function goToSlide(idx) {
    currentIndex = idx;
    updateSlider();
}

// Show previous image on left arrow click
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    updateSlider();
});

// Show next image on right arrow click
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    updateSlider();
});

// Create indicator dots and add click events for navigation
indicators.innerHTML = '';
sliderImages.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (idx === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(idx));
    indicators.appendChild(dot);
});

// Initialize slider on page load
updateSlider();