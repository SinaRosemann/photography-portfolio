import React, { useEffect } from "react";

// Components 
import Layout from "../components/layout/layout";
import ThreeCol from "../components/threeColumn";
import ServiceHeader from "../components/serviceHeader";
import ServiceContent from "../components/serviceContent";
import WorkProjectLeft from "../components/workProjectLeft";
import Viewport from "../components/layout/viewport";
import ContactForm from "../components/contactform";
import NextService from "../components/nextService";

// Animation
import { onLoad, onResize, onScroll } from "../util/helper";

// Data
import data from "../data/firstlight.json";

import OneSmall from "../images/First Light/12 Personal My Room 001_360.jpeg";
import OneMed from "../images/First Light/12 Personal My Room 001_720.jpeg";
import OneLarge from "../images/First Light/12 Personal My Room 001_1440.jpeg";

import TwoSmall from "../images/First Light/First Light ZTG 0591-Edit_360.jpeg";
import TwoMed from "../images/First Light/First Light ZTG 0591-Edit_720.jpeg";
import TwoLarge from "../images/First Light/First Light ZTG 0591-Edit_1440.jpeg";

import ThreeSmall from "../images/First Light/First Light ZTG 3568-Edit_360.jpeg";
import ThreeMed from "../images/First Light/First Light ZTG 3568-Edit_720.jpeg";
import ThreeLarge from "../images/First Light/First Light ZTG 3568-Edit_1440.jpeg";

import FourSmall from "../images/First Light/First Light ZTG 3776_360.jpeg";
import FourMed from "../images/First Light/First Light ZTG 3776_720.jpeg";
import FourLarge from "../images/First Light/First Light ZTG 3776_1440.jpeg";

import FiveSmall from "../images/First Light/First Light ZTG 4065_360.jpeg";
import FiveMed from "../images/First Light/First Light ZTG 4065_720.jpeg";
import FiveLarge from "../images/First Light/First Light ZTG 4065_1440.jpeg";

import NextSmall from "../images/Human/Human_ZG3243_360.jpeg";
import NextMed from "../images/Human/Human_ZG3243_720.jpeg";
import NextLarge from "../images/Human/Human_ZG3243_1440.jpeg";



function FirstLight(props) {
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
    <div>
      <Layout
        pageTitle="First Light"
        description={data.description}
      ></Layout>

      <Viewport>
        <ServiceContent>
        <ServiceHeader page={data}             
            imgsmall={FourSmall}
            imgmed={FourMed}
            imglarge={FourLarge}
            />
          <ThreeCol data={data} trigger="first-col" />

          <WorkProjectLeft
            title="First Light"
            imgsmall={OneSmall}
            imgmed={OneMed}
            imglarge={OneLarge}
            trigger="one-light"
            size={12}
            position="center"
          />
          <WorkProjectLeft
            title="First Light"
            imgsmall={TwoSmall}
            imgmed={TwoMed}
            imglarge={TwoLarge}
            trigger="two-light"
            size={11}
            position="flex-end"
          />
          <WorkProjectLeft
            title="First Light"
            imgsmall={ThreeSmall}
            imgmed={ThreeMed}
            imglarge={ThreeLarge}
            trigger="three-light"
            size={6}
            position="center"
          />

          <WorkProjectLeft
            title="First Light"
            imgsmall={FourSmall}
            imgmed={FourMed}
            imglarge={FourLarge}
            trigger="four-light"
            size={12}
            position="center"

          />
          <WorkProjectLeft
            title="First Light"
            imgsmall={FiveSmall}
            imgmed={FiveMed}
            imglarge={FiveLarge}
            trigger="five-light"
            size={11}
            position="flex-start"
          />
  


          <NextService
            next="Human"
            link="human"
            imgsmall={NextSmall}
            imgmed={NextMed}
            imglarge={NextLarge}
          />
          <ContactForm />
        </ServiceContent>
      </Viewport>
    </div>
  );
}

export default FirstLight;
