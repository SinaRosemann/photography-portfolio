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
import data from "../data/night.json";

import OneSmall from "../images/Night/00_360.jpeg";
import OneMed from "../images/Night/00_720.jpeg";
import OneLarge from "../images/Night/00_1440.jpeg";

import TwoSmall from "../images/Night/01_360.jpeg";
import TwoMed from "../images/Night/01_720.jpeg";
import TwoLarge from "../images/Night/01_1440.jpeg";

import ThreeSmall from "../images/Night/02_360.jpeg";
import ThreeMed from "../images/Night/02_720.jpeg";
import ThreeLarge from "../images/Night/02_1440.jpeg";

import FourSmall from "../images/Night/03_360.jpeg";
import FourMed from "../images/Night/03_720.jpeg";
import FourLarge from "../images/Night/03_1440.jpg";

import FiveSmall from "../images/Night/04_360.jpeg";
import FiveMed from "../images/Night/04_720.jpeg";
import FiveLarge from "../images/Night/04_1440.jpeg";

import SixSmall from "../images/Night/05_360.jpeg";
import SixMed from "../images/Night/05_720.jpeg";
import SixLarge from "../images/Night/05_1440.jpeg";

import SevenSmall from "../images/Night/06_360.jpeg";
import SevenMed from "../images/Night/06_720.jpeg";
import SevenLarge from "../images/Night/06_1440.jpg";

import NineSmall from "../images/Night/08_360.jpeg";
import NineMed from "../images/Night/08_720.jpeg";
import NineLarge from "../images/Night/08_1440.jpg";

import TenSmall from "../images/Night/09_360.jpeg";
import TenMed from "../images/Night/09_720.jpeg";
import TenLarge from "../images/Night/09_1440.jpeg";

import ElevenSmall from "../images/Night/10_360.jpeg";
import ElevenMed from "../images/Night/10_720.jpeg";
import ElevenLarge from "../images/Night/10_1440.jpeg";

import NextSmall from "../images/On Stage/03_360.jpeg";
import NextMed from "../images/On Stage/03_720.jpeg";
import NextLarge from "../images/On Stage/03_1440.jpeg";

function Night(props) {
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
      <Layout pageTitle="Night" description={data.description}></Layout>

      <Viewport>
        <ServiceContent>
        <ServiceHeader page={data}             
            imgsmall={FourSmall}
            imgmed={FourMed}
            imglarge={FourLarge}
            />
          <ThreeCol data={data} trigger="media-col" />
          <WorkProjectLeft
            title="Night"
            imgsmall={SixSmall}
            imgmed={SixMed}
            imglarge={SixLarge}
            trigger="six-light"
            size={12}
            position="flex-end"
          />
          <WorkProjectLeft
            title="Night"
            imgsmall={TwoSmall}
            imgmed={TwoMed}
            imglarge={TwoLarge}
            trigger="two-light"
            size={11}
            position="flex-start"
          />
          <WorkProjectLeft
            title="Night"
            imgsmall={FourSmall}
            imgmed={FourMed}
            imglarge={FourLarge}
            trigger="four-light"
            size={11}
            position="flex-end"
          />
          <WorkProjectLeft
            title="Night"
            imgsmall={ThreeSmall}
            imgmed={ThreeMed}
            imglarge={ThreeLarge}
            trigger="three-light"
            size={12}
            position="center"
          />
           <WorkProjectLeft
            title="Night"
            imgsmall={NineSmall}
            imgmed={NineMed}
            imglarge={NineLarge}
            trigger="nine-light"
            size={11}
            position="center"
          />

          <WorkProjectLeft
            title="Night"
            imgsmall={TenSmall}
            imgmed={TenMed}
            imglarge={TenLarge}
            trigger="nine-light"
            size={11}
            position="flex-start"
          />
          <WorkProjectLeft
            title="Night"
            imgsmall={ElevenSmall}
            imgmed={ElevenMed}
            imglarge={ElevenLarge}
            trigger="eleven-light"
            size={12}
            position="center"
          />
          <WorkProjectLeft
            title="Night"
            imgsmall={OneSmall}
            imgmed={OneMed}
            imglarge={OneLarge}
            trigger="one-light"
            size={10}
            position="center"
          />
          <WorkProjectLeft
            title="Night"
            imgsmall={FiveSmall}
            imgmed={FiveMed}
            imglarge={FiveLarge}
            trigger="five-light"
            size={11}
            position="flex-end"
          />
          <WorkProjectLeft
            title="Night"
            imgsmall={SevenSmall}
            imgmed={SevenMed}
            imglarge={SevenLarge}
            trigger="seven-light"
            size={12}
            position="center"
          />


         


          <NextService
            next="On Stage"
            link="on-stage"
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

export default Night;
