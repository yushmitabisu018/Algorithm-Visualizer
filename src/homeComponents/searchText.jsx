import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export default function BasicTextFields({ onChange }) {
  return (
    <form noValidate autoComplete="off" style={{ margin: 8, width: '25ch' }}>
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        onChange={onChange}
        fullWidth
      />
    </form>
  );
}
