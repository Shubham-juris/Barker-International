import React from "react";
import HomeHero from "../components/homecomponents/HomeHero";
import { Services } from "../components/homecomponents/Services";
import { Fleet } from "../components/homecomponents/Fleet";
import HomeAboutSection from "../components/homecomponents/HomeAboutSection";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeAboutSection/>
      <Services />
      <Fleet />
    </>
  );
};

export default HomePage;
