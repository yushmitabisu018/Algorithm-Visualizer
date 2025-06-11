import React, { Component } from 'react';
import ImgMediaCard2 from "./card2";
import "./style.css";
import TextField from '@mui/material/TextField';
import { getDetails } from "./cardDetails";

class Cards extends Component {
  state = {
    cards: [],
    filter: ""
  };

  componentDidMount() {
    const cards = getDetails();
    this.setState({ cards });
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { cards, filter } = this.state;

    const filteredCards = cards.filter(card =>
      card.title.toLowerCase().includes(filter.toLowerCase()) ||
      card.description.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <div className="d-flex justify-content-end Cards">
          <TextField
            id="search"
            label="Search"
            placeholder="Search cards..."
            color="secondary"
            variant="standard"
            value={filter}
            onChange={this.handleFilterChange}
          />
        </div>
        <div className="d-flex flex-wrap justify-content-center Cards p-lg-5">
          {filteredCards.map(card => (
            <ImgMediaCard2 key={card.id} card={card} />
          ))}
        </div>
      </>
    );
  }
}

export default Cards;
