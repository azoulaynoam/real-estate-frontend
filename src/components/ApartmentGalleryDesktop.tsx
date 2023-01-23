import React from "react";
import i18n from "./translator";
import IconWithValue from "./IconWithValue";
import ImageSlider from "./ImageSlider";
import "./styles/apartment-gallery-desktop.css";
import Apartment from "./types/Apartment";

interface ApartmentGalleryDesktopType {
  apartments: Apartment[];
}

class ApartmentGalleryDesktop extends React.Component<ApartmentGalleryDesktopType> {
  state: {
    apartments: Apartment[];
    index: number;
  };

  constructor(props: { apartments: Apartment[] }) {
    super(props);
    this.state = {
      apartments: props.apartments,
      index: 0,
    };
  }

  createPriceTag(price: string) {
    return price.toLocaleString() + " ₪";
  }

  apartment = (props: { apartment: Apartment; index: number }) => {
    let lang;
    try {
      lang = i18n.language.split("-")[0];
    } catch {
      lang = i18n.language;
    }
    return (
      <div
        className="apartment"
        id={String(props.apartment._id)}
        key={String(props.apartment._id)}
      >
        <div className="left">
          <ImageSlider apartment={props.apartment} />
        </div>
        <div className="center">
          <div
            className="free-text"
            style={{
              direction: i18n.dir(),
            }}
          >
            <i>
              {lang === "en"
                ? props.apartment.free_text_en
                : props.apartment.free_text_he}
            </i>
          </div>
          <div className="info-container">
            <IconWithValue
              icon="fas fa-door-open"
              title={i18n.t("number-of-rooms")}
              value={String(props.apartment.rooms)}
            />
            <IconWithValue
              icon="fas fa-bed"
              title={i18n.t("number-of-bedrooms")}
              value={String(props.apartment.bedrooms)}
            />
            <IconWithValue
              icon="fas fa-bath"
              title={i18n.t("number-of-bathrooms")}
              value={String(props.apartment.bathrooms)}
            />
            <IconWithValue
              icon="fas fa-ruler-combined"
              title={i18n.t("square-feet")}
              value={String(props.apartment.size)}
            />
          </div>
        </div>
        <div className="right">
          <i className="price-tag">
            {this.createPriceTag(String(props.apartment.price))}
          </i>
        </div>
      </div>
    );
  };

  leftArrow = () => {
    if (this.state.index - 3 >= 0) {
      this.setState({ index: this.state.index - 3 });
    }
  };

  rightArrow = () => {
    if (this.state.index + 3 < this.state.apartments.length) {
      this.setState({ index: this.state.index + 3 });
    }
  };

  render() {
    const apartments: JSX.Element[] = [];
    let apartmentCounter = 0;

    this.state.apartments.forEach((apartment: Apartment) => {
      apartments.push(
        <this.apartment
          index={apartmentCounter}
          apartment={apartment}
        ></this.apartment>
      );
    });
    apartmentCounter++;

    return (
      <div className="gallery">
        <div className="left arrow" onClick={this.leftArrow}>
          <i className="fas fa-angle-left"></i>
        </div>
        <div className="apartments">
          {apartments.slice(this.state.index, this.state.index + 3)}
        </div>
        <div className="right arrow" onClick={this.rightArrow}>
          <i className="fas fa-angle-right"></i>
        </div>
      </div>
    );
  }
}

export default ApartmentGalleryDesktop;
