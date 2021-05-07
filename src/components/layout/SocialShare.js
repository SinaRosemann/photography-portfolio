import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,

} from "react-share";

import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

export default function SocialShare() {
  return (
      <>
      <p>Share:</p>
    <FacebookShareButton url={window.location.href} style={{paddingRight: "10px"}}>
      <FacebookIcon size={32} bgStyle={{
          fill: "rgba(0,0,0,0.8)"
      }}/>
    </FacebookShareButton>
    <LinkedinShareButton url={window.location.href} style={{paddingRight: "10px"}}>
    <LinkedinIcon size={32} bgStyle={{
          fill: "rgba(0,0,0,0.8)"
      }}/>
    </LinkedinShareButton>
    <TwitterShareButton url={window.location.href} style={{paddingRight: "10px"}}>
    <TwitterIcon size={32} bgStyle={{
          fill: "rgba(0,0,0,0.8)"
      }}/>
    </TwitterShareButton>
    </>

  )
}
