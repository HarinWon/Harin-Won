document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const controls = document.querySelectorAll('.control');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
        controls.forEach((control, i) => {
            if (i === index) {
                control.classList.add('active');
            } else {
                control.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function currentSlide(index) {
        slideIndex = index;
        showSlide(slideIndex);
    }

    controls.forEach((control, i) => {
        control.addEventListener('click', () => {
            currentSlide(i);
        });
    });

    showSlide(slideIndex);
    setInterval(nextSlide, 4000);
});
