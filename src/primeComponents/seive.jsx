import React, { Component } from 'react';
import Cells from "./cells";
import Navbar from "./navbar";
import Menu from "./menu";
import { seive } from "../Algorithms/prime";

class Seive extends Component {
  state = {
    number: 100,
    cells: [],
    isRunning: false,
    speed: 500,
  };

  componentDidMount() {
    const cells = getCells(this.state.number);
    this.setState({ cells });
  }

  setAlgo = (val) => {
    this.setState({ algo: val });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Menu
          onChangeSpeed={this.changeSpeed}
          onChangeValues={this.handleValueIncrease}
          onVisualize={this.startAlgo}
          onRefresh={this.handleRefresh}
          isDisabled={this.state.isRunning}
          setAlgo={this.setAlgo}
        />
        <Cells num={this.state.number} cells={this.state.cells} />
      </div>
    );
  }

  changeSpeed = (speed) => {
    // Convert slider speed to delay time
    this.setState({ speed: 600 - speed * 10 });
  };

  handleValueIncrease = (value) => {
    this.setState((prevState) => ({
      number: value,
      cells: getCells(value),
      isRunning: false,
    }));
  };

  handleRefresh = () => {
    this.setState({
      cells: getCells(this.state.number),
      isRunning: false,
    });
  };

  startAlgo = () => {
    this.startSeive();
  };

  startSeive = async () => {
    const speed = this.state.speed;
    this.setState({ isRunning: true });

    const prime = new Array(this.state.number + 1).fill(1);
    prime[0] = prime[1] = 0;

    let changedCells = this.state.cells.slice();
    let prevCheck = -1;

    for (let i = 2; i <= this.state.number; i++) {
      if (prime[i] === 1) {
        changedCells = getNewCellPrimeToggled(changedCells, i - 1);
        this.setState({ cells: changedCells });
        await sleep(speed);

        for (let j = i * i; j <= this.state.number; j += i) {
          if (prevCheck !== -1) {
            changedCells = setVisitingFalse(changedCells, prevCheck);
          }
          prevCheck = j - 1;
          changedCells = setCheckingTrue(changedCells, prevCheck);
          changedCells = setVisitingTrue(changedCells, prevCheck);

          this.setState({ cells: changedCells });
          await sleep(speed);

          prime[j] = 0;
        }
      }
    }

    if (prevCheck !== -1) {
      changedCells = setVisitingFalse(changedCells, prevCheck);
    }

    this.setState({ cells: changedCells, isRunning: false });
  };
}

// Helper functions to update cells

const getNewCellPrimeToggled = (cells, pos) => {
  const newCells = cells.slice();
  const cell = newCells[pos];
  newCells[pos] = { ...cell, isPrime: true };
  return newCells;
};

const setVisitingTrue = (cells, pos) => {
  const newCells = cells.slice();
  const cell = newCells[pos];
  newCells[pos] = { ...cell, isVisiting: true };
  return newCells;
};

const setVisitingFalse = (cells, pos) => {
  const newCells = cells.slice();
  const cell = newCells[pos];
  newCells[pos] = { ...cell, isVisiting: false };
  return newCells;
};

const setCheckingTrue = (cells, pos) => {
  const newCells = cells.slice();
  const cell = newCells[pos];
  newCells[pos] = { ...cell, isChecking: true };
  return newCells;
};

const getCells = (rows) => {
  const cells = [];
  for (let cell = 1; cell <= rows; cell++) {
    cells.push(createCell(cell));
  }
  return cells;
};

const createCell = (val) => ({
  val,
  isChecking: false,
  isVisiting: false,
  isPrime: false,
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default Seive;
