import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    //  className={`${inverted ? 'inverted' : null}` ...otherProps}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
