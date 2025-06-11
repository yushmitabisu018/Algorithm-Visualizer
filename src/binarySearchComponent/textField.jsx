import React, { Component } from 'react';
import TextField from '@mui/material/TextField';

class TextFields extends Component {
  state = {
    error: false,
    value: '',
  };

  handleChange = (e) => {
    const val = e.target.value;
    this.setState({ value: val });

    if (val === '' || parseInt(val) <= 0) {
      this.setState({ error: true });
      this.props.setUpper(100); // Default fallback
    } else {
      this.setState({ error: false });
      this.props.setUpper(val);
    }
  };

  render() {
    return (
      <div>
        <TextField
          error={this.state.error}
          id="upper-number"
          label="Upper Number"
          type="number"
          variant="outlined"
          value={this.state.value}
          onChange={this.handleChange}
          helperText={this.state.error ? "Enter a number greater than 0" : ""}
        />
      </div>
    );
  }
}

export default TextFields;
