import React, { Component } from "react";
import PropTypes from "prop-types";

import Options from "./Options";

class Section extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <Options onLeaveFeedback={this.props.onLeaveFeedback} />
      </div>
    );
  }
}

Section.defaultProps = {
  title: "Please leave feedback",
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
