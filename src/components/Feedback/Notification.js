import React, { Component } from "react";
import PropTypes from "prop-types";

class Notification extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.message}</h3>
      </div>
    );
  }
}

Notification.defaultProps = {
  message: "No feedback given",
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
