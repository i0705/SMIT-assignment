( async function(){
const response = await fetch("./data.json")
const movies = await response.json();
// console.log(movies);
const genreInput = document.getElementById("genre");
const yearInput = document.getElementById("year");
const languageInput = document.getElementById("language");
const ratingInput = document.getElementById("rating");


function filterMovies(){
    const genre= genreInput.value
    const language= languageInput.value
    const year= +(yearInput.value)
    const rating= ratingInput.value
    const filteredMovies = movies.filter((movie) => {
        // Check if the movie's genres match the user's genre preference
        if (genre !== 'Any' && !movie.genres.includes(genre)) {
          return false;
        }
    
        // Check if the movie's release year matches the user's year preference
        const movieYear = new Date(movie.release_date).getFullYear();
        if (year !== 'Any' && movieYear !== parseInt(year)) {
          return false;
        }
    
        // Check if the movie's original language matches the user's language preference
        if (language !== 'Any' && movie.original_language !== language) {
          return false;
        }
    
        // Check if the movie's rating matches the user's rating preference
        if (rating !== 'Any' && movie.certification !== rating) {
          return false;
        }
    
        // If all checks passed, include the movie in the filtered list
        return true;
      });
    //   console.log(filteredMovies)
      const moviesContainer = document.getElementById("movie-container")
      moviesContainer.innerHTML=" "
      if (filteredMovies.length > 0) {
        filteredMovies.forEach((movie) => {
          const movieElement = document.createElement('div');
          
          movieElement.innerHTML = `
            <h2>${movie.title}</h2>
            
            <p>Genres: ${movie.genres.join(', ')}</p>
            <p>Release Date: ${movie.release_date}</p>
            <p>Original_language: ${movie.original_language}</p>
            <p>Certification: ${movie.certification}</p>
          `;
          moviesContainer.appendChild(movieElement);
        });

}
else {
    const noResultsElement = document.createElement('p');
    noResultsElement.textContent = 'No movies found.';
    moviesContainer.appendChild(noResultsElement);
  }

}
genreInput.addEventListener("change",filterMovies)
yearInput.addEventListener("change",filterMovies)
languageInput.addEventListener("change",filterMovies)
ratingInput.addEventListener("change",filterMovies)

})();