import React, { Component } from "react";
import PropTypes from "prop-types";

class Room extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
  };


  render() {
    const {
      props: {  label },
    } = this;

    return (
      <li className="room">
        {label}
      </li>
    );
  }
}

export default Room;