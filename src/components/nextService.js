import React from "react";
import Grid from "@material-ui/core/Grid";
import { gsap } from "gsap";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  next: {
    width: "65vw",
    margin: "0px auto",
    paddingBottom: "100px",
    position: "relative",
    "& hr": {
      zIndex: 1,
      borderTop: "1px solid #fff",
      borderLeft: "1px solid #fff",
      borderRight: "1px solid #fff",
      width: 0,
    },

    [theme.breakpoints.down("xs")]: {
      width: "90vw",
      paddingBottom: "60px",
    },
  },

  flex: {
    display: "flex",
    justifyContent: "space-between",

    "& svg": {
      transform: "scale(0.6)",
      transition: "all 0.5s ease-in",
    },
  },

  allServices: {
    [theme.breakpoints.down("xs")]: {
      width: "140px",
      "& p": {
        margin: "0",
      },
      "& span": {
        display: "flex",
      },
    },
  },
  image: {
    width: "35vw",
    position: "absolute",
    left: "20%",
    top: "-100%",
    zIndex: "-1",
    opacity: 0,
  },
}));

export default function NextService(props) {
  const classes = useStyles();

  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: `.container__next`,
      start: "top center", // when the top of the trigger hits the top of the viewport
      delay: 0,
    },
  });
  tl.to(`.line__next`, {
    duration: 2,
    width: "100%",
    ease: "power1",
  }).to(
    `#nextproject__img`,
    {
      duration: 2,
      opacity: "1",
    },
    "+=0.5"
  );

  // Move Image
  const maxRot = 50;
  const setX = gsap.quickSetter("#nextproject__img", "translateY", "px");
  const setY = gsap.quickSetter("#nextproject__img", "translateX", "px");

  gsap.set("#nextproject__img", { transformOrigin: "center center" });

  let getPercent;
  function resize() {
    getPercent = gsap.utils.mapRange(0, window.innerWidth, -1, 1);
  }

  window.addEventListener("mousemove", (e) => {
    const percent = getPercent(e.pageX);
    setX(percent * maxRot);
    setY(percent * maxRot);
  });

  window.addEventListener("resize", resize);
  resize();

  //Hover Animation

  function play() {
    let arrow = document.querySelector("#nextService__arrow");
    arrow.style.transform = "scale(0.6) translateX(20px)";
  }

  function exit() {
    let arrow = document.querySelector("#nextService__arrow");

    arrow.style.transform = "scale(0.6) translateX(0px)";
  }

  return (
    <>
      <div className={classes.gridContainer}>
        <Grid item className={`container__next ${classes.next}`}>
          <Link
            to={props.link}
            className={classes.allServices}
            style={{ display: `${props.display}` }}
            onMouseEnter={(node) => play()}
            onMouseLeave={(node) => exit()}
          >
            <hr className="line__next" />
            <div className={classes.flex}>
              <span className=" font__small">see more</span>
              {!isMobile && (
                <div>
                  <img
                    id="nextproject__img"
                    className={` ${classes.image}`}
                    src={props.imglarge}
                    alt={props.title}
                    title={props.alt}
                    srcSet={`${props.imgsmall} 360w, ${props.imgmed} 720w, ${props.imglarge} 1440w`}
                    sizes="40vw"
                  />
                </div>
              )}

              <span>
                {props.next}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48px"
                  height="10px"
                  viewBox="0 0 48 10"
                  id="nextService__arrow"
                  style={{ transition: "1 ease-out" }}
                >
                  <path
                    fill="#1E1B1C"
                    d="M45.887,0.002H0.993C0.445,0.002,0,0.447,0,0.996s0.446,0.995,0.994,0.995h43.681l-5.961,6.337 c-0.346,0.373-0.328,1.039,0.043,1.404c0.385,0.371,1.031,0.355,1.416-0.041l7.557-8.032C47.859,1.504,48,1.233,48,0.935 c0-0.312-0.156-0.581-0.422-0.723C47.195,0.004,46.346-0.008,45.887,0.002z"
                  />
                </svg>
              </span>
            </div>
          </Link>
        </Grid>
      </div>
    </>
  );
}
