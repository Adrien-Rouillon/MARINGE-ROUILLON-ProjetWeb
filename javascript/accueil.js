/*let currentslide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (slides.length > 0) { // On vérifie qu'il y a des images
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }
}

function nextSlide() {
    currentslide = (currentslide + 1) % slides.length;
    showSlide(currentslide);
}

function prevSlide() {
    currentslide = (currentslide - 1 + slides.length) % slides.length;
    showSlide(currentslide);
}
    */
let currentslide = 0;

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    function updateSlides(index) {
        if (slides.length === 0) return;
        
        // On enlève la classe active de tout le monde
        slides.forEach(slide => slide.classList.remove('active'));
        
        // On calcule l'index (boucle infinie)
        currentslide = (index + slides.length) % slides.length;
        
        // On ajoute la classe active à la bonne image
        slides[currentslide].classList.add('active');
    }

    // Écouteurs d'événements
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => updateSlides(currentslide + 1));
        prevBtn.addEventListener('click', () => updateSlides(currentslide - 1));
        
        // Initialisation : on affiche la première image
        updateSlides(0);
    }

    // Gestion du bouton contact
    const contactBtn = document.querySelector('.btn-contact');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            alert("Merci de nous contacter à l'adresse : contact@efrei.fr");
        });
    }
});