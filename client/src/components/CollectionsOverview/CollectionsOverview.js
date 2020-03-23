import React from "react";
import PropTypes from "prop-types";
import PreviewCollection from "components/PreviewCollection";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "redux/shop/shop.selectors";

import { ImageStyled } from "./CollectionsOverview.styled";

const CollectionsOverview = ({ collections }) => {
  return (
    <ImageStyled>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </ImageStyled>
  );
};

CollectionsOverview.propTypes = {
  collections: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
