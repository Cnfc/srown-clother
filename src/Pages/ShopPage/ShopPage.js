import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "components/CollectionsOverview";
import CollectionPage from "Pages/CollectionPage";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} compenent={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
