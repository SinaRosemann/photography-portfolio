import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { gsap, Power1 } from "gsap";

const useStyles = makeStyles((theme) => ({
  gridDiv: {
    width: "75vw",
    margin: "0 auto",
    alignSelf: "center",
    paddingTop: "15vh",
    display: " block",
    position: "relative",
    opacity: "0",
    [theme.breakpoints.down("md")]: {
      padding: "25vh 0 5vh 0",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
    },
    "& hr": {
      width: "0",
      margin: "0",
    },
    "& li": {
      paddingLeft: "10px",
    },
  },
  button: {
    position: "absolute",
    left: "50%",
    bottom: "0",
  },
}));

export default function ThreeCol(props) {
  const classes = useStyles();

  let appear = gsap.timeline({
    scrollTrigger: {
      trigger: `.threeColumn__container`,
      start: "center bottom", // when the top of the trigger hits the top of the viewport
      delay: 0,
    },
  });
  appear.addLabel("go").to(`.threeColumn__container `, 2, {
    opacity: 1,
    y: -20,
    delay: 0,
    ease: Power1.easeOut,
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: `.${props.trigger}`,
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      delay: 0,
    },
  });
  tl.addLabel("start")
    .from(`.${props.trigger} hr`, {
      width: "0",
    })
    .addLabel("go")
    .to(`.${props.trigger} hr`, {
      duration: 1,
      width: "100%",
    })
    .addLabel("end")
    .to(`.${props.trigger} hr`, {
      width: "100%",
    });

  return (
    <>
      <Grid
        container
        spacing={4}
        justify="flex-start"
        className={`${classes.gridDiv} threeColumn__container`}
      >
        <Grid item xs={12} sm={8} md={6} lg={5} className={`${props.trigger}`}>
          <hr />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={5}>
          {props.data.detail_first.split("\n").map((text) => (
            <p>{text}</p>
          ))}
        </Grid>

      </Grid>
    </>
  );
}
