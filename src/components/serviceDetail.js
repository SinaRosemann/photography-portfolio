import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import Grid from "@material-ui/core/Grid";
import { isMobile } from "react-device-detect";

//Components
import Arrow from "../components/layout/arrowSvg";

//Data 
import data from "../data/portfolio.json";

// util
import { seeMoreEnter, seeMoreLeave } from "../util/image";

const useStyles = makeStyles((theme) => ({
  gridDiv: {
    width: "75vw",
    margin: "0 auto",
    alignSelf: "center",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "15vh",
      width: "90vw",
    },

    "& .right": {
      marginLeft: "50%",
      justifyContent: "flex-end",
      [theme.breakpoints.down("md")]: {
        margin: " 10% 0 10% 20%",
      },
      [theme.breakpoints.down("xs")]: {
        margin: "10% 0 10% 0",
      },
    },
    "& .left": {
      marginRight: "50%",
      [theme.breakpoints.down("md")]: {
        margin: "10% 0 10% 0",
      },
      [theme.breakpoints.down("xs")]: {
        margin: "10% 0 10% 0",
      },
    },
  },
  more: {
    position: "absolute",
    display: "flex",
    width: "100px",
    height: "100px",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    opacity: "0",

    "& svg": {
      width: "0px",
    },
  },
  imagePort: {
    height: "65vh",
    width: "28vw",
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "60vh",
      width: "55vw",
      minHeight: "500px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "70vh",
      width: "90vw",
      minHeight: "300px",
    },
  },
  imageHor: {
    height: "50vh",
    width: "36vw",
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "40vh",
      minHeight: "500px",
      width: "65vw",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40vh",
      width: "90vw",
      minHeight: "300px",
    },
  },
  text: {
    width: "100%",
    display: "inline-flex",
    padding: "20px 0px",
    justifyContent: "space-between",
    position: "absolute",
    bottom: "-68px",
  },
  circle: {
    position: "absolute",
    transform: "translate(-55px, -15px)",
  },
}));

