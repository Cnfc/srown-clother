import React from "react";
import CustomButton from "../CustomButton";

import "./CartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>Go To</CustomButton>
      </div>
    </div>
  );
};
export default CartDropdown;
