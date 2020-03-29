import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionStart } from "redux/shop/shop.actions";

import { ShopPageContainer } from "./ShopPage.styles";
import Spinner from "components/Spinner";

const CollectionsOverviewContainer = lazy(() =>
  import("components/CollectionsOverview/CollectionsOverview")
);
const CollectionPreviewContainer = lazy(() =>
  import("Pages/CollectionPage/CollectionPage.container")
);

const ShopPage = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="shop-page">
      <ShopPageContainer>
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPreviewContainer}
          />
        </Suspense>
      </ShopPageContainer>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
