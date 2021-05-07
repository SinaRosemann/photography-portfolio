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

import { onLoad, onResize, onScroll } from "../util/helper";

// Data
import human from "../data/human.json";

import OneSmall from "../images/Human/Human_Walk_030_360.jpg";
import OneMed from "../images/Human/Human_Walk_030_720.jpg";
import OneLarge from "../images/Human/Human_Walk_030_1440.jpg";

import TwoSmall from "../images/Human/Human_ZG3243_360.jpeg";
import TwoMed from "../images/Human/Human_ZG3243_720.jpeg";
import TwoLarge from "../images/Human/Human_ZG3243_1440.jpeg";

import ThreeSmall from "../images/Human/Human_ZG4577-Edit_360.jpeg";
import ThreeMed from "../images/Human/Human_ZG4577-Edit_720.jpeg";
import ThreeLarge from "../images/Human/Human_ZG4577-Edit_1440.jpeg";

import FourSmall from "../images/Human/Human_ZG4874_360.jpeg";
import FourMed from "../images/Human/Human_ZG4874_720.jpeg";
import FourLarge from "../images/Human/Human_ZG4874_1440.jpeg";

import FiveSmall from "../images/Human/Human_ZG5121_360.jpeg";
import FiveMed from "../images/Human/Human_ZG5121_720.jpeg";
import FiveLarge from "../images/Human/Human_ZG5121_1440.jpeg";

import SixSmall from "../images/Human/Human_ZG5850-Edit_360.jpeg";
import SixMed from "../images/Human/Human_ZG5850-Edit_720.jpeg";
import SixLarge from "../images/Human/Human_ZG5850-Edit_1440.jpeg";

import SevenSmall from "../images/Human/Human_ZG8447_360.jpeg";
import SevenMed from "../images/Human/Human_ZG8447_720.jpeg";
import SevenLarge from "../images/Human/Human_ZG8447_1440.jpg";

import NextSmall from "../images/Night/08_360.jpeg";
import NextMed from "../images/Night/08_720.jpeg";
import NextLarge from "../images/Night/08_1440.jpg";



function Human(props) {
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
      <Layout pageTitle="Human" description={human.description}></Layout>

      <Viewport>
        <ServiceContent>
        <ServiceHeader page={human}             
            imgsmall={ThreeSmall}
            imgmed={ThreeMed}
            imglarge={ThreeLarge}
            />
          <ThreeCol data={human} trigger="human-col" />
          <WorkProjectLeft
            title="Human"
            imgsmall={SevenSmall}
            imgmed={SevenMed}
            imglarge={SevenLarge}
            trigger="seven-light"
            size={11}
            position="flex-end"
          />

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
            title="Human"
            imgsmall={TwoSmall}
            imgmed={TwoMed}
            imglarge={TwoLarge}
            trigger="two-light"
            size={11}
            position="center"
          />{" "}
          <WorkProjectLeft
            title="Human"
            imgsmall={FiveSmall}
            imgmed={FiveMed}
            imglarge={FiveLarge}
            trigger="five-light"
            size={6}
            position="flex-start"
          />
          <WorkProjectLeft
            title="Human"
            imgsmall={ThreeSmall}
            imgmed={ThreeMed}
            imglarge={ThreeLarge}
            trigger="three-light"
            size={6}
            position="center"
          />
          <WorkProjectLeft
            title="Human"
            imgsmall={FourSmall}
            imgmed={FourMed}
            imglarge={FourLarge}
            trigger="four-light"
            size={12}
            position="center"
          />
          <WorkProjectLeft
            title="Human"
            imgsmall={SixSmall}
            imgmed={SixMed}
            imglarge={SixLarge}
            trigger="six-light"
            size={11}
            position="flex-end"
          />

          <NextService
            next="Night"
            link="night"
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

export default Human;
