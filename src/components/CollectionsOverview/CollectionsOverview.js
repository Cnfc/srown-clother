import React from "react";
import PropTypes from "prop-types";
import PreviewCollection from "components/PreviewCollection";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="cpllections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

CollectionsOverview.propTypes = {
  collections: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
