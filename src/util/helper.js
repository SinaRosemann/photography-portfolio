import { gsap } from "gsap";
import { isMobile } from "react-device-detect";

let html = document.documentElement;
let body = document.body;
let scroller = {
  target: document.querySelector(".scroll-container"),
  parallax: document.querySelectorAll(".inner--parallax"),
  down: document.querySelectorAll(".inner--parallax__down"),
  slow: document.querySelectorAll(".inner--parallax__slow"),
  letter: document.querySelectorAll(".letter"),
  ease: 0.05, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};
let requestId = null;

gsap.set(scroller.target, {
  rotation: 0.01,
  force3D: true,
});
export const onScroll = () => {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
};
export const onResize = () => {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
};

export const onLoad = () => {
  updateScroller();
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll);
};

export const updateScroller = () => {
  var resized = scroller.resizeRequest > 0;
  var scroll = scroller.scrollRequest > 0;

  scroller.target = document.querySelector(".scroll-container");
  scroller.parallax = document.querySelectorAll(".inner--parallax");
  scroller.down = document.querySelectorAll(".inner--parallax__down");
  scroller.slow = document.querySelectorAll(".inner--parallax__slow");
  scroller.letter = document.querySelectorAll(".letter");

  if (!isMobile) {
    if (resized || scroll) {
      if (document.querySelector(".scroll-container")) {
        let height = scroller.target.clientHeight;
        body.style.height = height + "px";
        scroller.resizeRequest = 0;
      }
    }
  }

  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }

  if (scroller.target !== undefined) {
    gsap.set(scroller.target, {
      y: -scroller.y,
    });
  }
  if (scroller.parallax[0] !== undefined) {
    gsap.set(scroller.parallax, {
      y: -scroller.y * 0.1,
    });
  }
  if (scroller.down[0] !== undefined) {
    gsap.set(scroller.down, {
      y: scroller.y * 0.08,
    });
  }
  if (scroller.slow[0] !== undefined) {
    gsap.set(scroller.slow, {
      y: -scroller.y * 0.03,
    });
  }
  if (scroller.letter[0] !== undefined) {

      if(scroller.letter[0].style.color === "rgb(252, 252, 250)"){
        gsap.set(scroller.letter, {
          textShadow:`1px ${Math.round(-scroller.y * 0.04 - 5)}px black`
        });
      }else {
        gsap.set(scroller.letter, {
          textShadow:`1px ${Math.round(-scroller.y * 0.04 - 5)}px white`
        });
      }
      
  }

  requestId =
    scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
};
