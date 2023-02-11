import React from "react";
import i18n from "../translator";
import VizSensor from "react-visibility-sensor";
import "./styles/about-me.css";

class AboutMe extends React.Component {
  state = {
    contentVisible: false,
  };

  render() {
    return (
      <div className="about-me" id="about-me">
        <VizSensor
          onChange={(isVisible: boolean) => {
            this.setState({ contentVisible: isVisible });
          }}
        >
          <div className="visabillity">
            <div
              id="about-me-card"
              className={
                "card " +
                (this.state.contentVisible ? "opened " : "closed ") +
                i18n.dir()
              }
            >
              <div className="profile">
                <img
                  src="./images/profile.jpg"
                  alt="Samantha Azoulay, Owner."
                />
              </div>
              <div className="text">
                <h2>{i18n.t("about-title")}</h2>
                <p>{i18n.t("about-content")}</p>
              </div>
            </div>
          </div>
        </VizSensor>
      </div>
    );
  }
}

export default AboutMe;
