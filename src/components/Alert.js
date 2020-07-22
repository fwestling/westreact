import React from "react";
import PropTypes from "prop-types";

const Alert = (props) => {
  return <div className="alert">{props.children}</div>;
};

Alert.propTypes = {};

export default Alert;
