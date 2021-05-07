import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { gsap } from "gsap";

// Data
import home from "../data/home.json";

import imgsmall from "../images/ZG8167_360.jpeg";
import imgmed from "../images/ZG8167_720.jpeg";
import imglarge from "../images/ZG8167_1440.jpg";

const useStyles = makeStyles((theme) => ({
  gridDiv: {
    height: "100vh",
    alignContent: "center",
    paddingLeft: "10vw",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
      margin: "0 auto",
      padding: "0",
    },
  },
  heroImgWraper: {
    position: "absolute",
    right: "0px",
    top: "15vh",
    height: "85vh",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      top: "15vh",

    },
    "& img": {
       width: "150%",
      opacity: 0,
      [theme.breakpoints.down("sm")]: {
        width: "0%",
      },

    }
  },
  heading: {
    display: "block",
    marginRight: "5vw",
    opacity: "0",
    textShadow: "5px -5px white",

    [theme.breakpoints.down("sm")]: {
      marginRight: "20vw",
      marginTop: "-15vh",
    },
  },
  text: {
    display: "block",
    paddingTop: "50px",
    "& p": {
      opacity: "0",
    },
  },
  scroll: {
    position: "relative",
    top: "100px",
    opacity: "0",

    "&:after": {
      position: "absolute",
      content: '""',
      height: "1px",
      bottom: "50%",
      background: "#616161",
      marginLeft: "30px",
      animation: "cta__animate 2000ms infinite",
    },
  },
}));

export default function HomeHeader(props) {
  const classes = useStyles();
  let tl = gsap.timeline();

  let content = document.querySelectorAll(".home__text");
  let header = document.querySelector(".home__header");
  let link = document.querySelector(".scroll");
  let img = document.querySelector(".hero__img");

  tl
  .to(header, 1, { x: 15, opacity: 1 },"<0.5")
  .to(img, 3.5, {x: "-15%", opacity: 1, ease: "power2"}, "<0.5")
    .to(
      content, 0.5,
      {
        opacity: 1,
        y: -10,
        stagger: 0.2,
        ease: "power2",
      },
      "<0.15"
    )
    .to(link, 1, { y: -10, opacity: 1 }, "<1.5");

  return (
    <>
      <Grid container spacing={0} className={`home__div ${classes.gridDiv}`}>
        <div className={`${classes.heroImgWraper}`}>
          <img
            className={`hero__img ${classes.heroImg}`}
            src={imglarge}
            alt="Women in sand"
            title="Women in sand"
            srcSet={`${imgsmall} 360w, ${imgmed} 720w, ${imglarge} 1440w`}
            sizes="50vw"
          />
        </div>
        <Grid
          item
          xs={12}
          className={` inner--parallax ${classes.heading} home__header`}
        >
          <h1 className={`font__big letter`}>{home.heading}</h1>

          <br />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} className={classes.text}>
          {home.text.split("\n").map((text, index) => (
            <p key={text} className="home__text">
              {text}
            </p>
          ))}

          <span className={`font__small scroll  ${classes.scroll}`}>
            Scroll to explore
          </span>
        </Grid>
      </Grid>
    </>
  );
}
