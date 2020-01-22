import React from 'react';
import ReactDOM from 'react-dom';

class Age extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            age1: 0,
            age2: 0
        }
    }

    handleChangeAge = ({ target }) => {
        this.setState({ [target.name]: target.value});
    }

    render(){
        var diff = 0;

        console.log('====================================');
        console.log(this.state.age2);
        console.log('====================================');
        
        if (parseInt(this.state.age1) > parseInt(this.state.age2)) {
            diff = this.state.age1 - this.state.age2
        }else if (parseInt(this.state.age1) < parseInt(this.state.age2)) { 
            diff = this.state.age2 - this.state.age1
        }else if (this.state.age1 == '') {
            diff = this.state.age2
        }else {
            diff = this.state.age1
        }
        return (
        <div class='container-age'>
            <div class='row container-diff'>
                <div class='col-md-12 diff'>
                    <span>{diff}</span>
                </div>
            </div>
            <div class='row container-values'>
                <div class='col-md-2 container-input'>
                    <span>{this.state.age1}</span>
                    <label class='col-md-12'>Digite a idade: </label>
                    <input 
                        type='text'
                        name='age1'
                        onChange={this.handleChangeAge}
                    />
                </div>
                <div class='col-md-2 container-input'>
                    <span>{this.state.age2}</span>
                    <label class='col-md-12'>Digite a idade: </label>
                    <input 
                        type='text'
                        name='age2'
                        onChange={this.handleChangeAge}
                    />
                </div>
            </div>
        </div>
        );
    }

}

export default Age;