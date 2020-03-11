import React from "react";
import { connect } from "react-redux";

import Reddit from "./Reddit.js";

class Counter extends React.Component {
  state = {
    me: 0
  };

  render() {
    return (
      <div>
        <Reddit />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
