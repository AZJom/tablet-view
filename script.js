document.addEventListener('DOMContentLoaded', function() {
    const recipes = document.querySelectorAll('main div');

    recipes.forEach(recipe => {
        const stars = [];
        const maxRating = 5; // Maximum rating value

        for (let i = 0; i < maxRating; i++) {
            const star = document.createElement('span');
            star.classList.add('star');
            star.innerHTML = '&#9733;'; // Star symbol
            star.addEventListener('click', function() {
                highlightStars(i);
                displayRating(i + 1);
            });
            stars.push(star);
            recipe.appendChild(star);
        }

        function highlightStars(index) {
            stars.forEach((star, i) => {
                if (i <= index) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        }

        function displayRating(rating) {
            const ratingDisplay = document.createElement('p');
            ratingDisplay.innerText = `You rated this recipe: ${rating} stars`;
            recipe.appendChild(ratingDisplay);
        }
    });
});
