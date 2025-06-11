import React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const CustomSlider = styled(Slider)({
  color: '#3a8589',
  height: 3,
  '& .MuiSlider-track': {
    height: 4,
    borderRadius: 2,
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '&:focus, &:active': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider(props) {
  const {
    default: defaultValue = 0,
    step = 1,
    min = 0,
    max = 100,
    disable = false,
    title = '',
    onCountChange,
  } = props;

  const handleChangeCommitted = (event, value) => {
    onCountChange(value);
  };

  return (
    <div className="ml-2 mr-2" style={{ width: 200 }}>
      <CustomSlider
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChangeCommitted={handleChangeCommitted}
        step={step}
        min={min}
        max={max}
        disabled={disable}
      />
      <Typography id="discrete-slider" gutterBottom>
        {title}
      </Typography>
    </div>
  );
}
