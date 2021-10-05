export function filterMovies(movies, query) {
  let result = [];
  movies.map((movie) => {
    if (movie.nameRU.toLowerCase().includes(query.toLowerCase()))
      result.push(movie);
  });
  return result;
}
