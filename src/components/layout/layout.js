import React from "react";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// Components
import Menu from "./menu";

// Functions
import { setDarkMode, setLightMode } from "../../util/darkmode"


const useStyles = makeStyles((theme) => ({
  logo: {
    width: "160px",
    height: "160px",
    padding: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "80px",
      height: "80px",
      padding: "20px",

    },
    
  },
  navbar: {
    position: "fixed",
    width: "100vw",
    zIndex: "10",
    [theme.breakpoints.down("md")]: {
      position: "relative",

    },
  },
  mode: {
    position: "absolute",
    right: "60px",
    top: "30px",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "0px solid",
    textTransform: "uppercase",
    letterSpacing: "3px",
    fontWeight: "bold",
  },
}));

export default function Layout(props) {
  const classes = useStyles();

  function toggleMode(e) {
  
let container = document.querySelector(".content--inner_detail");

    if (container.style.backgroundColor === "rgb(252, 252, 250)") {
      setDarkMode()

    } else {
      setLightMode()
    }
  }

  return (
    <>
      <Helmet>
        <title>{props.pageTitle}</title>
        <meta name="description" content={props.description}></meta>
      </Helmet>

      <div className={`${classes.navbar} navbar`}>
        <Link to="/">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="340.000000pt"
            height="340.000000pt"
            viewBox="0 0 340.000000 340.000000"
            preserveAspectRatio="xMidYMid meet"
            className={classes.logo}
          >
            <g
              transform="translate(0.000000,340.000000) scale(0.100000,-0.100000)"
              fill="#000"
              stroke="none"
            >
              <path
                d="M1625 3068 c-147 -53 -547 -280 -820 -466 -323 -220 -670 -504 -752
-614 -35 -49 -41 -90 -13 -96 8 -1 76 58 152 131 152 149 320 294 478 412 58
43 122 91 142 106 20 16 39 29 42 29 4 0 41 24 84 53 264 181 587 355 690 371
38 6 43 4 51 -16 26 -72 -80 -252 -393 -667 -39 -51 -78 -104 -86 -116 -12
-18 -107 -144 -143 -190 -66 -84 -282 -383 -384 -530 -170 -247 -288 -436
-380 -612 -61 -117 -74 -149 -71 -180 2 -31 7 -39 27 -41 85 -12 192 58 477
313 204 182 261 233 369 326 238 205 353 295 551 432 107 73 240 157 249 157
3 0 -24 -57 -59 -127 -95 -191 -131 -291 -160 -447 -27 -146 -33 -235 -16
-266 24 -44 130 -47 210 -5 105 54 506 439 637 611 33 43 100 125 149 181 49
55 131 156 182 223 93 121 115 141 133 123 17 -17 -37 -178 -131 -389 -226
-509 -296 -675 -375 -889 -93 -251 -157 -465 -195 -647 -40 -194 -20 -155 55
105 116 404 244 739 437 1136 216 447 250 528 277 661 13 69 3 124 -25 128
-40 6 -119 -81 -374 -417 -84 -110 -399 -440 -530 -556 -176 -156 -275 -224
-347 -240 -27 -5 -37 -2 -59 20 -26 26 -26 29 -20 118 3 51 7 99 7 107 3 30
112 289 173 410 104 207 100 203 234 268 131 64 151 73 305 132 95 37 108 45
105 63 -5 37 -42 31 -156 -21 -59 -28 -131 -60 -160 -71 -29 -12 -75 -32 -102
-46 -28 -14 -50 -21 -50 -17 0 5 41 71 90 146 161 245 290 394 461 532 205
165 347 250 511 308 66 23 94 37 96 50 4 17 -3 18 -62 14 -57 -3 -83 -13 -189
-66 -186 -95 -290 -173 -476 -361 -160 -161 -336 -381 -431 -535 -83 -136 -93
-147 -160 -183 -136 -73 -407 -262 -585 -407 -129 -105 -387 -326 -396 -338
-3 -5 -19 -19 -36 -31 -17 -12 -84 -67 -150 -122 -262 -222 -349 -276 -377
-232 -14 22 36 122 166 329 208 332 400 597 898 1243 254 329 304 403 351 520
16 41 32 94 35 118 6 39 4 45 -20 60 -41 27 -76 29 -141 5z"
              />
            </g>
          </svg>
        </Link>
        <button id="mode" className={classes.mode} onClick={toggleMode} aria-label="toggle dark mode">
          Dark
        </button>
        <Menu />
      </div>
      {props.children}
    </>
  );
}
