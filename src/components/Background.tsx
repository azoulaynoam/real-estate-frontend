import React from "react";
import "./styles/background.css";

class Background extends React.Component {
  background_image: string = "./background/background.jpg";
  background_mp4: string = "./background/background.mp4";

  render() {
    return (
      <video
        playsInline
        className="videoBG"
        poster={this.background_image}
        autoPlay
        muted
        loop
      >
        <source src={this.background_mp4} type="video/mp4" />
      </video>
    );
  }
}

export default Background;
