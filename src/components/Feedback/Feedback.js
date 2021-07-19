import React, { Component } from "react";

const FEEDBACK_BUTTON = [
  { id: 1, label: "Good", key: "good" },
  { id: 2, label: "Neutral", key: "neutral" },
  { id: 3, label: "Bad", key: "bad" },
];

class Feedback extends Component {
  state = {
    good: 20,
    neutral: 0,
    bad: 0,
  };

  handleVoiting = (event) => {
    console.log("click: ", event.target.value);
    // this.setState((prevState) => ({}));
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        {FEEDBACK_BUTTON.map(({ id, label, key }) => (
          <button key={id} value={key} onClick={this.handleVoiting}>
            {label} {this.state[key]}
          </button>
        ))}
      </div>
    );
  }
}

export default Feedback;
