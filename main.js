document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const items = document.querySelectorAll('.slider-item');
    let currentIndex = 0;
    
    const getVisibleItems = () => window.innerWidth < 640 ? 1 : 3;

    const updateSlider = () => {
        const visibleItems = getVisibleItems();
        const transformValue = -currentIndex * (100 / visibleItems);
        slider.style.transform = `translateX(${transformValue}%)`;
    };

    const autoSlide = () => {
        const visibleItems = getVisibleItems();
        currentIndex = (currentIndex + 1) % (items.length - visibleItems + 1);
        updateSlider();
    };

    // Auto slide every 3 seconds
    setInterval(autoSlide, 3000);

    // Responsive handling
    window.addEventListener('resize', updateSlider);

    // Initial update
    updateSlider();
});
