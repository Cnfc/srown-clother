import React from "react";
import { connect } from "react-redux";
import { selectCartItem } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

import CustomButton from "../CustomButton";
import CartItem from "../cartItem/CartItem";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem
});

export default connect(mapStateToProps)(CartDropdown);
