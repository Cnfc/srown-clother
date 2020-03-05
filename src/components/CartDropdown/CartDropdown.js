import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { selectCartItems } from "redux/cart/cart.selectors";
import { toggleCartHidden } from "redux/cart/cart.actions";
import CustomButton from "components/CustomButton";
import CartItem from "components/CartItem/CartItem";

import "./CartDropdown.scss";

const CartDropdownStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 240px;
  height: 340px;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const EmptyMessageStyled = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const CartItemsStyled = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

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
