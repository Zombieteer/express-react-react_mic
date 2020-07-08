import React from 'react'

export const QuestionArea = ({ image }) => {
    return (
        <div className='img_div'>
            <img src={image} alt='question1_Image' className='quesImage' />
        </div>
    )
}

export default QuestionArea