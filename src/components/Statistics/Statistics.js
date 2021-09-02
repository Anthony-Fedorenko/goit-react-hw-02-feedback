import React from "react";
import style from './Statistics.module.css'
import PropTypes from "prop-types";

const Statistics = ({total, good,neutral,bad, positive}) => (
    <ul>
        <li className={style.good}>Good:{good}</li>
        <li className={style.neutral}>Neutral:{neutral}</li>
        <li className={style.bad}>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback:{positive}</li>
    </ul>
)


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired
}

export default Statistics