import React from "react";
import Axios from "axios";
import i18n from "./translator";
import ApartmentGalleryMobile from "./ApartmentGalleryMobile";
import ApartmentGalleryDesktop from "./ApartmentGalleryDesktop";
import UnderMaintenance from "./UnderMaintenance";
import "./styles/apartment-section.css";
import IAparatment from "./interfaces/IApartment";
class ApartmentSection extends React.Component {
  state: {
    apartments: IAparatment[];
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      apartments: [],
    };
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_SERVER_URL);
    Axios.get(process.env.REACT_APP_SERVER_URL + "/properties")
      .then((res) => {
        if (Array.isArray(res.data)) {
          this.setState({ apartments: res.data as IAparatment[] });
        } else {
          throw Error;
        }
      })
      .catch((err) => {
        this.setState({ apartments: [] as IAparatment[] });
      });
  }

  render() {
    if (this.state.apartments.length > 0) {
      return (
        <div className="apartment-search-section" id="apartment-search-section">
          <div className="title">
            <h1>{i18n.t("apartments")}</h1>
          </div>
          {window.innerWidth <= 800 ? (
            <ApartmentGalleryMobile apartments={this.state.apartments} />
          ) : (
            <ApartmentGalleryDesktop apartments={this.state.apartments} />
          )}
        </div>
      );
    } else {
      return (
        <div className="apartment-search-section" id="apartment-search-section">
          <UnderMaintenance />
        </div>
      );
    }
  }
}

export default ApartmentSection;
