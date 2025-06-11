import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: '#3a8589',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-track': {
    height: 4,
    borderRadius: 2,
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:hover, &.Mui-focusVisible, &.Mui-active': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
  },
}));

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider({ lower, upper, max }) {
  const [value, setValue] = useState([lower, upper]);

  useEffect(() => {
    setValue([lower, upper]);
  }, [lower, upper]);

  return (
    <div style={{ width: 300, margin: '0 auto' }}>
      <StyledSlider
        value={value}
        getAriaValueText={valuetext}
        aria-labelledby="range-slider"
        valueLabelDisplay="on"
        max={max}
        disabled 
      />
      <Typography id="range-slider" gutterBottom>
        Binary Search Range
      </Typography>
    </div>
  );
}
