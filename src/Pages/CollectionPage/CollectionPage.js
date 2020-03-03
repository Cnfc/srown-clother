import React from "react";
import { connect } from "react-redux";

import CollectionItem from "components/CheckoutItem";
import { selectCollection } from "redux/shop/shop.selectors";

import "./CollectionPage.scss";

const CategoryPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h2>CategoryPage</h2>
      <span>s</span>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CategoryPage);
