import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SimpleSelect = (props) => {
  const [selectedAlgo, setSelectedAlgo] = React.useState('0');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedAlgo(value);
    props.onAlgoChanged(props.pos, value);
  };

  return (
    <div className="ml-2 mr-2">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="algo-select-label">Algorithm</InputLabel>
        <Select
          labelId="algo-select-label"
          id="algo-select"
          value={selectedAlgo}
          label="Algorithm"
          onChange={handleChange}
        >
          <MenuItem value="0">Bubble Sort</MenuItem>
          <MenuItem value="1">Selection Sort</MenuItem>
          <MenuItem value="2">Insertion Sort</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SimpleSelect;
