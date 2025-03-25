let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateCarousel() {
    const offset = -currentIndex * 800;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1;
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});
