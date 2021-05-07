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

// Animation & Function

import { onLoad, onResize, onScroll } from "../util/helper";

// Data
import photo from "../data/personal.json";

import OneSmall from "../images/Personal/00_360.jpeg";
import OneMed from "../images/Personal/00_720.jpeg";
import OneLarge from "../images/Personal/00_1440.jpg";

import TwoSmall from "../images/Personal/01_360.jpeg";
import TwoMed from "../images/Personal/01_720.jpeg";
import TwoLarge from "../images/Personal/01_1440.jpeg";

import ThreeSmall from "../images/Personal/02_360.jpeg";
import ThreeMed from "../images/Personal/02_720.jpeg";
import ThreeLarge from "../images/Personal/02_1440.jpeg";

import FourSmall from "../images/Personal/03_360.jpeg";
import FourMed from "../images/Personal/03_720.jpeg";
import FourLarge from "../images/Personal/03_1440.jpeg";

import FiveSmall from "../images/Personal/04_360.jpeg";
import FiveMed from "../images/Personal/04_720.jpeg";
import FiveLarge from "../images/Personal/04_1440.jpeg";

import SixSmall from "../images/Personal/05_360.jpeg";
import SixMed from "../images/Personal/05_720.jpeg";
import SixLarge from "../images/Personal/05_1440.jpg";

import SevenSmall from "../images/Personal/06_360.jpeg";
import SevenMed from "../images/Personal/06_720.jpeg";
import SevenLarge from "../images/Personal/06_1440.jpeg";

import EightSmall from "../images/Personal/07_360.jpeg";
import EightMed from "../images/Personal/07_720.jpeg";
import EightLarge from "../images/Personal/07_1440.jpeg";

import NineSmall from "../images/Personal/08_360.jpeg";
import NineMed from "../images/Personal/08_720.jpeg";
import NineLarge from "../images/Personal/08_1440.jpeg";

import NextSmall from "../images/Imaginari/06_360.jpeg";
import NextMed from "../images/Imaginari/06_720.jpeg";
import NextLarge from "../images/Imaginari/06_1440.jpeg";

function Personal(props) {
  useEffect(() => {
    document.body.style.overflowY = "unset";
    onLoad();
    onResize();

     ;

    return () => {
      document.body.style.overflowY = "unset";
      document.body.style.height = "unset";
      window.removeEventListener("resize", onResize);
      document.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div>
      <Layout pageTitle="Personal" description={photo.description}></Layout>
      <Viewport>
        <ServiceContent>
           

        <ServiceHeader page={photo}             
            imgsmall={NineSmall}
            imgmed={NineMed}
            imglarge={NineLarge}
            />
          <ThreeCol data={photo} trigger="photo-col" />

          <WorkProjectLeft
            title="Personal"
            imgsmall={OneSmall}
            imgmed={OneMed}
            imglarge={OneLarge}
            trigger="one-light"
            size={12}
            position="center"
          />
          <WorkProjectLeft
            title="Personal"
            imgsmall={TwoSmall}
            imgmed={TwoMed}
            imglarge={TwoLarge}
            trigger="two-light"
            size={11}
            position="flex-start"
          />
          <WorkProjectLeft
            title="Personal"
            imgsmall={ThreeSmall}
            imgmed={ThreeMed}
            imglarge={ThreeLarge}
            trigger="three-light"
            size={10}
            position="center"
          />

          <WorkProjectLeft
            title="Personal"
            imgsmall={FourSmall}
            imgmed={FourMed}
            imglarge={FourLarge}
            trigger="four-light"
            size={12}
            position="center"
          />
          <WorkProjectLeft
            title="Personal"
            imgsmall={FiveSmall}
            imgmed={FiveMed}
            imglarge={FiveLarge}
            trigger="five-light"
            size={11}
            position="flex-end"
          />

          <WorkProjectLeft
            title="Personal"
            imgsmall={SixSmall}
            imgmed={SixMed}
            imglarge={SixLarge}
            trigger="six-light"
            size={12}
            position="flex-end"
          />

          <WorkProjectLeft
            title="Personal"
            imgsmall={SevenSmall}
            imgmed={SevenMed}
            imglarge={SevenLarge}
            trigger="seven-light"
            size={10}
            position="center"
          />

          <WorkProjectLeft
            title="Personal"
            imgsmall={EightSmall}
            imgmed={EightMed}
            imglarge={EightLarge}
            trigger="eight-light"
            size={12}
            position="center"
          />
          <WorkProjectLeft
            title="Personal"
            imgsmall={NineSmall}
            imgmed={NineMed}
            imglarge={NineLarge}
            trigger="nine-light"
            size={11}
            position="flex-start"
          />
          <NextService
            next="Imaginari"
            link="imaginari"
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

export default Personal;
