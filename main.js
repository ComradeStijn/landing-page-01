// Header fadeout effect
window.addEventListener('scroll', () => {
    const fadeOutElement = document.querySelector('.fadeout-header');
    const scrollY = window.scrollY;

    if (scrollY == 0) {
        fadeOutElement.style.opacity = '1';
    } else {
        fadeOutElement.style.opacity = '0';
    }
})

// Main title fadeout effect
window.addEventListener('scroll', () => {
    const fadeOutElement = document.querySelector('.fadeout-title');
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    fadeOutElement.style.opacity = 1 - Math.min(2 * scrollY / windowHeight , 1);
})