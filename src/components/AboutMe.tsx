import React from "react";
import i18n from "./translator";
import VizSensor from "react-visibility-sensor";
import "./styles/about-me.css";

class AboutMe extends React.Component {
  state = {
    isDesktop: true,
    contentVisible: false,
  };

  componentDidMount() {
    if (window.innerWidth <= 800) {
      this.setState({ isDesktop: false });
    } else {
      this.setState({ isDesktop: true });
    }
  }

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
              <div
                className="text"
                style={{
                  display: this.state.contentVisible
                    ? ""
                    : this.state.isDesktop
                    ? ""
                    : "none",
                  opacity: this.state.isDesktop
                    ? this.state.contentVisible
                      ? 1
                      : 0
                    : "",
                  transition: this.state.isDesktop ? "opacity 0.5s linear" : "",
                  transitionDelay: this.state.isDesktop
                    ? this.state.contentVisible
                      ? "1s"
                      : ""
                    : "",
                  direction: i18n.dir(),
                  fontSize: this.state.isDesktop
                    ? "18px"
                    : i18n.dir() === "rtl"
                    ? "2vh"
                    : "1.9vh",
                }}
              >
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
