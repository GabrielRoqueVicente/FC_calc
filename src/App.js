import React, { Component } from 'react';

import './App.css';

import Operation from './components/Operation'
import Numbers from "./components/Numbers";


// const OPS = ['multiplication', 'addition', 'soustraction', 'mix'];
const STEPS = 20;
const BUTTONS = 100;

class App extends Component {
    state = {
        currentOp : {
            digit1: 0,
            opChar: 'x',
            digit2: 0,
        },
        steps: new Array(STEPS).fill({value: 'empty'}),
        op: 'multiplication',
        level: 2,
        numbersEnabled: false,
        wrong: null,
        correct: null,
        mistakes: 0,
        currentStep: 0,
    };

    getNumbersFeedback = value =>{
        console.log(value);
    };

    render() {
      const { currentOp, steps, op, wrong, correct, mistakes} = this.state;
    return (
        <div className="container">
            <Operation
                steps={steps}
                currentOp={currentOp}
                op={op}
                wrong={wrong}
                correct={correct}
                mistakes={mistakes}
            />
            <Numbers
                buttons={BUTTONS}
                onClick={this.getNumbersFeedback}
            />
        </div>
    );
  }
}

export default App;
