import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Components
import Layout from "../components/layout/layout";
import ThreeCol from "../components/threeColumn";
import ServiceHeader from "../components/serviceHeader";
import ServiceContent from "../components/serviceContent";
import Viewport from "../components/layout/viewport";
import ContactForm from "../components/contactform";

// Data
import OneSmall from "../images/Zeyad Gohary.jpeg";
import OneMed from "../images/Zeyad Gohary.jpeg";
import OneLarge from "../images/Zeyad Gohary.jpeg";

import TwoSmall from "../images/Personal/05_360.jpeg";
import TwoMed from "../images/Personal/05_720.jpeg";
import TwoLarge from "../images/Personal/05_1440.jpg";

// Animation & Function

import { onLoad, onResize, onScroll } from "../util/helper";

// Data
import data from "../data/about.json";

const useStyles = makeStyles((theme) => ({
  gridDiv: {
    paddingTop: "20vh",
    width: "75vw",
    margin: "0px auto",
    [theme.breakpoints.down("md")]: {
      paddingTop: "10vh",
      width: "90vw",

    },

    "& img": {
      width: "100%",
    },
  },
  list: {
    columnCount: "3",
    textAlign: "left",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      columnCount: "2",
    },
    [theme.breakpoints.down("sm")]: {
      columnCount: "1",
    },
  },
}));

function About(props) {
  const classes = useStyles();

  useEffect(() => {
    document.body.style.overflowY = "unset";
    onLoad();
    onResize();

    return () => {
      document.body.style.overflowY = "unset";
      document.body.style.height = "unset";
      window.removeEventListener("resize", onResize);
      document.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <>
      <Layout pageTitle="Zeyad Gohary - Photographer" description={data.description}></Layout>

      <Viewport>
        <ServiceContent>
          <ServiceHeader page={data} 
                      imgsmall={TwoSmall}
            imgmed={TwoMed}
            imglarge={TwoLarge}
          />

          <ThreeCol data={data} trigger="team-col" />

          <Grid container spacing={4} className={classes.gridDiv}>
            <Grid item xs={12}>
            <hr />
            <br />

              <img
                className={`workproject__img ${classes.image}`}
                src={OneSmall}
                alt="Zeyad Gohary"
                title="Zeyad Gohary"
                srcSet={`${OneSmall} 360w, ${OneMed} 720w, ${OneLarge} 1440w`}
                sizes="40vw"
              />
            </Grid>
            <Grid item xs={12}>
              <hr />
              <br />
              <span className="uppercase">
                <b>Education</b>
              </span>
              <p>
                International Center of Photography, New York, NY <br /> General
                Studies 1 Year Certificate, June 2016
              </p>
              <p>
                American University in Cairo <br /> B.A. in Business
                Administration; Minor in Economics, June 2010
              </p>
            </Grid>
            <Grid item xs={12}>
              <hr />
              <br />
              <span className="uppercase">
                <b>Clients</b>
              </span>
            </Grid>
            <ul className={classes.list}>
              {data.customer.map((item) => (
                <li style={{ listStyle: "none" }}>
                  <p className=" uppercase">{item}</p>
                </li>
              ))}
            </ul>
            <Grid item xs={12}>
              <hr />
              <br />
              <span className="uppercase">
                <b>Publications & Exhibitions</b>
              </span>
            </Grid>

            <ul>
              <li style={{ listStyle: "none" }}>
                <p>
                  Exhibition Curator: Liberty Hall, The Ace Hotel – New York{" "}
                </p>
              </li>
              <li style={{ listStyle: "none" }}>
                <p>Solo Exhibition: SoAM Studios – New York</p>
              </li>
              <li style={{ listStyle: "none" }}>
                <p>Solo Exhibition: Liberty Hall, The Ace Hotel – New York</p>
              </li>
              <li style={{ listStyle: "none" }}>
                <p>Group Exhibition: International Center of Photography </p>
              </li>
              <li style={{ listStyle: "none" }}>
                <a href="https://www.nytimes.com/2016/04/17/fashion/weddings/ellen-brooks-alexandre-shehata.html">
                  <p>New York Times Wedding Registry April 2016</p>{" "}
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <p>Interview – Cairo Scene April 2015</p>
              </li>
              <li style={{ listStyle: "none" }}>
                <p>
                  Published in “18 Days in Tahrir: Stories from Egypt's
                  Revolution” June 2011
                </p>
              </li>
            </ul>
          </Grid>
          <ContactForm />
        </ServiceContent>
      </Viewport>
    </>
  );
}

export default About;
