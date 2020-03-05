import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "redux/cart/cart.actions";
import { selectCartItemsCount } from "redux/cart/cart.selectors";

import {
  CartIconStyled,
  ShoppingIconStyled,
  ItemCountStyled
} from "./CartIcon.styled.js";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconStyled onClick={toggleCartHidden}>
    <ShoppingIconStyled />
    <ItemCountStyled>{itemCount}</ItemCountStyled>
  </CartIconStyled>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
