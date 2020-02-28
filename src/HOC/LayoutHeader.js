import React, { Component } from "react";

import MenuItem from "components/menu-item";

class Layout extends Component {
  render() {
    return (
      <div>
        <MenuItem />
        <div>{this.props.children}</div>
        some other
      </div>
    );
  }
}

export default Layout;
