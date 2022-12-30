import React from "react";
import NavigationBar from "../components/NavigationBar";
import Background from "../components/Background";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import FeatureSection from "../components/FeatureSection";
import ApartmentSection from "../components/ApartmentSection";
import CopyrightSection from "../components/CopyrightSection";
import "../components/styles/common.css";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Background />
        <NavigationBar />
        <HeroSection />
        <AboutMe />
        <FeatureSection />
        <ApartmentSection />
        <CopyrightSection />
      </div>
    );
  }
}

export default Main;
