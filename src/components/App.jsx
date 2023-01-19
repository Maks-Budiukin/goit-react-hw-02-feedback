import React from "react";
import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  text-align: center;
`

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
  
    countTotalFeedback = ({ good, neutral, bad } = this.state) => {
        return (good + neutral + bad)
    }

    countPositiveFeedbackPercentage = ({ good, neutral, bad } = this.state) => {
        return `${good / (good + neutral + bad) * 100}%`;
    }
  
    handleClick = (opt) => {
      this.setState((prevState) => ({
        [opt]: prevState[opt] + 1
        }))
    }

    render() {
      return (
          <Wrapper>
            <Section title="Please leave feedback">
              <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick}/>
            </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() > 0
              ?
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()} />
              :
              <Notification message="There is no feedback" />
            }
          </Section>
          </Wrapper>
        )
    }
}