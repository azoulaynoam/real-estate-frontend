import React from "react";
import i18n from "../translator";
import "./styles/about-me.css";

interface AboutMeProprs {
  contentVisible: boolean;
}
class AboutMe extends React.Component {
  state = {
    contentVisible: false,
  };

  constructor(props: { contentVisible: boolean }) {
    super(props);
    this.state = {
      contentVisible: props.contentVisible,
    };
  }

  componentDidMount(): void {
    window.addEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    const aboutMe = document.getElementById("about-me-card");
    if (!aboutMe) return;
    if (aboutMe.getBoundingClientRect().top < 500) {
      this.setState({ contentVisible: true });
    } else {
      this.setState({ contentVisible: false });
    }
  };

  render() {
    return (
      <div className="about-me" id="about-me">
        <div
          id="about-me-card"
          className={
            "card " +
            (this.state.contentVisible ? "opened " : "closed ") +
            i18n.dir()
          }
        >
          <div className="profile">
            <img src="./images/profile.jpg" alt="Samantha Azoulay, Owner." />
          </div>
          <div className="text">
            <h2>{i18n.t("about-title")}</h2>
            <p>{i18n.t("about-content")}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