export default function ServiceDetail(props) {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        className={`threeColumn__container ${classes.gridDiv}`}
      >
        {!isMobile ? (
          <>
            {data.offer.map((content) => (
              <Grid
                container
                className={
                  content.slug === "personal" || content.slug === "firs-light"
                    ? `${content.class} ${classes.inlineDiv} inner--parallax__down`
                    : content.slug === "imaginari" ||
                      content.slug === "human" ||
                      content.slug === "on-stage"
                    ? `${content.class} ${classes.inlineDiv} inner--parallax`
                    : `${content.class} ${classes.inlineDiv} inner--parallax__slow`
                }
              >
                <Link to={slugify(content.title)} className={`${classes.link}`}>
                  <Grid
                    item
                    xs={12}
                    className={`project__image ${classes.imageDiv}`}
                  >
                    <div
                      className={
                        content.slug === "first-light" ||
                        content.slug === "human"
                          ? `${classes.imageHor} ${content.slug}`
                          : content.slug === "imaginari" ||
                            content.slug === "night"
                          ? `${classes.imagePort} ${content.slug}`
                          : content.slug === "personal"
                          ? `${classes.imageHor} ${content.slug}`
                          : `${classes.imageHor} ${content.slug}`
                      }
                      onMouseEnter={() =>
                        seeMoreEnter(`.${content.slug} .project__text`)
                      }
                      onMouseLeave={() =>
                        seeMoreLeave(
                          `.${content.slug} .project__text`,
                          `${content.no}`
                        )
                      }
                    >
                      <Grid
                        item
                        xs={12}
                        className={`project__text ${classes.text}`}
                      >
                        <sup className="font__small">project{content.no}</sup>
                        <svg
                          width="200.21875px"
                          height="45px"
                          preserveAspectRatio="none"
                          viewBox="0 0 143 53"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={classes.circle}
                        >
                          <path
                            d="M35.9456 16.4037C60.7313 6.86512 90.3297 4.29919 112.589 9.82151C127.268 13.4473 144.714 22.0375 141.345 30.9067C136.652 43.2901 94.3002 51.6014 62.4157 50.1511C51.8277 49.6491 41.2396 48.0314 31.9751 45.5771C16.093 41.3935 1.41412 34.1978 1.29381 25.3286C1.17349 17.073 14.0476 9.76573 28.7265 5.7495C33.058 4.5781 37.7504 3.57404 42.5631 2.79311C60.8516 -0.274842 75.8914 1.39859 81.9074 2.06796C86.2388 2.56999 103.565 4.80122 117.883 12.6663C124.38 16.1805 131.358 19.9736 132.923 26.3327C133.283 27.783 135.329 37.6004 120.289 45.354C108.979 51.0994 94.6611 51.4341 80.2229 51.8246C68.3113 52.1592 49.1807 52.6613 32.9376 46.1907C30.1703 45.0751 8.27229 36.0943 13.6866 24.5477C16.5743 18.5233 25.7185 14.3955 28.6062 13.1126C36.7878 9.43104 44.9695 8.14808 52.3089 6.97668C58.5655 6.08418 71.8006 4.07607 87.803 5.58216C93.8189 6.13997 105.61 7.31137 115.958 12.2201C118.845 13.6146 127.027 17.6308 129.915 24.4919C130.877 26.8347 132.562 30.8509 129.433 35.1461C123.538 43.0669 104.287 46.1349 95.3831 47.641C88.1639 48.8124 73.7257 51.211 57.9639 48.7008C38.5926 45.6886 17.4165 35.3692 23.3121 24.0456C26.6811 17.5193 38.1113 12.3874 49.6619 10.1004C66.8675 6.64199 81.0651 10.1004 83.3512 10.6582"
                            stroke="#181818"
                            strokeWidth="0.5"
                            className="path__circle"
                            style={{
                              strokeDashoffset: "889.036",
                              strokeDasharray: "889.036",
                            }}

                          ></path>
                        </svg>
                        <h3
                          style={{
                            display: "inline-flex",
                            minWidth: "200px",
                            textShadow: "1px -1px white",
                            alignItems: "flex-end",
                            transform: "rotate(270deg) translate(100px, 120px)",
                          }}
                        >
                          {content.title}
                        </h3>
                      </Grid>
                    </div>
                  </Grid>
                </Link>
              </Grid>
            ))}
          </>
        ) : (
          <>
            {data.offer.map((content) => (
              <Grid
                container
                xs={12}
                className={
                  content.slug === "first-light" || content.slug === "night"
                    ? `${content.class} ${classes.inlineDiv} `
                    : content.slug === "imaginari"
                    ? `${content.class} ${classes.inlineDiv} `
                    : content.slug === "personal"
                    ? `${content.class} ${classes.inlineDiv} `
                    : content.slug === "human"
                    ? `${content.class} ${classes.inlineDiv}`
                    : `${content.class} ${classes.inlineDiv} `
                }
              >
                <Link to={slugify(content.title)} className={`${classes.link}`}>
                  <Grid item xs={12} className={`${classes.imageDiv}`}>
                    <div
                      className={
                        content.slug === "first-light" ||
                        content.slug === "human"
                          ? `${classes.imagePort} ${content.slug}`
                          : content.slug === "imaginari" ||
                            content.slug === "night"
                          ? `${classes.imagePort} ${content.slug}`
                          : content.slug === "personal"
                          ? `${classes.imageHor} ${content.slug}`
                          : `${classes.imageHor} ${content.slug}`
                      }
                      onMouseEnter={() =>
                        seeMoreEnter(`.${content.slug} .image__more`)
                      }
                      onMouseLeave={() =>
                        seeMoreLeave(
                          `.${content.slug} .image__more`,
                          `${content.no}`
                        )
                      }
                    >
                      <p className={`${classes.more} image__more`}>
                        {" "}
                        <Arrow />
                      </p>
                    </div>
                  </Grid>
                  <Grid item xs={12} className={classes.text} style={{position: "inherit"}}>
                    <sup className="font__small">project{content.no}</sup>

                    <h3
                      style={{
                        display: "inline-flex",
                        textShadow: "1px -1px white",
                        alignItems: "flex-end",
                      }}
                    >
                      {content.title}
                    </h3>
                  </Grid>
                </Link>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
}
