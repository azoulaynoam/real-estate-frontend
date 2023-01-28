import React from "react";
import "./styles/image-slider.css";
import Apartment from "./interfaces/IApartment";

interface ImageSliderType {
  apartment: Apartment;
}

class ImageSlider extends React.Component<ImageSliderType> {
  sliders: JSX.Element[] = [];
  state: {
    apartment?: Apartment;
    index: number;
  };

  constructor(props: { apartment: Apartment; width?: number }) {
    super(props);
    this.state = {
      apartment: props.apartment,
      index: 0,
    };
  }

  pharse_to_slides(apartment: Apartment) {
    var slides = [];
    var slides_length = apartment.images.length;
    if (apartment.video) {
      slides_length++;
      slides.push(
        <div className="slides">
          <div className="numbertext">
            {slides.length + 1} / {slides_length}
          </div>
          <video className="video" controls>
            <source src={apartment.video} type="video/MP4" />
          </video>
        </div>
      );
    }

    for (var image of apartment.images) {
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

  componentDidUpdate(prevProps: { apartment: Apartment }) {
    if (this.state.apartment !== prevProps.apartment) {
      this.setState({ index: 0 });
    }
  }

  render() {
    this.sliders = this.pharse_to_slides(this.props.apartment);
    return (
      <div className="image-slider">
        {this.sliders[this.state.index]}
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
      this.setState({ index: this.sliders.length - 1 });
    }
  };

  next = () => {
    if (this.state.index + 1 <= this.sliders.length - 1) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  };
}

export default ImageSlider;
