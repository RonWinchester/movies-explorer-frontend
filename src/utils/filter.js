export function filterMovies(movies, query) {
  let result = [];
  // eslint-disable-next-line array-callback-return
  movies.map((movie) => {
    if (movie.nameRU.toLowerCase().includes(query.toLowerCase()))
      result.push(movie);
  });
  return result;
}
