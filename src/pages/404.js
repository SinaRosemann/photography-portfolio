import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// Components
import Layout from "../components/layout/layout";
import ServiceContent from "../components/serviceContent";
import Viewport from "../components/layout/viewport";


const useStyles = makeStyles((theme) => ({
  gridDiv: {
    paddingTop: "20vh",
    width: "75vw",
    margin: "0px auto",
    [theme.breakpoints.down("md")]: {
      paddingTop: "15vh",
      width: "90vw",
    },
  },
  button: {
    height: "300px",
    width: "300px",
    border: "1px solid #fff",
    borderRadius: "50%",
    alignContent: "center",
    backgroundColor: "transparent",
    cursor: "pointer",

    [theme.breakpoints.down("sm")]: {
      height: "200px",
      width: "200px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "100px",
      width: "100px",
      marginBottom: "30px",
    },

    "& svg": {
      width: "150px",
      [theme.breakpoints.down("sm")]: {
        width: "100px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "70px",
        transform: "rotate(60deg)",
      },
    },
  },
}));

function Team(props) {
  const classes = useStyles();

  useEffect(() => {
    document.body.style.overflowY = "unset";

    return () => {
      document.body.style.overflowY = "unset";
      document.body.style.height = "unset";

    };
  });

  return (
    <>
      <Layout pageTitle="404 - Page not found"></Layout>
      <Viewport>
        <ServiceContent>
        <span className="content--inner__detail header__container threeColumn__container"></span>
          <Grid container className={classes.gridDiv} justify="center">
            <Grid item xs={12} sm={10} lg={8}>
              <h1 className="font__big">/404 </h1>
              <h1>Something went wrong here.</h1>
              <p> <Link to="/">Please go back</Link> </p>
    
            </Grid>
          </Grid>
        </ServiceContent>
      </Viewport>
    </>
  );
}

export default Team;
