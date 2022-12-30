import React from "react";
import i18n from "./translator";
import ImageSlider from "./ImageSlider";
import IconWithValue from "./IconWithValue";
import "./styles/apartment-gallery-mobile.css";
import Apartment from "./types/Apartment";

interface ApartmentGalleryMobileType {
  apartments: Apartment[];
}

class ApartmentGalleryMobile extends React.Component<ApartmentGalleryMobileType> {
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

  rightArrow = () => {
    if (this.state.index + 1 < this.state.apartments.length) {
      this.setState({ index: this.state.index + 1 });
    }
  };

  leftArrow = () => {
    if (this.state.index - 1 >= 0) {
      this.setState({ index: this.state.index - 1 });
    }
  };

  createPriceTag(price: string) {
    return price.toLocaleString() + " ₪";
  }

  render() {
    let lang;
    try {
      lang = i18n.language.split("-")[0];
    } catch {
      lang = i18n.language;
    }
    const apartment = this.state.apartments[this.state.index];
    return (
      <div className="gallery">
        <div className="left arrow" onClick={this.leftArrow}>
          <i className="fas fa-angle-left"></i>
        </div>
        <div className="apartment-card">
          <ImageSlider apartment={apartment} />
          <div className="info-container">
            <IconWithValue
              icon="fas fa-door-open"
              title={i18n.t("number-of-rooms")}
              value={String(apartment.rooms)}
            />
            <IconWithValue
              icon="fas fa-bed"
              title={i18n.t("number-of-bedrooms")}
              value={String(apartment.bedrooms)}
            />
            <IconWithValue
              icon="fas fa-bath"
              title={i18n.t("number-of-bathrooms")}
              value={String(apartment.bathrooms)}
            />
            <IconWithValue
              icon="fas fa-ruler-combined"
              title={i18n.t("square-feet")}
              value={String(apartment.size)}
            />
          </div>
          <div
            className="free-text"
            style={{
              direction: i18n.dir(),
            }}
          >
            <i>
              {lang === "en" ? apartment.free_text_en : apartment.free_text_he}
            </i>
          </div>
          <i className="price-tag">
            {this.createPriceTag(String(apartment.price))}
          </i>
        </div>
        <div className="right arrow" onClick={this.rightArrow}>
          <i className="fas fa-angle-right"></i>
        </div>
      </div>
    );
  }
}

export default ApartmentGalleryMobile;
