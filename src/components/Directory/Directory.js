import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "redux/directory/directory.selectors";
import MenuItem from "components/MenuItem";
import { DirectoryMenuStyled } from "./Directory.styled";

const Directory = ({ sections }) => (
  <DirectoryMenuStyled>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuStyled>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
