import React, { Component } from 'react';
import Guess from './guess';
import Result from './result';

class Search extends Component {
  render() {
    const {
      upper,
      lower,
      max,
      yesButton,
      noButton,
      onRestart,
    } = this.props;

    return (
      <div>
        {upper !== lower ? (
          <Guess
            yesButton={yesButton}
            noButton={noButton}
            upper={upper}
            lower={lower}
            max={max}
          />
        ) : (
          <Result res={upper} onRestart={onRestart} />
        )}
      </div>
    );
  }
}

export default Search;
