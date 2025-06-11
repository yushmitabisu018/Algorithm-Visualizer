import React from "react";
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

import Collapse from '@mui/material/Collapse';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardHeader from '@mui/material/CardHeader';
import { Link } from 'react-router-dom';

import "./style.css";

const CustomSlider = styled(Slider)({
  color: '#3a8589',
  height: 3,
});

const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 350,
  maxWidth: 350,
  minHeight: 200,
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
  height: 150,
});

const ExpandIconButton = styled(IconButton)(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
}));

export default function ImgMediaCard2(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (e) => {
    e.preventDefault(); // prevent link navigation when toggling expand
    setExpanded(!expanded);
  };

  return (
    <StyledCard>
      <StyledCardActionArea
        component={Link}
        to={props.card.route}
      >
        <StyledCardMedia
          component="img"
          alt={props.card.title}
          image={props.card.img}
          title={props.card.title}
        />
        <CardHeader
          title={props.card.title}
          sx={{ backgroundColor: 'whitesmoke' }}
          action={
            <ExpandIconButton
              expand={expanded ? 1 : 0}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandIconButton>
          }
        />
      </StyledCardActionArea>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ backgroundColor: 'whitesmoke' }}>
          <Typography>{props.card.description}</Typography>
        </CardContent>
      </Collapse>
    </StyledCard>
  );
}
