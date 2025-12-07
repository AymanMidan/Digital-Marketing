// assets/js/app.js

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optionnel : arrêter d'observer l'élément une fois qu'il est visible
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // L'élément est considéré comme visible à 10%
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});
