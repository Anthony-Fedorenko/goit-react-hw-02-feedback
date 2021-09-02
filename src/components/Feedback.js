import React, {Component} from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";


class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    onClick = Name => {
        this.setState(prevState => ({
            [Name]: prevState[Name] + 1,
        }))
    }
    totalFeedback = () =>
        Object.values(this.state).reduce(
            (total, stateQuantity) => total + stateQuantity,
            0,
        )
    positiveFeedback = () =>
        this.totalFeedback()
    ? Math.round((this.state.good * 100) / this.totalFeedback())
            : 0

    render() {
        const {bad, good, neutral} = this.state

        return(
            <Section title={'Please leave feedback'}>
                <FeedbackOptions
                    clickButton={this.onClick}
                    options={['good', 'neutral', 'bad']}
                />

                <h2>Statistics</h2>
                {this.totalFeedback() > 0 ?
                    <Statistics
                        good={good}
                        bad={bad}
                        neutral={neutral}
                        total={this.totalFeedback()}
                        positive={this.positiveFeedback()}
                    />
                    :
                    <Notification
                        message={'No feedback given'}/>
                }

            </Section>
        )
    }
    }

export default Feedback