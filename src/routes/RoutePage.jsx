import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicePage from "../pages/ServicePage";
import ContactPage from "../pages/ContactPage";

const RoutePage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default RoutePage;
