import React, { Component } from 'react';
import RangeSlider from './doubleSlider';
import Button from '@mui/material/Button';

class Guess extends Component {
  state = {
    showRange: false,
  };

  toggleRange = () => {
    this.setState((prev) => ({ showRange: !prev.showRange }));
  };

  getMid = () => {
    return Math.floor((this.props.upper + this.props.lower) / 2);
  };

  render() {
    const { upper, lower, max, yesButton, noButton } = this.props;
    return (
      <div style={{ textAlign: 'center' }}>
        <p>
          <button
            className="btn btn-secondary btn-lg"
            type="button"
            onClick={this.toggleRange}
          >
            Toggle Range
          </button>
        </p>

        {this.state.showRange && (
          <div className="card card-body">
            <center>
              <RangeSlider
                upper={upper}
                lower={lower}
                max={max}
              />
            </center>
          </div>
        )}

        <h1>Is your number greater than {this.getMid()}?</h1>

        <div>
          <Button
            variant="contained"
            color="success"
            size="large"
            className="m-2"
            onClick={yesButton}
          >
            Yes
          </Button>

          <Button
            variant="contained"
            color="error"
            size="large"
            className="m-2"
            onClick={noButton}
          >
            No
          </Button>
        </div>
      </div>
    );
  }
}

export default Guess;
