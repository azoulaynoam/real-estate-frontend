import React from "react";
import i18n from "../translator";
import "./styles/feature-section.css";

class FeatureSection extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let doc = document.getElementsByClassName("feature-section")[0];
    let postions = doc.getBoundingClientRect();
    if (postions.top >= 0 && postions.bottom <= window.innerHeight) {
      doc.setAttribute("style", "top: -250px");
    } else {
      doc.setAttribute("style", "top: 0px");
    }
  };

  render() {
    return (
      <div className={"feature-section " + i18n.dir()}>
        <div className="column-wrapper">
          <div className="column">
            <i className="far fa-handshake"></i>
            <p id="feature-title">{i18n.t("reliability")}</p>
            <p>{i18n.t("reliability-text")}</p>
          </div>
          <div className="column">
            <i className="fas fa-cut"></i>
            <p id="feature-title">{i18n.t("for-any-purpose")}</p>
            <p>{i18n.t("for-any-purpose-text")}</p>
          </div>
          <div className="column">
            <i className="fas fa-language"></i>
            <p id="feature-title">{i18n.t("multi-language-support")}</p>
            <p>{i18n.t("multi-language-support-text")}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureSection;
