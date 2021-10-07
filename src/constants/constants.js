export const promoButton = [
  {
    name: "О проекте",
    link: "#about",
    target: "_self",
  },
  {
    name: "Технологии",
    link: "#stack",
    target: "_self",
  },
  {
    name: "Студент",
    link: "#about-me",
    target: "_self",
  },
];

export const techsButton = [
  {
    name: "HTML",
    link: "https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics",
    target: "_blank",
  },
  {
    name: "CSS",
    link: "https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics",
    target: "_blank",
  },
  {
    name: "JS",
    link: "https://developer.mozilla.org/ru/docs/Web/JavaScript",
    target: "_blank",
  },
  {
    name: "React",
    link: "https://ru.reactjs.org/",
    target: "_blank",
  },
  {
    name: "Git",
    link: "https://git-scm.com/",
    target: "_blank",
  },
  {
    name: "Express.js",
    link: "https://expressjs.com/ru/",
    target: "_blank",
  },
  {
    name: "mongoDB",
    link: "https://docs.mongodb.com/",
    target: "_blank",
  },
];

export const portfolioUrls = [
  {
    name: "Статичный сайт",
    link: "https://github.com/RonWinchester/how-to-learn",
    target: "_blank",
  },
  {
    name: "Адаптивный сайт",
    link: "https://ronwinchester.github.io/russian-travel/",
    target: "_blank",
  },
  {
    name: "Одностраничное приложение",
    link: "https://polugrudov.students.nomoredomains.club/",
    target: "_blank",
  },
];

export const registerData = {
  name: "Зарегистрироваться",
  title: "Добро пожаловать!",
  description: "Уже зарегистрированы?",
  link: "/signin",
  linkName: "Войти",
};

export const loginData = {
  name: "Войти",
  title: "Рады видеть!",
  description: "Ещё не зарегистрированы?",
  link: "/signup",
  linkName: "Регистрация",
};

export const regiterInputData = [
  {
    FormInputTitle: "Имя",
    FormInputName: "input-name",
    FormInputError: "form-name-error",
    FormInputErrorName: "Что-то пошло не так...",
    FormInputType: "name",
    FormInputId: "register-name",
  },
  {
    FormInputTitle: "E-mail",
    FormInputName: "input-email",
    FormInputError: "form-email-error",
    FormInputErrorName: "Пользователь с таким e-mail уже существует",
    FormInputType: "email",
    FormInputId: "register-email",
  },
  {
    FormInputTitle: "Пароль",
    FormInputName: "input-password",
    FormInputError: "form-password-error",
    FormInputErrorName: "Что-то пошло не так...",
    FormInputType: "password",
    FormInputId: "register-password",
    PasswordInput:'form-input_red'
  },
];

export const loginInputData = [
  {
    FormInputTitle: "E-mail",
    FormInputName: "input-email",
    FormInputError: "form-email-error",
    FormInputErrorName: "Пользователь с таким e-mail уже существует",
    FormInputType: "email",
    FormInputId: "register-email",
  },
  {
    FormInputTitle: "Пароль",
    FormInputName: "input-password",
    FormInputError: "form-password-error",
    FormInputErrorName: "Что-то пошло не так...",
    FormInputType: "password",
    FormInputId: "register-password",
    PasswordInput:'form-input_red'
  },
];

export const apiMoviesUrl = 'https://api.nomoreparties.co/beatfilm-movies';
export const apiMainUrl ='https://api.polugrudov.nomoredomains.club/';

export function getResponseData(res) {
  return res.ok ? res.json() : Promise.reject(`${res.status}`);
}

export const LARGE_SCREEN = 1280;
export const MEDIUM_SCREEN = 768;

export const MAX_MOVIES = 12;
export const MID_MOVIES = 8;
export const MIN_MOVIES = 5;

export const ADD_MAX_MOVIES = 3;
export const ADD_MID_MOVIES = 2;
export const ADD_MIN_MOVIES = 5;