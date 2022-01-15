import React, { useState } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Notification from "./notification/Notification";
import Section from "./section/Section";
import Statistic from "./statistic/Statistic";

const AppCopy = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const changeState = (e) => {
    const { name } = e.target;

    switch (name) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;

      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;

      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100) || 0;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={changeState}
        />
      </Section>
      <Section title="Statistic">
        {countTotalFeedback() ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification title="No feedback given" />
        )}
      </Section>
    </>
  );
};

export default AppCopy;
