import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SimpleSelect = ({ items = [], onAlgoChanged }) => {
  const initialValue = items.length > 0 ? '0' : '';
  const [selectedAlgo, setSelectedAlgo] = React.useState(initialValue);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedAlgo(value);
    if (onAlgoChanged) {
      onAlgoChanged(value);
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="algo-select-label">Algorithm</InputLabel>
      <Select
        labelId="algo-select-label"
        id="algo-select"
        value={selectedAlgo}
        label="Algorithm"
        onChange={handleChange}
      >
        {items.map((item, idx) => (
          <MenuItem key={idx} value={idx.toString()}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SimpleSelect;
