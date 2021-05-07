import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Components
import Layout from "../components/layout/layout";
import HomeHeader from "../components/homeHeader";
import ServiceContent from "../components/serviceContent";
import Viewport from "../components/layout/viewport";
import Contactform from "../components/contactform";
import ServiceDetail from "../components/serviceDetail";

// Animation
import { onLoad, onResize, onScroll } from "../util/helper";

// Data
import home from "../data/home.json";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    width: "75vw",
    minHeight: "100vh",
    paddingTop: "50vh",
    margin: "0 auto",
    alignItems: "center",
    alignSelf: "center",
    opacity: "1",

    [theme.breakpoints.down("md")]: {
      paddingTop: "0vh",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0",
      width: "90vw",
      margin: "0 auto",
    },
  },
  text: {
    display: "flex",
    justifyContent: "center",
    "& h2": {
      margin: "30px 0",
    },
  },

  title: {
    "& a": {
      display: "block",
      minHeight: "7vh",
    },
    "& h1": {
      width: "fit-content",
      margin: "0px auto",
      opacity: "0",
      display: "inline-flex",
      minWidth: "10px",
      [theme.breakpoints.down("xs")]: {
        minWidth: "5px",
        fontSize: "1.7rem",
      },
    },
  },
  link: {
    "&:hover svg": {
      width: "40px",
      transition: "width 0.5s linear",
    },
    "& svg": {
      width: "0px",
      paddingLeft: "40px",
      [theme.breakpoints.down("xs")]: {
        opacity: "0",
        width: "40px",
        paddingLeft: "5px",
      },
    },
    "& g": {
      fill: "#fff",
    },
  },
}));

function Home(props) {
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
    <Layout pageTitle="Zeyad Gohary Photography, Egypt" description={home.description}>
      <Viewport>
        <ServiceContent>
          <HomeHeader />
          <Grid
            className={`${classes.gridContainer} service__overview `}
            container
            justify="center"
            id="services"
          >
            <Grid item xs={12} sm={10} lg={4} className={`${classes.text}`}>
              <p className={`${classes.offer} font__big uppercase`}>
                Port
                <br /> fol 
                <br /> io
              </p>
            </Grid>
            <ServiceDetail />
          </Grid>
          <Contactform />
        </ServiceContent>
      </Viewport>
    </Layout>
  );
}

export default Home;
