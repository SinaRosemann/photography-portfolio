import { gsap } from "gsap";
import hoverEffect from "hover-effect";

// data
import Imaginari from "../images/Imaginari/07_720.jpeg";
import FirstLight from "../images/First Light/First Light ZTG 0591-Edit_720.jpeg";
import Personal from "../images/Personal/06_720.jpeg";
import Night from "../images/Night/09_720.jpeg";
import Human from "../images/Human/Human_Walk_030_720.jpg";
import Stage from "../images/On Stage/15_720.jpeg";

// functions
import { setDarkMode, setLightMode } from "../util/darkmode"


export const play = (pathname, node, appears) => {
  window.loadPromise.then(() =>
    requestAnimationFrame(() => {
      let tl = gsap.timeline();
      const contentInnerDetail = document.getElementsByClassName(
        "content--inner_detail"
      )[0];

      tl.to(contentInnerDetail, {
        delay: 0,
        duration: 0.75,
        opacity: 1,

        ease: "power1",
      });

      const newImage = (image, selector, bool) => {
        var myAnimation = new hoverEffect({
          parent: document.querySelector(selector),
          image1: image,
          image2: image,
          displacementImage: image,
          video: bool,
          imagesRatio: 961 / 1440,
          intensity: 0.2,
        });
      };
      if (pathname === "/") {
        newImage(Imaginari, `.imaginari`, false);
        newImage(Personal, `.personal`, false);
        newImage(Night, `.night`, false);
        newImage(FirstLight, `.first-light`, false);
        newImage(Human, `.human`, false);
        newImage(Stage, `.on-stage`, false);
      }

      let darkMode = localStorage.getItem("darkMode");

      if (darkMode === "enabled") {
        setDarkMode()
        
      }else {
        setLightMode()
      }
    })
  );
};

export const exit = (node) => {
  let tl = gsap.timeline();

  const contentInnerDetail = document.getElementsByClassName(
    "content--inner_detail"
  )[0];

  tl.set(contentInnerDetail, {
    delay: 0,
    opacity: 0,
  });
};
