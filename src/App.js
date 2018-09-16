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
        steps: new Array(STEPS).fill({value: 'empty'}),
        opType: 'multiplication',
        level: 2,
        currentOp : {
            digit1: 0,
            opChar: 'x',
            digit2: 0,
            result: 0,
        },
        numbersEnabled: false,
        wrong: null,
        correct: null,
        mistakes: 0,
        currentStep: 0,
    };

    componentDidMount() {
        this.getOp()
    }

    getOp= () => {
        const {level, opType} = this.state;
        let [coef, digit1, opChar, digit2, result, currentOpType] = [COEFS[level],0,'x',0,0,''];

        currentOpType = opType === 'mix' ?  OPS[Math.random() * OPS.length]: opType ;
        switch(currentOpType) {
            case 'multiplication' :
                digit1= Math.floor(coef * (level === 1 ? Math.random() * 10 : 3 + Math.random() * 7));
                opChar= '*';
                digit2= Math.floor( 1 + Math.random() * 10 );
                result= digit1 * digit2;
                break;

            case 'addition' :
                digit1 = Math.floor(Math.floor( Math.random() * 99 )* coef);
                opChar= '+';
                digit2 = Math.floor(Math.floor( 1 + Math.random() * (99 - digit1))* coef);
                result = digit1 + digit2;
                break;

            case 'soustraction' :
                digit1 = Math.floor(Math.floor( 10 + Math.random() * 90 )* coef);
                opChar= '-';
                digit2 = Math.floor(Math.floor( Math.random() * digit1)* coef);
                result = digit1 - digit2;
                break;
            default :
                digit1 = 0;
                digit2 = 0;
                result = 0;
                break
        }
        const nextOp = {
            digit1: digit1,
                opChar: opChar,
                digit2: digit2,
                result: result,
        };
        this.setState(
            (prevState, currentOp) => ({currentOp: nextOp}))
    };


    getNumbersFeedback = value =>{
        console.log(value);
    };

    getMenuFeedBack = value =>{
        let state = null;
        if(isNaN(value)){
            state = {opType: value};
            this.getOp();
            this.setState(state);
        }else{
            state = {level: value};
            this.getOp();
            this.setState(state);
        }

    };

    render() {
        const { currentOp, opType, steps, level, wrong, correct, mistakes} = this.state;
        return (
            <div className="container">
                <Menu
                    ops={OPS}
                    coefs={COEFS}
                    opType={opType}
                    level={level}
                    onClick={this.getMenuFeedBack}
                />
                <Operation
                    steps={steps}
                    currentOp={currentOp}
                    opType={opType}
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
