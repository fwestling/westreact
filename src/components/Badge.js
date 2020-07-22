import React from "react";
import PropTypes from "prop-types";

const Badge = (props) => {
  return <div className="badge">{props.children}</div>;
};

Badge.propTypes = {};

export default Badge;
