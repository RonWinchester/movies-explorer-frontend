import { apiMainUrl, getResponseData } from "../constants/constants";

export const createUser = ({ name ,email, password }) => {
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
  };