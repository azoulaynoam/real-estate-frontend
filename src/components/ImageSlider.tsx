import React from "react";
import "./styles/image-slider.css";
import Apartment from "./interfaces/IApartment";

interface ImageSliderType {
  apartment: Apartment | { path: string }[];
}

class ImageSlider extends React.Component<ImageSliderType> {
  state: {
    sliders: JSX.Element[];
    index: number;
  };

  constructor(props: { apartment: Apartment | { path: string }[] }) {
    super(props);
    this.state = {
      sliders: this.pharse_to_slides(this.props.apartment),
      index: 0,
    };
  }

  pharse_to_slides(apartment: Apartment | { path: string }[]) {
    var slides = [];
    var slides_length = Array.isArray(apartment)
      ? apartment.length
      : apartment.images.length + (apartment.video ? 1 : 0);

    if (!Array.isArray(apartment) && apartment.video) {
      slides_length++;
      slides.push(
        <div className="slides">
          <div className="numbertext">
            {slides.length + 1} / {slides_length}
          </div>
          <video className="video" controls>
            <source src={apartment.video.path} type="video/MP4" />
          </video>
        </div>
      );
    }

    const images = Array.isArray(apartment) ? apartment : apartment.images;

    for (var image of images) {
      slides.push(
        <div className="slides fade">
          <div className="numbertext">
            {slides.length + 1} / {slides_length}
          </div>
          <div className="image">
            <img src={image.path} alt="" />
          </div>
        </div>
      );
    }

    return slides;
  }

  render() {
    return (
      <div className="image-slider">
        {this.state.sliders[this.state.index]}
        <div className="prev" onClick={this.prev}>
          <i>&#10094;</i>
        </div>
        <div className="next" onClick={this.next}>
          <i>&#10095;</i>
        </div>
      </div>
    );
  }

  prev = () => {
    if (this.state.index - 1 >= 0) {
      this.setState({ index: this.state.index - 1 });
    } else {
      this.setState({ index: this.state.sliders.length - 1 });
    }
  };

  next = () => {
    if (this.state.index + 1 <= this.state.sliders.length - 1) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  };
}

export default ImageSlider;
