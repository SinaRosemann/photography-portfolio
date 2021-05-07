import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { isMobile } from "react-device-detect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useStyles = makeStyles((theme) => ({
  gridDiv: {
    height: "100vh",
    width: "75vw",
    margin: "0px auto",
    alignContent: "center",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
    },
  },
  title: {
    opacity: "0",
    transform: "translateY(-50px)",
    minWidth: "30px",
    textShadow: "1px -5px white",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      minWidth: "unset",
      margin: "0 5vw 0 0",
    },
  },
  thisService: {
    display: "inline-flex",
    zIndex: "1000",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  headerImgWrapper: {
    height: "130vh",
    width: "40vw",
    overflow: "hidden",
    top:80,
    position: "absolute",
    right: "-12.5vw",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",

    },
  },
  headerImg: {
    height: "130vh",
    position: "absolute",
    top: 0,
    opacity: 0,
    [theme.breakpoints.down("md")]: {
      height: "110vh",

    },
  },
  detail: {
    opacity: "0",
    display: "flex",
    justifyContent: "center",
  },
  scroll: {
    position: "absolute",
    width: "60px",
    left: "-7vw",
    bottom: "50px",
    opacity: "1",
    transform: "translateY(20vh)",
    "& svg": {
      transform: "rotate(90deg)",
    },
    [theme.breakpoints.down("md")]: {
      bottom: "140px",


    },
  },
}));

export default function ServiceHeader(props) {
  const classes = useStyles();

  let str = props.page.title;
  let res = str.split("");
  let resMobile = str.split(" ");
  let tl = gsap.timeline();

  tl.to(".letter", {
    duration: 1.8,
    opacity: 1,
    y: 0,
    stagger: 0.15,
    delay: 0.5,
    ease: "power1",
  })
  .to(".header__img", {
    duration: 1.5,
    opacity: 1,
  },  "<1")
    .to(
      ".detail",
      {
        duration: 1,
        opacity: 1,
        ease: "power1",
      },
      "<0.7"
    )
    .to(
      ".scroll",
      {
        y: 0,
        ease: "power1",
        duration: 1,
      },
      "<0.5"
    );

  gsap.registerPlugin(ScrollTrigger);
  gsap.to(`.scroll`, {
    scrollTrigger: {
      trigger: `.threeColumn__container`,
      toggleActions: "play complete reverse reset",
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      delay: 0,
    },
    opacity: 0,
  });

  return (
    <>
      <Grid
        container
        spacing={0}
        className={`${classes.gridDiv} header__container`}
      >
        <Grid item xs={10} className={`${classes.thisService}`}>
          {!isMobile
            ? res.map((letter) => (
                <h1 className={`font__big uppercase letter ${classes.title}`}>
                  {letter}
                </h1> 
              ))
            : resMobile.map((letter) => (
                <h1 className={`font__big uppercase letter ${classes.title}`}>
                  {letter}
                </h1>
              ))}
          <p className={`font__small scroll  ${classes.scroll}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48px"
              height="10px"
              viewBox="0 0 48 10"
            >
              <path
                fill="#1E1B1C"
                d="M45.887,0.002H0.993C0.445,0.002,0,0.447,0,0.996s0.446,0.995,0.994,0.995h43.681l-5.961,6.337 c-0.346,0.373-0.328,1.039,0.043,1.404c0.385,0.371,1.031,0.355,1.416-0.041l7.557-8.032C47.859,1.504,48,1.233,48,0.935 c0-0.312-0.156-0.581-0.422-0.723C47.195,0.004,46.346-0.008,45.887,0.002z"
              />
            </svg>
          </p>
        </Grid>
        <div className={`${classes.headerImgWrapper}`}>
           <img
              className={`header__img ${classes.headerImg}`}
              src={props.imglarge}
              alt={props.title}
              title={props.alt}
              srcSet={`${props.imgmed} 360w, ${props.imgmed} 720w, ${props.imglarge} 1440w`}
              sizes="40vw"
            />
        </div>
        <Grid
          item
          xs={7}
          lg={10}
          className={`${classes.detail} detail  inner--parallax`}
        >
          <Grid sm={8} md={8} lg={3}>
            {isMobile && <br />}
            {props.page.product.map((item) => (
              <p>{item}</p>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
