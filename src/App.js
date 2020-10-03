import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: { word: "CALM", hint: "YOUR IDEAL MOOD WHEN CODING" },
      score : 100
    }
  }
  addScore =(letter) => {
    let newScore = this.state.score
    if (this.state.solution.word.split('').find(l => l === letter)){
        newScore += 5
        this.setState({score : newScore})
    }
    if (!this.state.solution.word.split('').find(l => l === letter)){
      newScore += -20
      this.setState({score : newScore})
  }
  }
  selectLetter = (letter)=> {
    if(this.state.letterStatus[letter] === false){
      const newStatus = {...this.state.letterStatus}
      newStatus[letter] =  true
      this.setState({letterStatus : newStatus})
    }
  
  

  }
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
  render() {
    return (
      <div className='app'>
        <Score score={this.state.score} />
        <Solution letters={this.state.letterStatus} solution={this.state.solution} addScore={this.addScore} />
        <Letters score={this.state.score} addScore ={this.addScore} selectLetter={this.selectLetter} word={this.state.solution.word} letters={this.state.letterStatus} />
      </div>
    );
  }
}

export default App;
