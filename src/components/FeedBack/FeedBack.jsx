import React from "react";
import { Component } from "react";


class FeedBack extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    
    handleGoodClick = () => {
        this.setState(prevState => ({
            good: prevState.good + 1
        }))
    }

    handleNeutralClick = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }))
    }

    handleBadClick = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }))
    }

    

    countTotalFeedback = ({ good, neutral, bad } = this.state) => {
        return (good + neutral + bad)
    }

    countPositiveFeedbackPercentage = ({ good, neutral, bad } = this.state) => {
        return `${good / (good + neutral + bad) * 100}%`;
    }

    render() {
        return (
            <section>
                <h2>Please leave feedback</h2>
                <div>
                    <button onClick={this.handleGoodClick}>Good</button>
                    <button onClick={this.handleNeutralClick}>Neutral</button>
                    <button onClick={this.handleBadClick}>Bad</button>
                </div>
                <h2>Statistics</h2>
                <p>Good: { this.state.good }</p>
                <p>Neutral: { this.state.neutral }</p>
                <p>Bad: { this.state.bad }</p>
                <p>Total: {this.countTotalFeedback()}</p>
                <p>Positive Feedback: {this.countTotalFeedback() > 0 ? this.countPositiveFeedbackPercentage() : 0}</p>
            </section>
        )
    }
}

export default FeedBack;