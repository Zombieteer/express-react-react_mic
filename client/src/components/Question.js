import React from 'react'
import QuestionImage from './QuestionImage'
import './index.css'


export const Question = ({questionIndex, questions}) => {

    return (
        <div>
            <div className='question'>
                {questions[questionIndex].question[0]} {/* showing current question */}
            </div>
            <QuestionImage image={questions[questionIndex].question[1]} /> {/* showing current question image */}
        </div>
    )
}

export default Question