import { apiMoviesUrl } from "../constants/constants";

function getResponseData(res) {
  return res.ok ? res.json() : Promise.reject(`${res.status}`);
}

export function getMovies() {
  return fetch(`${apiMoviesUrl}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return getResponseData(res);
  });
}
