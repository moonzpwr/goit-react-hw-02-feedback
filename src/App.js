import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import React from 'react';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = evt => {
    const clickTarget = evt.target.id;
    if (clickTarget === 'goodFeedback') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
    } else if (clickTarget === 'neutralFeedback') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    } else if (clickTarget === 'badFeedback') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const result = Math.floor(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100,
    );
    return result;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.leaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message={'No statistics given'} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
