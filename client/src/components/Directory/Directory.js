import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "redux/directory/directory.selectors";
import MenuItem from "components/MenuItem";

import { DirectoryMenuContainer } from "./Directory.styled";

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map((section, i) => (
      <MenuItem key={i} {...section} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
