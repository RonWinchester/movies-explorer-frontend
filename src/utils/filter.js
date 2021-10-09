import { SHORT_MOVIES } from "../constants/constants";

export function filterMovies(movies, query) {
  let result = [];
  // eslint-disable-next-line array-callback-return
  movies.map((movie) => {
    if (movie.nameRU.toLowerCase().includes(query.toLowerCase()))
      result.push(movie);
  });
  return result;
}

export function handleIdFilter(moviesList, id) {
  return moviesList.filter((movie) => movie._id !== id);
}

export function handleFilter(moviesList, value) {
  let result = [];
  moviesList.forEach((movie) => {
    if (movie.nameRU.toLowerCase().includes(value.toLowerCase()))
      result.push(movie);
  });
  return result;
}

export function handleShortMovies (movies) {
  let result = [];
  movies.forEach(movie => {
    movie.duration <= SHORT_MOVIES && result.push(movie)
  })
  return result
}
