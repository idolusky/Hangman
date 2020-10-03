
import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {


    render() {
        let arr = Object.keys(this.props.letters);
        return (<div>
            <div>Available letters :</div>
            {arr.map(l => this.props.letters[l] === false ? <Letter addScore={this.props.addScore} selectLetter={this.props.selectLetter} letter={l} /> : <Letter className='selected' addScore={this.props.addScore} letter={l} />)}

        </div>
        )
    }
}


export default Letters