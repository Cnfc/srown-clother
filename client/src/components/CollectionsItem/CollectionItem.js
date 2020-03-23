import React from "react";
import { connect } from "react-redux";

import { addItem } from "redux/cart/cart.actions";

import {
  CollectionItemStyled,
  ImageStyled,
  CollectionFooterStyled,
  NameStyled,
  PriceStyled,
  AddButton
} from "./CollectionItem.styled.js";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemStyled>
      <ImageStyled className="background-image" imageUrl={imageUrl} />
      <CollectionFooterStyled>
        <NameStyled>{name}</NameStyled>
        <PriceStyled>{price}$</PriceStyled>
      </CollectionFooterStyled>
      <AddButton className="add-button" onClick={() => addItem(item)} inverted>
        Add to cart.
      </AddButton>
    </CollectionItemStyled>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
