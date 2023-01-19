import React from "react"
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    
    return (
        <>
            {options.map((option) => 
            (<button type="button" key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>))
        }
            </>
    )
            
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}