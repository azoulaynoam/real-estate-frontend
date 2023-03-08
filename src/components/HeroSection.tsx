import React from "react";
import i18n from "../translator";
import "./styles/hero-section.css";

class HeroSection extends React.Component {
  render() {
    return (
      <div
        className={
          i18n.dir() === "rtl" ? "hero-section-rtl" : "hero-section-ltr"
        }
        id="hero-section"
      >
        <div className="hero-content">
          <div
            className={
              i18n.dir() === "rtl" ? "top-heading-rtl" : "top-heading-ltr"
            }
          >
            <h1>{i18n.t("first-line-hero-section")}</h1>
          </div>
          <div
            className={
              i18n.dir() === "rtl" ? "bottom-heading-rtl" : "bottom-heading-ltr"
            }
          >
            <h1>{i18n.t("second-line-hero-section")}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSection;
