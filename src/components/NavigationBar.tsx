import React from "react";
import i18n from "./translator";
import "./styles/navigation-bar.css";
import { US, IL } from "country-flag-icons/react/1x1";

class NavigationBar extends React.Component {
  state: {
    showMenu: boolean;
    hideNavigationBar?: boolean;
    scrollPos?: number;
  };

  constructor(props: { showMenu: boolean }) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  nav_link = (props: { link: string; text: string; isMobile: boolean }) => {
    return (
      <div
        className="nav-link"
        onClick={props.isMobile ? this.menuClicked : () => {}} // if mobile, close menu after click
      >
        <a href={props.link}>{props.text}</a>
      </div>
    );
  };

  links_wrapper = (isMobile: boolean = false) => (
    <div
      className={"links-wrapper " + i18n.dir()}
      id={isMobile ? "links-wrapper-mobile" : "links-wrapper-desktop"}
    >
      <div className="links">
        {this.nav_link({
          link: "#hero-section",
          text: i18n.t("home"),
          isMobile,
        })}
        {this.nav_link({
          link: "#about-me",
          text: i18n.t("about-me"),
          isMobile,
        })}
        {this.nav_link({
          link: "#apartment-search-section",
          text: i18n.t("apartments"),
          isMobile,
        })}
      </div>
      <div className="languages">
        <US
          onClick={(e) => {
            i18n.changeLanguage("en");
            window.location.reload();
          }}
        />
        <IL
          onClick={(e) => {
            i18n.changeLanguage("he");
            window.location.reload();
          }}
        />
      </div>
    </div>
  );

  menuClicked = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
    if (this.state.showMenu) {
      window.removeEventListener("scroll", this.handleScroll);
      document
        .getElementById("links-wrapper-mobile")
        ?.setAttribute("style", "display: flex");
    } else {
      window.addEventListener("scroll", this.handleScroll);
      document
        .getElementById("links-wrapper-mobile")
        ?.setAttribute("style", "display: none");
    }
  };

  menuButton = (
    <label className="menu-btn" onClick={this.menuClicked}>
      <i className="fas fa-bars"></i>
    </label>
  );

  componentDidMount() {
    this.setState({ scrollPos: 0 });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let lastPos: number = this.state.scrollPos || 0;
    let Pos = window.scrollY;
    if (Pos < lastPos || Pos < 10) {
      document
        .getElementsByClassName("navigation-wrapper")[0]
        .setAttribute("style", "top: 0px");
    } else {
      document
        .getElementsByClassName("navigation-wrapper")[0]
        .setAttribute("style", "top: -250px");
    }
    this.setState({ scrollPos: window.scrollY });
  };

  render() {
    return (
      <div className="navigation-wrapper">
        <div className="navigation-bar">
          <div className="left-column">
            <div className="icon">
              <a href="https://wa.me/+972-(050)2364585">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
            <div className="contact-hours-wrapper">
              <div className="phone">
                <a href="tel:+972502364585">+972-502-364-585</a>
              </div>
              <div className="hours">8:00 - 22:00</div>
            </div>
          </div>
          <div className="center-column">
            <div className="icon">
              <img src="images/icon.png" alt="Icon" />
            </div>
            <div className="logo">
              {i18n.t("name")}
              <br />
              {i18n.t("real-estate")}
            </div>
          </div>
          <div className="right-column">
            {this.links_wrapper(false)}
            {this.menuButton}
          </div>
        </div>
        {this.links_wrapper(true)}
      </div>
    );
  }
}

export default NavigationBar;
