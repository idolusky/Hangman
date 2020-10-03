
import React, { Component } from 'react';


class Letter extends Component {


    selectLetter = () => {
        this.props.selectLetter(this.props.letter)
    }
    addScore= () => {
            this.props.addScore(this.props.letter)
        
    }
    onClick = () =>{
        this.addScore()
        this.selectLetter()
        
    }
     
    render() {
        return (
            <span  className={this.props.className} onClick={this.onClick} >{this.props.letter}</span>
        )
    }
}


export default Letter