import React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider'; // ✅ Import added

const CustomSlider = styled(Slider)({
  color: '#3a8589',
  height: 3,
});

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SimpleSelect = (props) => {
    const [selectedAlgo, setSelectedAlgo] = React.useState(0);

    const handleChange = (event) => {
        const val = event.target.value;
        setSelectedAlgo(val);
        props.onAlgoChanged(props.pos, val);
    };

    return (
        <div className="ml-2 mr-2">
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="simple-select-label">Algorithm</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={selectedAlgo}
                    label="Algorithm"
                    onChange={handleChange}
                >
                    <MenuItem value={0}>Merge Sort</MenuItem>
                    <MenuItem value={1}>Heap Sort</MenuItem>
                    <MenuItem value={2}>Quick Sort</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default SimpleSelect;
