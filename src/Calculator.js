import React from 'react';
import ReactDOM from 'react-dom';
import Age from './Age';

class Calculator extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            difference: 0
        }
    }

    differenceOfAges = () => {
        return this.state.difference;
    }

    render(){
        return (
            <div class='row'>
                <Age name='age-1'/>
                <div class='col-md-4'>
                    <span>{this.differenceOfAges}</span>
                </div>
                <Age name='age-2'/>
            </div>
        );
    }

}

export default Calculator;