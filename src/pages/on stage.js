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
import data from "../data/onstage.json";

import OneSmall from "../images/On Stage/00_360.jpeg";
import OneMed from "../images/On Stage/00_720.jpeg";
import OneLarge from "../images/On Stage/00_1440.jpeg";

import TwoSmall from "../images/On Stage/01_360.jpeg";
import TwoMed from "../images/On Stage/01_720.jpeg";
import TwoLarge from "../images/On Stage/01_1440.jpeg";

import ThreeSmall from "../images/On Stage/02_360.jpeg";
import ThreeMed from "../images/On Stage/02_720.jpeg";
import ThreeLarge from "../images/On Stage/02_1440.jpeg";

import FourSmall from "../images/On Stage/03_360.jpeg";
import FourMed from "../images/On Stage/03_720.jpeg";
import FourLarge from "../images/On Stage/03_1440.jpeg";

import FiveSmall from "../images/On Stage/04_360.jpeg";
import FiveMed from "../images/On Stage/04_720.jpeg";
import FiveLarge from "../images/On Stage/04_1440.jpeg";

import SixSmall from "../images/On Stage/05_360.jpeg";
import SixMed from "../images/On Stage/05_720.jpeg";
import SixLarge from "../images/On Stage/05_1440.jpeg";

import SevenSmall from "../images/On Stage/06_360.jpeg";
import SevenMed from "../images/On Stage/06_720.jpeg";
import SevenLarge from "../images/On Stage/06_1440.jpeg";

import EightSmall from "../images/On Stage/07_360.jpeg";
import EightMed from "../images/On Stage/07_720.jpeg";
import EightLarge from "../images/On Stage/07_1440.jpeg";

import NineSmall from "../images/On Stage/08_360.jpeg";
import NineMed from "../images/On Stage/08_720.jpeg";
import NineLarge from "../images/On Stage/08_1440.jpeg";

import TenSmall from "../images/On Stage/09_360.jpeg";
import TenMed from "../images/On Stage/09_720.jpeg";
import TenLarge from "../images/On Stage/09_1440.jpeg";

import ElevenSmall from "../images/On Stage/10_360.jpeg";
import ElevenMed from "../images/On Stage/10_720.jpeg";
import ElevenLarge from "../images/On Stage/10_1440.jpeg";

import TwelveSmall from "../images/On Stage/11_360.jpeg";
import TwelveMed from "../images/On Stage/11_720.jpeg";
import TwelveLarge from "../images/On Stage/11_1440.jpeg";

import ThirteenSmall from "../images/On Stage/12_360.jpeg";
import ThirteenMed from "../images/On Stage/12_720.jpeg";
import ThirteenLarge from "../images/On Stage/12_1440.jpeg";

import FourteenSmall from "../images/On Stage/13_360.jpeg";
import FourteenMed from "../images/On Stage/13_720.jpeg";
import FourteenLarge from "../images/On Stage/13_1440.jpeg";

import FifteenSmall from "../images/On Stage/14_360.jpeg";
import FifteenMed from "../images/On Stage/14_720.jpeg";
import FifteenLarge from "../images/On Stage/14_1440.jpeg";

import SixteenSmall from "../images/On Stage/15_360.jpeg";
import SixteenMed from "../images/On Stage/15_720.jpeg";
import SixteenLarge from "../images/On Stage/15_1440.jpeg";

import NextSmall from "../images/Personal/02_360.jpeg";
import NextMed from "../images/Personal/02_720.jpeg";
import NextLarge from "../images/Personal/02_1440.jpeg";

function OnStage(props) {
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
      <Layout pageTitle="On Stage" description={data.description}></Layout>

      <Viewport>
        <ServiceContent>
          <ServiceHeader page={data}             
            imgsmall={ThreeSmall}
            imgmed={ThreeMed}
            imglarge={ThreeLarge}
            />
          <ThreeCol data={data} trigger="media-col" />
          


          <WorkProjectLeft
            title="On Stage"
            imgsmall={OneSmall}
            imgmed={OneMed}
            imglarge={OneLarge}
            trigger="one-light"
            size={12}
            position="center"
          />
          <WorkProjectLeft
            title="On Stage"
            imgsmall={TwoSmall}
            imgmed={TwoMed}
            imglarge={TwoLarge}
            trigger="two-light"
            size={11}
            position="flex-start"
          />
          <WorkProjectLeft
            title="On Stage"
            imgsmall={ThreeSmall}
            imgmed={ThreeMed}
            imglarge={ThreeLarge}
            trigger="three-light"
            size={10}
            position="center"
          />

          <WorkProjectLeft
            title="On Stage"
            imgsmall={FourSmall}
            imgmed={FourMed}
            imglarge={FourLarge}
            trigger="four-light"
            size={12}
            position="center"
          />
          <WorkProjectLeft
            title="On Stage"
            imgsmall={FiveSmall}
            imgmed={FiveMed}
            imglarge={FiveLarge}
            trigger="five-light"
            size={11}
            position="flex-end"
          />

          <WorkProjectLeft
            title="On Stage"
            imgsmall={SixSmall}
            imgmed={SixMed}
            imglarge={SixLarge}
            trigger="six-light"
            size={12}
            position="flex-end"
          />

          <WorkProjectLeft
            title="On Stage"
            imgsmall={SevenSmall}
            imgmed={SevenMed}
            imglarge={SevenLarge}
            trigger="seven-light"
            size={10}
            position="center"
          />

          <WorkProjectLeft
            title="On Stage"
            imgsmall={EightSmall}
            imgmed={EightMed}
            imglarge={EightLarge}
            trigger="eight-light"
            size={12}
            position="center"
          />

          <WorkProjectLeft
            title="On Stage"
            imgsmall={NineSmall}
            imgmed={NineMed}
            imglarge={NineLarge}
            trigger="nine-light"
            size={11}
            position="flex-end"
          />

          <WorkProjectLeft
            title="On Stage"
            imgsmall={TenSmall}
            imgmed={TenMed}
            imglarge={TenLarge}
            trigger="nine-light"
            size={11}
            position="flex-start"
          />

          <WorkProjectLeft
            title="On Stage"
            imgsmall={ElevenSmall}
            imgmed={ElevenMed}
            imglarge={ElevenLarge}
            trigger="eleven-light"
            size={10}
            position="center"
          />

          <WorkProjectLeft
            title="On Stage"
            imgsmall={TwelveSmall}
            imgmed={TwelveMed}
            imglarge={TwelveLarge}
            trigger="eleven-light"
            size={12}
            position="center"
          />

          <WorkProjectLeft
            title="On Stage"
            imgsmall={ThirteenSmall}
            imgmed={ThirteenMed}
            imglarge={ThirteenLarge}
            trigger="eleven-light"
            size={11}
            position="flex-start"
          />

          <WorkProjectLeft
            title="On Stage"
            imgsmall={FourteenSmall}
            imgmed={FourteenMed}
            imglarge={FourteenLarge}
            trigger="eleven-light"
            size={11}
            position="flex-end"
          />

          <WorkProjectLeft
            title="On Stage"
            imgsmall={FifteenSmall}
            imgmed={FifteenMed}
            imglarge={FifteenLarge}
            trigger="eleven-light"
            size={10}
            position="center"
          />

          <WorkProjectLeft
            title="On Stage"
            imgsmall={SixteenSmall}
            imgmed={SixteenMed}
            imglarge={SixteenLarge}
            trigger="eleven-light"
            size={12}
            position="center"
          />

          <NextService
            next="Personal"
            link="personal"
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

export default OnStage;
