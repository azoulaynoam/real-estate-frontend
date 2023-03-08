import React from "react";
import i18n from "../translator";
import ImageSlider from "./ImageSlider";
import IconWithValue from "./IconWithValue";
import "./styles/apartment-gallery-mobile.css";
import IApartment from "./interfaces/IApartment";

interface ApartmentGalleryMobileType {
  apartments: IApartment[];
}

class ApartmentGalleryMobile extends React.Component<ApartmentGalleryMobileType> {
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

  createPriceTag(price: number) {
    return price.toLocaleString("en-US") + " ₪";
  }

  touchStart: number | null = null;
  touchEnd: number | null = null;
  minSwipeDistance = 50;

  onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    this.touchEnd = null;
    this.touchStart = e.targetTouches[0].clientX;
  };

  onTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    (this.touchEnd = e.targetTouches[0].clientX);

  onTouchEnd = () => {
    if (!this.touchStart || !this.touchEnd) return;
    const distance = this.touchStart - this.touchEnd;
    const isLeftSwipe = distance > this.minSwipeDistance;
    const isRightSwipe = distance < -this.minSwipeDistance;
    if (isLeftSwipe) this.rightArrow();
    if (isRightSwipe) this.leftArrow();
  };

  render() {
    let lang;
    try {
      lang = i18n.language.split("-")[0];
    } catch {
      lang = i18n.language;
    }
    const apartment = this.state.apartments[this.state.index];
    return (
      <div
        className="gallery"
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
      >
        <div className="left arrow" onClick={this.leftArrow}>
          <i className="fas fa-angle-left"></i>
        </div>
        <div className="apartment-card">
          <ImageSlider apartment={apartment} key={String(apartment._id)} />
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
          <i className={apartment.status ? "price-tag" : "price-tag-sold"}>
            {this.createPriceTag(apartment.price)}
          </i>
          {apartment.status ? null : <b className="sold">{i18n.t("sold")}</b>}
        </div>
        <div className="right arrow" onClick={this.rightArrow}>
          <i className="fas fa-angle-right"></i>
        </div>
      </div>
    );
  }
}

export default ApartmentGalleryMobile;
