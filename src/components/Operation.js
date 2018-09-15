import React from 'react'
import PropTypes from 'prop-types'

import './Operation.css'

const Operation = ({ steps, currentOp, op, wrong, correct, mistakes }) => (
    <div className="operation">
        {correct || wrong ? (  <div className="score"><span className="ok">{correct}</span> / <span className="ko">{wrong}</span></div>): ''}
        <div className="text multiplication">{currentOp.digit1} {currentOp.opChar} {currentOp.digit2}</div>
        <ul className="steps">
            {
                steps.map((step, index) => (
                    <li key={index} id={`step${index}`} className='step'/>
                ))
            }
        </ul>
    </div>
);

Operation.prototype = {
    steps: PropTypes.array.isRequired,
    currentOp: PropTypes.object.isRequired,
    op: PropTypes.string.isRequired,
    wrong: PropTypes.number,
    correct: PropTypes.number,
    mistakes: PropTypes.number.isRequired,
};

export default Operation