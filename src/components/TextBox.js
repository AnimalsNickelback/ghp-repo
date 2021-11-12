import React from 'react'

const TextBox = ({ text, submitBtnClick}) => {
    return(
        <div>
            <div className='row'>
                <div className='col-8 col-sm-8'>
                    <h1 style={{textAlign: 'center', marginTop: '10px'}}>{text}</h1>
                </div>
                <div className='col-4 col-sm-4 '>
                    <button className="btn btn-primary py-3 px-5 rounded d-sm-block d-none" aria-disabled="true" id="SubmitBtn" style={{marginTop: '17px'}} onClick={() => {submitBtnClick()}}>Submit Lineup!</button>
                    <button className="btn btn-primary rounded d-block d-sm-none" aria-disabled="true" id="SubmitBtn" style={{marginTop: '17px'}} onClick={() => {submitBtnClick()}}>Submit Lineup!</button>
                </div>

            </div>
            
        </div>

    )
}

export default TextBox