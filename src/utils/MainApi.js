import { apiMainUrl, getResponseData } from "../constants/constants";

export function createUser({ name, email, password }) {
  return fetch(`${apiMainUrl}signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      password: password,
      email: email,
    }),
  }).then((response) => {
    return getResponseData(response);
  });
}

export function login({ email, password }) {
  return fetch(`${apiMainUrl}signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  }).then((response) => {
    return getResponseData(response);
  });
}

export function logout() {
  return fetch(`${apiMainUrl}logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return getResponseData(response);
  });
}

export function getUserInfo() {
  return fetch(`${apiMainUrl}users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return getResponseData(response);
  });
}

export function patchUserInfo({ name, email }) {
  return fetch(`${apiMainUrl}users/me`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then((response) => {
    return getResponseData(response);
  });
}

export function savedMovies(movie) {
  const { country, director, duration, year, description, nameRU, nameEN } =
    movie;
  const image = `https://api.nomoreparties.co${movie.image.url}`;
  const trailer = movie.trailerLink;
  const thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
  const movieId = movie.id;
  return fetch(`${apiMainUrl}movies`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      nameRU,
      nameEN,
      thumbnail,
      movieId,
    }),
  }).then((response) => {
    return getResponseData(response);
  });
}

export function getSaveMovies() {
  return fetch(`${apiMainUrl}movies`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return getResponseData(response);
  });
}

export const deleteSavedMovie = (movieId) => {
  return fetch(`${apiMainUrl}movies/${movieId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return getResponseData(response);
  });
};
