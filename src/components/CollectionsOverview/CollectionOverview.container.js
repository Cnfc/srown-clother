import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionFetching } from "redux/shop/shop.selectors";
import WithSpinner from "components/WithSpinner";
import CollectionsOverview from "components/CollectionsOverview";

const mapState = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapState),
  WithSpinner
)(CollectionsOverview);
export default CollectionsOverviewContainer;
