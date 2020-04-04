import React from "react";
import { connect } from "react-redux";

import CollectionItem from "components/CollectionsItem";
import { selectCollection } from "redux/shop/shop.selectors";

import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from "./CollectionPage.styled";

const CategoryPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>

      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
