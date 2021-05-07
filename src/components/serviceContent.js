import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { isMobile } from "react-device-detect";


const useStyles = makeStyles((theme) => ({
  gridContainer: {
    willChange: "transform",



  },
}));

export default function ServiceContent({ children, props }) {
  const classes = useStyles();

  return (
    <>
    {!isMobile &&
      <Grid
        container
        spacing={0} 
        justify="center"
        className={`${classes.gridContainer} scroll-container  content--inner_detail`}
        id="scroll-container"
        style={{backgroundColor: "rgb(252, 252, 250)"}}
      >
        <Grid item xs={12} >
            <div>
            {children}
             </div>
        </Grid>
      </Grid>
    } 
    {isMobile &&
      <Grid
        container
        spacing={0} 
        justify="center"
        className={`${classes.gridContainer} content--inner_detail`}
        style={{backgroundColor: "rgb(252, 252, 250)"}}
      >
        <Grid item xs={12} >
            <div> 
            {children}
             </div>
        </Grid>
      </Grid>
    }
    </>
  );
}
