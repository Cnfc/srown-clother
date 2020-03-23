import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "redux/cart/cart.selectors";
import { toggleCartHidden } from "redux/cart/cart.actions";
import CustomButton from "components/CustomButton";
import CartItem from "components/CartItem/CartItem";

import {
  CartDropdownStyled,
  EmptyMessageStyled,
  CartItemsStyled
} from "./CartDropdown.styled";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownStyled>
    <CartItemsStyled>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageStyled>Your cart is empty.</EmptyMessageStyled>
      )}
    </CartItemsStyled>
    <CustomButton
      style={{ marginTop: "auto" }}
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownStyled>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
