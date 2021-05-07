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
import data from "../data/imaginari.json";

import OneSmall from "../images/Imaginari/00_360.jpeg";
import OneMed from "../images/Imaginari/00_720.jpeg";
import OneLarge from "../images/Imaginari/00_1440.jpeg";

import TwoSmall from "../images/Imaginari/01_360.jpeg";
import TwoMed from "../images/Imaginari/01_720.jpeg";
import TwoLarge from "../images/Imaginari/01_1440.jpeg";

import ThreeSmall from "../images/Imaginari/02_360.jpeg";
import ThreeMed from "../images/Imaginari/02_720.jpeg";
import ThreeLarge from "../images/Imaginari/02_1440.jpeg";

import FourSmall from "../images/Imaginari/03_360.jpeg";
import FourMed from "../images/Imaginari/03_720.jpeg";
import FourLarge from "../images/Imaginari/03_1440.jpeg";

import FiveSmall from "../images/Imaginari/04_360.jpeg";
import FiveMed from "../images/Imaginari/04_720.jpeg";
import FiveLarge from "../images/Imaginari/04_1440.jpeg";

import SixSmall from "../images/Imaginari/05_360.jpeg";
import SixMed from "../images/Imaginari/05_720.jpeg";
import SixLarge from "../images/Imaginari/05_1440.jpeg";

import SevenSmall from "../images/Imaginari/06_360.jpeg";
import SevenMed from "../images/Imaginari/06_720.jpeg";
import SevenLarge from "../images/Imaginari/06_1440.jpeg";

import EightSmall from "../images/Imaginari/07_360.jpeg";
import EightMed from "../images/Imaginari/07_720.jpeg";
import EightLarge from "../images/Imaginari/07_1440.jpeg";

import NineSmall from "../images/Imaginari/08_360.jpeg";
import NineMed from "../images/Imaginari/08_720.jpeg";
import NineLarge from "../images/Imaginari/08_1440.jpeg";

import TenSmall from "../images/Imaginari/09_360.jpeg";
import TenMed from "../images/Imaginari/09_720.jpeg";
import TenLarge from "../images/Imaginari/09_1440.jpeg";

import ElevenSmall from "../images/Imaginari/10_360.jpeg";
import ElevenMed from "../images/Imaginari/10_720.jpeg";
import ElevenLarge from "../images/Imaginari/10_1440.jpeg";

import NextSmall from "../images/First Light/First Light ZTG 3776_360.jpeg";
import NextMed from "../images/First Light/First Light ZTG 3776_720.jpeg";
import NextLarge from "../images/First Light/First Light ZTG 3776_1440.jpeg";

function Imaginari(props) {
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
      <Layout pageTitle="Imaginari" description={data.description}></Layout>

      <Viewport>
        <ServiceContent>
        <ServiceHeader page={data}             
            imgsmall={NineSmall}
            imgmed={NineMed}
            imglarge={NineLarge}
            />
          <ThreeCol data={data} trigger="media-col" />
          <WorkProjectLeft
            title="Imaginari"
            imgsmall={OneSmall}
            imgmed={OneMed}
            imglarge={OneLarge}
            trigger="one-light"
            size={6}
            position="center"
          />
          <WorkProjectLeft
            title="Imaginari"
            imgsmall={TwoSmall}
            imgmed={TwoMed}
            imglarge={TwoLarge}
            trigger="two-light"
            size={11}
            position="flex-start"
          />
          <WorkProjectLeft
            title="Imaginari"
            imgsmall={ThreeSmall}
            imgmed={ThreeMed}
            imglarge={ThreeLarge}
            trigger="three-light"
            size={10}
            position="center"
          />

          <WorkProjectLeft
            title="Imaginari"
            imgsmall={FourSmall}
            imgmed={FourMed}
            imglarge={FourLarge}
            trigger="four-light"
            size={12}
            position="center"
          />
          <WorkProjectLeft
            title="Imaginari"
            imgsmall={FiveSmall}
            imgmed={FiveMed}
            imglarge={FiveLarge}
            trigger="five-light"
            size={11}
            position="flex-end"
          />

          <WorkProjectLeft
            title="Imaginari"
            imgsmall={SixSmall}
            imgmed={SixMed}
            imglarge={SixLarge}
            trigger="six-light"
            size={12}
            position="flex-end"
          />

          <WorkProjectLeft
            title="Imaginari"
            imgsmall={SevenSmall}
            imgmed={SevenMed}
            imglarge={SevenLarge}
            trigger="seven-light"
            size={10}
            position="center"
          />

          <WorkProjectLeft
            title="Imaginari"
            imgsmall={EightSmall}
            imgmed={EightMed}
            imglarge={EightLarge}
            trigger="eight-light"
            size={12}
            position="center"
          />

          <WorkProjectLeft
            title="Imaginari"
            imgsmall={NineSmall}
            imgmed={NineMed}
            imglarge={NineLarge}
            trigger="nine-light"
            size={11}
            position="flex-end"
          />

          <WorkProjectLeft
            title="Imaginari"
            imgsmall={TenSmall}
            imgmed={TenMed}
            imglarge={TenLarge}
            trigger="nine-light"
            size={11}
            position="flex-start"
          />

          <WorkProjectLeft
            title="Imaginari"
            imgsmall={ElevenSmall}
            imgmed={ElevenMed}
            imglarge={ElevenLarge}
            trigger="eleven-light"
            size={6}
            position="center"
          />
          <NextService
            next="First Light"
            link="first-light"
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

export default Imaginari;
