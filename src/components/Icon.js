import React, { Component } from "react";
import icons from "../resources/icons.json";

export default class Icon extends Component {
  getIcon(cls) {
    if (!cls) return "";
    var name = cls.replace("-", "_");
    if (icons[name]) return icons[name];
    else return "";
  }

  render() {
    return (
      <div
        className={`wrapper-icon ${this.props.className}`}
        dangerouslySetInnerHTML={{ __html: this.getIcon(this.props.icon) }}
      />
    );
  }
}
