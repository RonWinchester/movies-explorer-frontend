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
