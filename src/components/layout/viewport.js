import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles((theme) => ({
  viewportDesktop: {
    overflow: "hidden",
    position: "fixed",
    height: "100%",
    width: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
  viewportMobile: {
    overflow: "hidden",
  },
}));

export default function Viewport({ children }) {
  const classes = useStyles();

  isMobile && window.scrollTo(0, 0)
  
  return (
    <>
      {!isMobile ? (
        <div className={classes.viewportDesktop}>{children}</div>
      ) : (
        <div className={classes.viewportMobile}>{children}</div>
      )}
    </>
  );
}
