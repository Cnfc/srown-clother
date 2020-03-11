import React from "react";
// import PropTypes from "prop-types";
import Counter from "./Counter";
// import { connect } from "react-redux";

// import { addItem } from "redux/counter/counter.action";
class Contact extends React.Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

Contact.propTypes = {};

export default Contact;
