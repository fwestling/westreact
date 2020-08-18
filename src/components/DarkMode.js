import React, { Component } from "react";
import { getCurrentTheme, setTheme } from "airspeed";
import Icon from "../components/Icon";
/**
 * Button for switching between light mode and dark mode
 */
export default class DarkMode extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: getCurrentTheme() };

    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme() {
    var newTh = this.state.theme === "light" ? "dark" : "light";
    setTheme(newTh);
    this.setState({ theme: newTh });
  }

  render() {
    return (
      <button className="button-darkmode" onClick={this.toggleTheme}>
        {this.state.theme === "light" ? (
          <Icon icon="moon" />
        ) : (
          <Icon icon="sun" />
        )}
      </button>
    );
  }
}
