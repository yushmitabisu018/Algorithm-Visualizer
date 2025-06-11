import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const SimpleSelect = (props) => {
  const [value, setValue] = React.useState(
    props.value !== undefined ? String(props.value) : '0'
  );

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    props.onValueChanged(props.pos, Number(newValue));
  };

  return (
    <div className="mx-2">
      <FormControl fullWidth>
        <InputLabel id={`select-label-${props.label}`}>{props.label}</InputLabel>
        <Select
          labelId={`select-label-${props.label}`}
          id={`select-${props.label}`}
          value={value}
          label={props.label}
          onChange={handleChange}
        >
          {props.items.map((item, index) => (
            <MenuItem key={index} value={String(index)}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SimpleSelect;
