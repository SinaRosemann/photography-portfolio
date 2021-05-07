import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isMobile } from "react-device-detect";
import { gsap, Power1 } from "gsap";

const useStyles = makeStyles((theme) => ({
  gridDiv: {
    maxWidth: "75vw",
    margin: "0 auto",
    alignSelf: "center",
    minHeight: "95vh",
    padding: "0px 80px",
    opacity: "0",

    [theme.breakpoints.down("sm")]: {
      padding: "0px 40px",
      minHeight: "65vh",

    },
    [theme.breakpoints.down("xs")]: {
      padding: "5vh 0px",
      minHeight: "85vh",
      maxWidth: "90vw",
    },
    "& hr": {
      width: "0",
      margin: "0",
    },
  },
}));

export default function TwoColumnContent(props) {
  const classes = useStyles();
  gsap.registerPlugin(ScrollTrigger);
  let appear = gsap.timeline({
    scrollTrigger: {
      trigger: `.twoCol__div`,
      start:  "center bottom", // when the top of the trigger hits the top of the viewport
      delay: 0,
    },
  });
  appear.addLabel("go")
                .to(`.twoCol__div `, 1, {
                  opacity: 1,
                  y: -20,
                  delay: 0,
                  ease: Power1.easeOut,
                })
  return (
    <>
      <Grid
        container
        spacing={4}
        alignContent="center"
        className={`${classes.gridDiv} twoCol__div`}
      >
      <Grid item xs={12}>
          <hr />
        </Grid>
        {props.header && 
          <Grid item xs={12}>
        <span className="uppercase font__red">{props.header}</span>
        </Grid>} 
              {props.data.split("\n").map((item) => (
                <Grid item xs={12} sm={6} lg={6} className="twoCol__box" style={{ opacity: 0 }}>
                  <h2>{item}</h2>
                </Grid>
                ))}
      </Grid>

    </>
  );
}
