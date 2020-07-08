import React, { Fragment, useState } from 'react';

import Question from './components/Question'
import Answer from './components/Answer';
import ques_1Img from './assets/ques1.png'

function App() {

  // question and their image
  var questions = [
    { 'question': ['What is the Garbage Collection in Java?', ques_1Img] },
  ]

  // definning which question to be shown at first
  const [questionIndex, setQuestionIndex] = useState(0)
  const [end, setEnd] = useState(false)

  // presenting next question on submit, if available
  const nextQuestion = () => {
    (questions.length > questionIndex + 1) ? setQuestionIndex(questionIndex + 1) : setEnd(true)
  }

  if (!end) {
    return (
      <Fragment>
        <Question questionIndex={questionIndex} questions={questions} />
        <Answer nextQuestion={nextQuestion} />
      </Fragment>)
  }
  else {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>No Further Questions</div>
    )
  }
}

export default App;
