import React, { Component } from "react";
import PropTypes from "prop-types";

class Statistic extends Component {
  feedbackPercentage = () => {
    const count = (this.props.good * 100) / this.props.totalFeedback;
    console.log("Statistic ~ good: ", this.props.good);
    console.log("Statistic ~ totalFeedback: ", this.props.totalFeedback);
    console.log("Statistic ~ count: ", count);

    return Math.round(count);
  };

  render() {
    return (
      <>
        <h3>Statistic</h3>
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
        <p>Total: {this.props.totalFeedback}</p>
        <p>Positive feedback: {this.feedbackPercentage()} %</p>
      </>
    );
  }
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Statistic;
