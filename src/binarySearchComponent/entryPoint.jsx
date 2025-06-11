import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class EntryPoint extends Component {
  state = {
    error: false,
    helperText: '',
  };

  handleChange = (e) => {
    const input = e.target.value;
    const number = parseInt(input);

    if (input === '') {
      this.setState({ error: true, helperText: 'Value required' });
      this.props.setUpper(100); 
    } else if (isNaN(number) || number <= 0) {
      this.setState({ error: true, helperText: 'Enter a valid number > 0' });
    } else {
      this.setState({ error: false, helperText: '' });
      this.props.setUpper(number);
    }
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <TextField
          error={this.state.error}
          helperText={this.state.helperText}
          label="Upper Number"
          type="number"
          variant="outlined"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <h1>Guess a number between 0 and {this.props.upper}</h1>
        <br />
        <Button
          variant="contained"
          color="warning"
          size="large"
          onClick={this.props.startGame}
          disabled={this.state.error}
        >
          Start the Game
        </Button>
      </div>
    );
  }
}

export default EntryPoint;
