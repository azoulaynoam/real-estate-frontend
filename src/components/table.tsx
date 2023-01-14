import React from "react";
import "./styles/table.css";
import { ClickAwayListener } from "@mui/material";

interface SelectBoxType {
  options: string[] | number[];
}

class SelectBox extends React.Component<SelectBoxType> {
  id: string = Math.random().toString(36).substr(2, 9);
  state = {
    selected: this.props.options.length ? this.props.options[0] : null,
    menuOpened: false,
  };

  menuEffect = () => {
    const doc = document.getElementById(this.id);
    const animatedArrow = document.getElementById("arrow-" + this.id);
    if (!this.state.menuOpened) {
      doc?.setAttribute("style", "display: block;");
      animatedArrow?.setAttribute("style", "transform: rotate(90deg);");
    } else {
      doc?.setAttribute("style", "display: none;");
      animatedArrow?.setAttribute("style", "transform: rotate(180deg);");
    }
    this.setState({ menuOpened: !this.state.menuOpened });
  };

  render() {
    if (!this.props.options) {
      return null;
    }

    return (
      <ClickAwayListener
        onClickAway={() => {
          const doc = document.getElementById(this.id);
          const animatedArrow = document.getElementById("arrow-" + this.id);
          doc?.setAttribute("style", "display: none;");
          animatedArrow?.setAttribute("style", "transform: rotate(180deg);");
          animatedArrow?.setAttribute("style", "tran: rotate(180deg);");
          this.setState({ menuOpened: false });
        }}
      >
        <div className="selectBox">
          <div className="selected" onClick={this.menuEffect}>
            <div className="selected-item">{this.state.selected}</div>
            <div className="animated-arrow" id={"arrow-" + this.id}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <path d="M8.094 2.814l9.092 9.186-9.092 9.186-1.244-1.207 7.979-7.979-7.979-7.979 1.244-1.207zm.028-2.814l-4.122 4 8 8-8 8 4.122 4 11.878-12-11.878-12z" />
              </svg>
            </div>
          </div>
          <div className="options" id={this.id}>
            {this.props.options.map((option) => (
              <div
                className={
                  this.state.selected === option ? "option-selected" : "option"
                }
                onClick={() => {
                  this.menuEffect();
                  this.setState({ selected: option, menuOpened: false });
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      </ClickAwayListener>
    );
  }
}

export default SelectBox;
