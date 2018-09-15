import React, { Component } from 'react';

import './App.css';

import Operation from './components/Operation'
import Numbers from "./components/Numbers";
import Menu from "./components/Menu";


const OPS = [
    {value: 'multiplication', char: 'x'},
    {value: 'addition', char: '+'},
    {value: 'soustraction', char: '-'},
    {value: 'mix' , char: '?'}
];
const COEFS = [0.25, 0.6, 1];
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

    getMenuFeedBack = value =>{
        console.log(value);
    };

    render() {
        const { currentOp, steps, op, wrong, correct, mistakes} = this.state;
        return (
            <div className="container">
                <Menu
                    ops={OPS}
                    coefs={COEFS}
                    onClick={this.getMenuFeedBack}
                />
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
