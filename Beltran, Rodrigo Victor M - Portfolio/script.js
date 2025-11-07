document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalClose = document.getElementById('modal-close');
    const images = document.querySelectorAll('.translucent-img');

    images.forEach(img => {
        img.addEventListener('click', function () {
            modal.classList.add('active');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    modalClose.addEventListener('click', function () {
        modal.classList.remove('active');
        modalImg.src = '';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            modalImg.src = '';
        }
    });

    // Optional: Close modal on ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            modalImg.src = '';
        }
    });

    function setupCarousel(carouselId, interval = 3000) {
        const carousel = document.getElementById(carouselId);
        if (!carousel) return;
        const images = carousel.querySelectorAll('.carousel-img');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        let current = 0;
        let timer;

        // Create dots
        images.forEach((_, idx) => {
            const dot = document.createElement('span');
            dot.className = 'carousel-dot' + (idx === 0 ? ' active' : '');
            dot.addEventListener('click', () => showImage(idx));
            dotsContainer.appendChild(dot);
        });
        const dots = dotsContainer.querySelectorAll('.carousel-dot');

        function showImage(idx) {
            images[current].classList.remove('active');
            dots[current].classList.remove('active');
            current = idx;
            images[current].classList.add('active');
            dots[current].classList.add('active');
            resetTimer();
        }

        function nextImage() {
            showImage((current + 1) % images.length);
        }

        function resetTimer() {
            clearInterval(timer);
            timer = setInterval(nextImage, interval);
        }

        // Initialize
        images.forEach((img, idx) => img.classList.toggle('active', idx === 0));
        resetTimer();
    }

    // Setup carousels
    setupCarousel('carousel-me');
    setupCarousel('carousel-fam');
    setupCarousel('carousel-gf');
});