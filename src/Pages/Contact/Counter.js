import React from "react";
import { connect } from "react-redux";

import CourseListPage from "./Reddit.js";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <CourseListPage />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
