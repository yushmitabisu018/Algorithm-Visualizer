import React from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const CustomSlider = styled(Slider)({
  color: '#3a8589',
  height: 3,
});

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: 8,
    marginRight: 8,
    width: 300,
  },
}));

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider(props) {
  const classes = useStyles();

  const handleChangeCommitted = (event, newValue) => {
    if (typeof newValue === 'number' && props.onChange) {
      props.onChange(newValue);
    }
  };

  return (
    <div className={`${classes.root} ml-2 mr-2`}>
      <Typography id="discrete-slider" gutterBottom>
        {props.title || ''}
      </Typography>
      <CustomSlider
        defaultValue={props.default || 0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChangeCommitted={handleChangeCommitted}
        step={props.step || 1}
        marks={props.marks || false}
        min={props.min || 0}
        max={props.max || 100}
        disabled={props.isDisabled || false}
      />
    </div>
  );
}
