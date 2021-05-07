import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

// Components
import SocialShare from "../components/layout/SocialShare";

const useStyles = makeStyles((theme) => ({
  gridHeader: {
    width: "75vw",
    margin: "0 auto",
    alignSelf: "center",
    paddingTop: "20vh",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0vh",
      width: "90vw",
    },
  },
  gridDiv: {
    width: "75vw",
    margin: "0 auto",
    alignSelf: "center",    
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },

  },
  text: {
    marginTop: "8vh",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },
  },
  list: {
    overflow: "hidden",
    maxHeight: "60vh",
  },
  social: {
    marginBottom: "8vh",
  },
}));
function WorkDetail(props) {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        className={`${classes.gridHeader} header__container`}
        spacing={4}
      >
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <h1>{props.data.title}</h1>
          <span className="font__red">{props.data.date}</span>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          style={{ alignSelf: "flex-end" }}
        >
          <span>
            Client: <br />
            {props.data.client}
          </span>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          style={{ alignSelf: "flex-end" }}
        >
          {props.data.tags.map((item) => (
            <span className="font__red">
              {item}
              <br />
            </span>
          ))}
        </Grid>
      </Grid>

      <Grid
        container
        className={`${classes.gridDiv}  `}
        spacing={4}
      >
        {" "}
        <Grid  xs={12}
            sm={12}
            md={9}
            lg={9}>
          <hr />
        </Grid>
        {props.data.text.split("\n").map((item) => (
          <Grid
            className={`${classes.text}`}
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
          >
            <p>{item}</p>
          </Grid>
        ))}
        <Grid item className={`${classes.social}`} xs={12}>
          <SocialShare />
        </Grid>
      </Grid>
    </>
  );
}

export default WorkDetail;
