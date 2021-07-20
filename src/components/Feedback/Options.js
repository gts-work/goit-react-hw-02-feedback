import React, { Component } from "react";
import PropTypes from "prop-types";

import OptionItem from "./OptionItem";

const FEEDBACK_BUTTON = [
  { id: 1, label: "Good", value: "good" },
  { id: 2, label: "Neutral", value: "neutral" },
  { id: 3, label: "Bad", value: "bad" },
];

class Options extends Component {
  render() {
    return (
      <div className={StyleSheet.options}>
        {FEEDBACK_BUTTON.map(({ id, label, value }) => (
          <OptionItem
            key={id}
            label={label}
            value={value}
            onLeaveFeedback={this.props.onLeaveFeedback}
          />
        ))}
      </div>
    );
  }
}

Options.defaultProps = {
  title: "Please leave feedback",
};

Options.propTypes = {
  label: PropTypes.string,
  id: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default Options;
