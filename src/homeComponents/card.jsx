import React from "react";
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider'; // You need to import Slider if you want CustomSlider

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './style.css';  


const CustomSlider = styled(Slider)({
  color: '#3a8589',
  height: 3,
});


const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 350,
  maxWidth: 350,
  minHeight: 250,
  borderRadius: 5,
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
  },
}));


const StyledCardActionArea = styled(CardActionArea)({
  padding: 15,
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});


const StyledCardMedia = styled(CardMedia)({
  height: 140,
});


const ExpandIconStyled = styled(ExpandMoreIcon)({
  float: 'right',
});

export default function ImgMediaCard({ card }) {
  return (
    <StyledCardActionArea>
      <StyledCard>
        <StyledCardMedia
          component="img"
          alt={card.title}
          image={card.img}
          title={card.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="p">
            {card.description}
          </Typography>
          <ExpandIconStyled />
        </CardContent>
      </StyledCard>
    </StyledCardActionArea>
  );
}
