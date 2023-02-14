import React from 'react';
import { useState } from 'react';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Notification } from './Notification';
import { SectionBlock } from './Section/Section.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerGoodBtn = () => setGood(good => good + 1);
  const handlerNeutralBtn = () => setNeutral(neutral => neutral + 1);
  const handlerBadBtn = () => setBad(bad => bad + 1);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) return 0;

    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <SectionBlock>
      <Section title="Please leave feedback">
        <FeedbackOptions
          handlerGoodBtn={handlerGoodBtn}
          handlerNeutralBtn={handlerNeutralBtn}
          handlerBadBtn={handlerBadBtn}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </SectionBlock>
  );
};
