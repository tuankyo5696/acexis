import React from "react";
import PropsConfig from "./Button.component.proptypes";
import "./Button.component.css";
const Button = props => {
  return <button className="button">Click me!!</button>;
};
Button.propTypes = PropsConfig.propTypes;
Button.defaultProps = PropsConfig.defaultProps;

export default Button;
