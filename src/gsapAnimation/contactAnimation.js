import { TweenLite } from "gsap";

export const play = (contentplay, node) => {
  const svg = document.querySelector(".contact__header svg");
  const letter = document.querySelectorAll(".contact__letter ");
  const container = document.querySelector("#scroll-container");

  if (
    container.style.backgroundColor === "rgb(252, 252, 250)"
  ) {
    TweenLite.to(letter, 1, {
      stagger: 0.03,
      css: {
        x: "-5vw",
        webkitTextStroke: "1px rgba(24, 24, 24, 0.8)",
        color: "transparent",
      },
    });
  } else {
    TweenLite.to(letter, 1, {
      stagger: 0.03,
      css: {
        x: "-5vw",
        webkitTextStroke: "1px rgba(255, 255, 255, 0.8)",
        color: "transparent",
      },
    });
  }

  TweenLite.to(svg, 1, {
    css: {
      x: "5vw",
    },
  });
};

export const exit = (node) => {
  const svg = document.querySelector(".contact__header svg");
  const letter = document.querySelectorAll(".contact__letter ");
  const container = document.querySelector("#scroll-container");

  if (
    container.style.backgroundColor === "rgb(252, 252, 250)"

  ) {
    TweenLite.to(letter, 1, {
      stagger: 0.03,
      css: {
        x: "0vw",
        webkitTextStroke: "0",
        color: "rgb(24, 24, 24)",


      },
    });
  } else {
    TweenLite.to(letter, 1, {
      stagger: 0.03,
      css: {
        x: "0vw",
        webkitTextStroke: "0",
        color: "rgb(255,255,255)",

      },
    });
  }

  TweenLite.to(svg, 1, {
    css: {
      x: "0vw",
    },
  });
};
