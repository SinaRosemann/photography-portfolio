import { isMobile } from "react-device-detect";

export function setDarkMode() {
  let body = document.body;
  let container = document.querySelector(".content--inner_detail");
  let fontBundle = document.querySelectorAll(
    "h1, h2, h3, h4, p, a, ul, li, button, span"
  );
  let textShadowBundle = document.querySelectorAll(".letter");
  let textShadowFrontBundle = document.querySelectorAll(".project__image h3");
  let pathBundle = document.querySelectorAll("path:not(.path__circle)");
  let pathCircle = document.querySelector(".path__circle");
  let contactButtton = document.querySelector("#mode");
  let navbarMobile = document.querySelector(".navbar");

  // 1. Add the class to the body
  document.body.classList.add("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
  body.style.backgroundColor = "rgb(24, 24, 24)";
  container.style.backgroundColor = "rgb(24, 24, 24)";
  contactButtton.style.color = "rgb(252, 252, 250)";
  contactButtton.innerText = "Light";

  if (pathCircle) {
    pathCircle.style.stroke = "rgb(252, 252, 250)";
  }
  if (navbarMobile && isMobile) {
    navbarMobile.style.backgroundColor = "rgb(24, 24, 24)";
  }
  for (let i = 0; i < fontBundle.length; i++) {
    fontBundle[i].style.color = "rgb(252, 252, 250)";
  }
  for (let i = 0; i < textShadowBundle.length; i++) {
    textShadowBundle[i].style.textShadow = "black 1px -5px";
  }
  for (let i = 0; i < textShadowFrontBundle.length; i++) {
    textShadowFrontBundle[i].style.textShadow = "1px -1px black";
  }
  for (let i = 0; i < pathBundle.length; i++) {
    pathBundle[i].style.fill = "rgb(252, 252, 250)";
  }
}

export function setLightMode() {
  let body = document.body;

  let container = document.querySelector(".content--inner_detail");
  let fontBundle = document.querySelectorAll(
    "h1, h2, h3, h4, p, a, ul, li, button, span"
  );
  let textShadowBundle = document.querySelectorAll(".letter");
  let textShadowFrontBundle = document.querySelectorAll(".project__image h3");
  let pathBundle = document.querySelectorAll("path:not(.path__circle)");
  let pathCircle = document.querySelector(".path__circle");
  let contactButtton = document.querySelector("#mode");
  let navbarMobile = document.querySelector(".navbar");

  // 1. Remove the class from the body
  document.body.classList.remove("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
  body.style.backgroundColor = "rgb(252, 252, 250)";
  container.style.backgroundColor = "rgb(252, 252, 250)";
  contactButtton.style.color = "rgb(24, 24, 24)";
  contactButtton.innerText = "Dark";
  if (pathCircle) {
    pathCircle.style.stroke = "rgb(24, 24, 24)";
  }
  if (navbarMobile && isMobile) {
    navbarMobile.style.backgroundColor = "rgb(252, 252, 250)";
  }
  for (let i = 0; i < fontBundle.length; i++) {
    fontBundle[i].style.color = "rgb(24, 24, 24)";
  }
  for (let i = 0; i < textShadowBundle.length; i++) {
    textShadowBundle[i].style.textShadow = "white 1px -5px";
  }
  for (let i = 0; i < textShadowFrontBundle.length; i++) {
    textShadowFrontBundle[i].style.textShadow = "1px -1px white";
  }
  for (let i = 0; i < pathBundle.length; i++) {
    pathBundle[i].style.fill = "rgb(24, 24, 24)";
    pathBundle[i].style.stroke = "rgb(24, 24, 24)";
  }
}
