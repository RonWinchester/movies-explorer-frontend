import { apiMoviesUrl, getResponseData } from "../constants/constants";

export function getMovies() {
  return fetch(`${apiMoviesUrl}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return getResponseData(res);
  });
}
