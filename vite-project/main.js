// Header fadeout effect
window.addEventListener('scroll', () => {
    const fadeOutElement = document.querySelector('.fadeout-header');
    const scrollY = window.scrollY;
    console.log(scrollY);

    if (scrollY == 0) {
        fadeOutElement.style.opacity = '1';
    } else {
        fadeOutElement.style.opacity = '0';
    }
})