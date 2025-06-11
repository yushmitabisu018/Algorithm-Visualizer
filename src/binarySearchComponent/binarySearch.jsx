import React, { Component } from 'react';
import EntryPoint from './entryPoint';
import Search from './search';
import Navbar from './navbar';

class BinarySearch extends Component {
  state = {
    upper: 100,
    lower: 0,
    max: 100,
    isRunning: false,
  };

  handleStartGame = () => {
    this.setState({ isRunning: true });
  };

  handleRestart = () => {
    this.setState({ isRunning: false, upper: 100, lower: 0 });
  };

  handleYes = () => {
  const mid = Math.floor((this.state.upper + this.state.lower) / 2);
  this.setState({ lower: mid + 1 });
};

handleNo = () => {
  const mid = Math.floor((this.state.upper + this.state.lower) / 2);
  this.setState({ upper: mid });
};


  handleSetUpper = (up) => {
    let val = parseInt(up);
    if (isNaN(val) || val <= 0) {
      val = 100;
    }
    this.setState({ upper: val, max: val });
  };

  render() {
    const { isRunning, upper, lower, max } = this.state;

    return (
      <div>
        <Navbar />
        <br />
        <br />
        <br />
        <center>
          {!isRunning ? (
            <EntryPoint
              startGame={this.handleStartGame}
              upper={upper}
              setUpper={this.handleSetUpper}
            />
          ) : (
            <Search
              yesButton={this.handleYes}
              noButton={this.handleNo}
              upper={upper}
              lower={lower}
              max={max}
              onRestart={this.handleRestart}
            />
          )}
        </center>
    
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <p>Lower Bound: {lower}</p>
          <p>Upper Bound: {upper}</p>
        </div>
      </div>
    );
  }
}

export default BinarySearch;
