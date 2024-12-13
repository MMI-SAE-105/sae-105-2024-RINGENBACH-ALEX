document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel'); // Sélectionner tous les carrousels

    carousels.forEach(carousel => {
        const carouselContainer = carousel.querySelector('.carousel-container');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');

        let currentIndex = 0; // Index de l'image visible au départ

        // Fonction pour mettre à jour la position du carrousel
        function updateCarousel() {
            const offset = -currentIndex * 100; // Décalage en pourcentage
            carouselContainer.style.transform = `translateX(${offset}%)`;
        }

        // Fonction pour naviguer vers l'image suivante
        function goToNextSlide() {
            currentIndex = (currentIndex + 1) % slides.length; // Boucle à la première image après la dernière
            updateCarousel();
        }

        // Fonction pour naviguer vers l'image précédente
        function goToPrevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Boucle à la dernière image avant la première
            updateCarousel();
        }

        // Ajouter des écouteurs d'événements pour les boutons
        nextButton.addEventListener('click', goToNextSlide);
        prevButton.addEventListener('click', goToPrevSlide);

        // Mettre à jour la position initiale
        updateCarousel();
    });
});