import React, { Component } from "react";

import Statistic from "./Statistic";
import Notification from "./Notification";
import Section from "./Section";
import styles from "./Feedback.module.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    totalFeedback: 0,
  };

  handleVoiting = (event) => {
    console.log("click: ", event.target.value);

    if (event.target.value === "good") {
      this.setState((prevState) => ({
        good: prevState.good + 1,
      }));
      console.log("Feedback ~ this.setState ~ good === ", this.state.good);
    }

    if (event.target.value === "neutral") {
      this.setState((prevState) => ({
        neutral: prevState.neutral + 1,
      }));
    }

    if (event.target.value === "bad") {
      this.setState((prevState) => ({
        bad: prevState.bad + 1,
      }));
    }

    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState((prevState) => ({
      totalFeedback: prevState.totalFeedback + 1,
    }));
  };

  render() {
    const { good, neutral, bad, totalFeedback } = this.state;

    return (
      <div className={styles.feedbackBlock}>
        <Section
          title="Please leave feedback"
          onLeaveFeedback={this.handleVoiting}
        />

        {totalFeedback ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

export default Feedback;
