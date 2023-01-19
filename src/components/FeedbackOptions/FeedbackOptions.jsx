import React from "react"
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #fff;
    margin: 2px;
    padding: 5px 10px;
    border: 1px solid silver;
    border-radius: 4px;
    

    &:hover,
    &:focus  {
      outline: none;
      border: 1px solid skyblue;
    }
`

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    
    return (
        <>
            {options.map((option) => 
            (<StyledButton type="button" key={option} onClick={() => onLeaveFeedback(option)}>{option}</StyledButton>))
        }
            </>
    )
            
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}