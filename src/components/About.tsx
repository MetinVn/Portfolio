import profile from "../images/Group 35554.png";
import upscaled from "../images/Upscaled-BG-removed.png";

import { GoPlus } from "react-icons/go";
import { PiCopy } from "react-icons/pi";
import AboutMobile from "../layouts/AboutMobile";
import AboutDesktop from "../layouts/AboutDesktop";
import Hero from "./Hero";

export default function About() {
  const about = "I'm Metin Isakhanli";
  const description = "I craft immersive and user-centric web experiences.";
  const jobTitle = "Software Developer";
  return (
    <div className="w-full mx-auto">
      <AboutDesktop about={about} description={description} jobTitle={jobTitle} profile={upscaled} PlusSign={GoPlus} CopySign={PiCopy} />
      <AboutMobile about={about} description={description} jobTitle={jobTitle} profile={profile} PlusSign={GoPlus} CopySign={PiCopy} />
      <Hero />
    </div>
  );
}
