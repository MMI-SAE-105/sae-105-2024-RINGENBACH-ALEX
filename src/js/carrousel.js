document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel'); // Sélectionner tous les carrousels

    carousels.forEach(carousel => {
        const carouselContainer = carousel.querySelector('.carousel-container');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');

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
});