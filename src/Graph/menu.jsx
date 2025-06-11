import React, { Component } from 'react';
import SimpleSelect from "./simpleSelect";

class Menu extends Component {
  render() {
    return (
      <nav className="nav alert-dark p-2 d-flex align-items-center flex-wrap gap-2">

       
        <SimpleSelect
          pos={0}
          label="Task"
          items={['Fibonacci', 'Binomial Coefficient', 'Derangement']}
          onValueChanged={this.props.setAlgo}
        />

        <SimpleSelect
          pos={0}
          label="N"
          items={[0, 1, 2, 3, 4, 5, 6]}
          onValueChanged={this.props.setN}
        />

        <SimpleSelect
          pos={0}
          label="R"
          items={[0, 1, 2, 3, 4, 5, 6]}
          onValueChanged={this.props.setR}
        />

        <button
          className="btn btn-warning btn-lg"
          onClick={this.props.onReset}
          disabled={this.props.disable}
          style={this.isClickable()}
        >
          Reset
        </button>

        <button
          className="btn btn-warning btn-lg"
          onClick={this.props.onStart}
          disabled={this.props.disable}
          style={this.isClickable()}
        >
          Visualize
        </button>
      </nav>
    );
  }

  isClickable = () => {
    if (this.props.disable) {
      return { cursor: "not-allowed" };
    } else {
      return {};
    }
  }
}

export default Menu;
