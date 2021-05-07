import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";


let tlEnter = gsap.timeline();
let tlEnterSec = gsap.timeline();

export const seeMoreEnter = (target, no) => {
  gsap.registerPlugin(TextPlugin);

  tlEnter.to(`${target} path`, {
    duration: 1,
    strokeDashoffset: "500",
    ease: "power1",
  })

  tlEnterSec.to(`${target} .font__small`, {
    duration: 1,
   text: "see more",
    ease: "power1",
  })


};

export const seeMoreLeave =  (target, no)=> {
  let tl = gsap.timeline();
  let tlSec = gsap.timeline();
  tlEnter.clear();
  tlEnterSec.clear();

  tl.to(`${target} path`, {
    duration: 1,
    strokeDashoffset: "889.036",
    ease: "power1",
  })

  tlSec.to(`${target} .font__small`, {
    duration: 0.7,
    text: `project${no}`,
    ease: "power1",

  })
};
