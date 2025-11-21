import React from "react";
import HomeHero from "../components/homecomponents/HomeHero";
import { Services } from "../components/homecomponents/Services";
import { Fleet } from "../components/homecomponents/Fleet";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <Services />
      <Fleet />
    </>
  );
};

export default HomePage;
