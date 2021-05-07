import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TweenLite, Power1 } from "gsap";
// Components
import Layout from "../components/layout/layout";
import Contactform from "../components/contactform";
import ServiceContent from "../components/serviceContent";
import Viewport from "../components/layout/viewport";

const useStyles = makeStyles((theme) => ({
  gridDiv: {
    paddingTop: "10vh",
    height: "100vh",
    width: "75vw",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      paddingTop: "12vh",
      margin: "0px auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
      margin: "0px auto",
    },
    "& hr": {
      margin: "3vh 0",
      [theme.breakpoints.down("md")]: {
        margin: "2vh 0",
      },
    },
   
  },

  rotate: {
    transform: "rotate(180deg)",
  },
}));
function Contact(props) {
  useEffect(() => {
    document.body.style.overflowY = "unset";

    return () => {
      document.body.style.overflowY = "unset";
    };
  });


  let button = document.querySelector(".contact__button");
  TweenLite.to(button, 2, {
    rotate: 0,
    ease: Power1.easeOut,
  });
  const classes = useStyles();

  return (
    <>
      <Layout
        pageTitle="Contact"
        description="Contact us to work with Zeyad Gohary Photography."
      ></Layout>

      <Viewport>
        <ServiceContent>
          <Grid container spacing={0} className={`${classes.gridDiv}`}>
            <Grid xs={12} sm={6} lg={6} className={`${classes.form}`}>
              <Contactform />
            </Grid>
          </Grid>
        </ServiceContent>
      </Viewport>
    </>
  );
}

export default Contact;
