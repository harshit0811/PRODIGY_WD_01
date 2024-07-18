document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.backgroundColor = '#4a4a4a';
        } else {
            nav.style.backgroundColor = '#333';
        }
    });
});