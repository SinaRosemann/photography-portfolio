import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { gsap, TweenLite, Power1 } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const useStyles = makeStyles((theme) => ({
  workproject: {
    width: "75vw",
    margin: "50vh auto",
    [theme.breakpoints.down("sm")]: {
      margin: "20vh auto",
      width: "90vw",
    },
    "& p": {
      margin: "0",
      position: "relative",
      width: "fit-content",
    },
  },
  background: {
    backgroundColor: "#fcfcfa",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "0",
  },


  imglink: {
    position: "relative",
  },
  link: {
    [theme.breakpoints.down("xs")]: {
      minWidth: "70px",
    },
    "&:before": {
      position: "absolute",
      content: '""',
      height: "2px",
      bottom: "-4px",
      width: "100%",
      background: "#181818",
    },

    "&:hover:before": {
      animation: "linkunderline 0.5s linear",
    },
  },
  imageDiv: {
    overflow: "hidden",
    maxHeight: "100vh",
    alignItems: "center",
    paddingLeft: "1px",
    marginBottom: "10px",
    [theme.breakpoints.down("md")]: {
      maxHeight: "unset",
    },
    "& img": {
      width: "100%",
    },

    "& p": {
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
  },
  image: {
    transform: "scale(1.05)",
    opacity: "1",
    [theme.breakpoints.down("md")]: {
      transform: "scale(1)",
    },
  },
}));

export default function WorkProjectLeft(props) {
  const classes = useStyles();

    gsap.registerPlugin(ScrollTrigger);

    const imageAnimation = () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${props.trigger}`,
        start: "top center", // when the top of the trigger hits the top of the viewport
        delay: 0,
      },
    });
    tl.to(`.${props.trigger} .background__red`, {
        duration: 1.5,
        opacity: 0,
        ease: "power1",
      },'+=0.3');

  };

  imageAnimation();

  const onHover = (node) => {
    TweenLite.to(`.${node} img`, 1, {
      css: {
        scale: 1.02,
      },
      delay: 0,
      ease: Power1.linear,
    });
  };

  const onLeave = (node) => {
    TweenLite.to(`.${node} img`, 1, {
      css: {
        scale: 1.05,
      },
      delay: 0,
      ease: Power1.linear,
    });
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        alignItems="flex-end"
        justify={props.position}
        className={`${classes.workproject}`}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={props.size}
          className={`${classes.imageDiv}`}
        >
          <p
            className={`${classes.imglink} ${props.trigger}`}
            onMouseEnter={(node) => onHover(props.trigger)}
            onMouseLeave={(node) => onLeave(props.trigger)}
          >
            <img
              className={`workproject__img ${classes.image}`}
              src={props.imglarge}
              alt={props.title}
              title={props.alt}
              srcSet={`${props.imgsmall} 300w, ${props.imgmed} 720w, ${props.imglarge} 1440w`}
              sizes="40vw"
            />
            <div className={`${classes.background} background__red`}></div>
          </p>
        </Grid>
      </Grid>
    </>
  );
}
