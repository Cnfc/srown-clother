import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectCollectionsLoaded } from "redux/shop/shop.selectors";

import WithSpinner from "components/WithSpinner";
import CollectionPage from "Pages/CollectionPage";

const mapState = createStructuredSelector({
  isLoading: state => !selectCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapState),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
