import React from "react";
import { connect } from "react-redux";

import { clearItem, addItem, removeItem } from "redux/cart/cart.actions";

import {
  CheckoutItemStyled,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonStyled
} from "./CheckoutItem.styled.js";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemStyled>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>

      <QuantityContainer>
        <TextContainer onClick={() => removeItem(cartItem)}>
          &#10094;
        </TextContainer>
        <TextContainer>{quantity}</TextContainer>
        <TextContainer onClick={() => addItem(cartItem)}>
          &#10095;
        </TextContainer>
      </QuantityContainer>

      <span className="price">{price}</span>
      <RemoveButtonStyled onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonStyled>
    </CheckoutItemStyled>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
