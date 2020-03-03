import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "components/CollectionsOverview";
import CategoryPage from "Pages/CategoryPage";

const ShopPage = ({ match }) => {
  console.log(match.path);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} compenent={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};

export default ShopPage;
