import React from "react";
import "./styles/icon-with-value.css";
import Tooltip from "@mui/material/Tooltip";

interface IconWithValueType {
  title: string;
  icon: string;
  value: string;
}

class IconWithValue extends React.Component<IconWithValueType> {
  render() {
    if (!this.props.value) {
      return null;
    }

    return (
      <Tooltip title={this.props.title} enterDelay={500} leaveDelay={200}>
        <div className="icon-with-value">
          <div className="value">
            <b>{this.props.value}</b>
          </div>
          <div className="icon">
            <i className={this.props.icon}></i>
          </div>
        </div>
      </Tooltip>
    );
  }
}

export default IconWithValue;
