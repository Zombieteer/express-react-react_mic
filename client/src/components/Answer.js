import React, { Fragment, useState } from 'react'
import { ReactMic } from 'react-mic';

// icons from react-icons
import { MdMic } from 'react-icons/md'; 
import { BsStopFill } from 'react-icons/bs';
import { GrNext } from 'react-icons/gr';

export const Answer = ({nextQuestion}) => {

    const [record, setRecord] = useState(false) // state for checking whether recording is on or off
    const [answer, setAnswer] = useState('') // state for saving text area
    const [recorded, setRecorded] = useState('') // state for saving recording

    const startRecording = () => {
        setRecord(true)
    }

    const stopRecording = () => {
        setRecord(false)
    }

    function onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
    }

    function onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
        setRecorded(recordedBlob.blobURL)
    }

    const onSubmit = e => { // submit button handler
        e.preventDefault();
        // Do whatecer required with the data
        console.log(answer, recorded)
        nextQuestion()
        setAnswer('')
        setRecorded('')
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <div style={{ textAlign: 'center', marginBottom: 15 }}>
                    <textarea
                        placeholder='Enter your answer here'
                        className='textarea'
                        rows="5" cols="60"
                        name="description" value={answer} onChange={(e) => setAnswer(e.target.value)} 
                        autoFocus/>
                </div>
                <div className='record-div'>
                    <div className='record-container'>
                        <div className='record-text'>
                            Record your answer
                        </div>
                        <ReactMic
                            record={record}
                            className="sound-wave"
                            onStop={onStop}
                            onData={onData}
                            strokeColor="#048DDE"
                            backgroundColor="#333333" />
                        <div style={{ textAlign: 'center' }}>
                            <MdMic onClick={startRecording} className={record ? 'btn PoinEve' : 'btn'} />
                            <BsStopFill onClick={stopRecording} className={record ? 'btn' : 'btn PoinEve'} />
                        </div>
                        <div style={{ padding: 10 }} >
                            <audio className='audio-playback' controls controlsList="nodownload" src={recorded}></audio>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', padding: 10 }}>
                    <button className='submit-btn' type='submit'>
                        Submit Answer <GrNext style={{ verticalAlign: 'middle' }} />
                    </button>
                </div>
            </form>
        </Fragment>
    )
}

export default Answer