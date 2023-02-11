import React from "react";
import i18n from "../translator";
import IconWithValue from "./IconWithValue";
import ImageSlider from "./ImageSlider";
import "./styles/apartment-gallery-desktop.css";
import IApartment from "./interfaces/IApartment";

interface ApartmentGalleryDesktopType {
  apartments: IApartment[];
}

class ApartmentGalleryDesktop extends React.Component<ApartmentGalleryDesktopType> {
  state: {
    apartments: IApartment[];
    index: number;
  };

  constructor(props: { apartments: IApartment[] }) {
    super(props);
    this.state = {
      apartments: props.apartments,
      index: 0,
    };
  }

  createPriceTag(price: number) {
    return price.toLocaleString("en-US") + " ₪";
  }

  apartment = (props: { apartment: IApartment }) => {
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
          <i
            className={props.apartment.status ? "price-tag" : "price-tag-sold"}
          >
            {this.createPriceTag(props.apartment.price)}
          </i>
          {props.apartment.status ? null : (
            <b className="sold">{i18n.t("sold")}</b>
          )}
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

    this.state.apartments.forEach((apartment: IApartment) => {
      apartments.push(<this.apartment apartment={apartment}></this.apartment>);
    });

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
