export default function FeedbackOptions({ options, onLeaveFeedback }) {
    
    return (
        <>
            {options.map((option) => 
            (<button type="button" key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>))
        }
            </>
    )
            
}