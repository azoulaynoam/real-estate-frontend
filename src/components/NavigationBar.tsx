import React from "react";
import i18n from "./translator";
import "./styles/navigation-bar.css";

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

  nav_link = (props: { link: string; text: string }) => {
    return (
      <div className="nav-link" onClick={this.menuClicked}>
        <a href={props.link}>{props.text}</a>
      </div>
    );
  };

  links_wrapper = (
    <div className="links-wrapper" style={{ direction: i18n.dir() }}>
      <div className="links">
        {this.nav_link({ link: "#hero-section", text: i18n.t("home") })}
        {this.nav_link({ link: "#about-me", text: i18n.t("about-me") })}
        {this.nav_link({
          link: "#apartment-search-section",
          text: i18n.t("apartments"),
        })}
      </div>
      <div className="languages">
        <select
          title="Select language"
          onChange={(e) => {
            i18n.changeLanguage(e.target.value);
            window.location.reload();
          }}
          value={i18n.language}
        >
          <option value="he">עברית</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  );

  menuClicked = () => {
    this.setState({
      showMenu: !this.state.showMenu,
      hideNavigationBar: !this.state.hideNavigationBar,
    });
    if (this.state.hideNavigationBar) {
      window.addEventListener("scroll", this.handleScroll);
    } else {
      window.removeEventListener("scroll", this.handleScroll);
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
            {window.innerWidth > 800 ? this.links_wrapper : this.menuButton}
          </div>
        </div>
        {window.innerWidth <= 800 && this.state.showMenu
          ? this.links_wrapper
          : null}
      </div>
    );
  }
}

export default NavigationBar;
