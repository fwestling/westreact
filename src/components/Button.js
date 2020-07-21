import React from "react";
import styled from "@emotion/styled";
import { font, primaryColors, shape } from "config/styles";

const Wrapper = styled.button`
  ${font}
  ${primaryColors}
  ${shape}
`;

const Button = ({ children, onClick }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default Button;
