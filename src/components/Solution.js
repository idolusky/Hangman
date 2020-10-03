import React, { Component } from 'react';
import Letter from './Letter';
class Solution extends Component {

    addScore= () => {
        this.props.addScore()
    }

    render() {
        return (<div>
            {this.props.solution.word.split('').map(l => this.props.letters[l] === true ? <Letter letter={l} /> : <Letter letter='_' />)}
            <div><em>{this.props.solution.hint}</em></div>
        </div>
        )
    }
}


export default Solution