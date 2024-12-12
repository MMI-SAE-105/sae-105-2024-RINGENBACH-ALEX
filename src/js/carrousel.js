document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0;

    // Fonction pour mettre à jour la position du carrousel
    function updateCarousel() {
        const offset = -currentIndex * 100; // Calculer le décalage en pourcentage
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    // Gestionnaire pour le bouton "Suivant"
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length; // Passe au slide suivant
        updateCarousel();
    });

    // Gestionnaire pour le bouton "Précédent"
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Revient au slide précédent
        updateCarousel();
    });
});