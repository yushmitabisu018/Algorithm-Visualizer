import React, { Component } from 'react';
import DiscreteSlider from "./slider";
import SimpleSelect from "./simpleSelect";



class Menu extends Component {
    render() {
        return (
            <nav className="nav">
                <button
                    className='btn btn-secondary'
                    onClick={this.props.onRandomize}
                    disabled={this.props.disable}
                    style={this.isClickable()}
                >
                    Randomize
                </button>

                <div className="menu-item">
                    <DiscreteSlider
                        default={20}
                        min={10}
                        max={100}
                        step={10}
                        title="Numbers"
                        onCountChange={this.props.onCountChange}
                        isDisabled={this.props.disable}
                    />
                </div>

                <div className="menu-item">
                    <DiscreteSlider
                        default={50}
                        min={10}
                        max={100}
                        step={1}
                        title="Speed"
                        onCountChange={this.props.onSpeedChange}
                        isDisabled={false}
                    />
                </div>

                <div className="menu-item">
                    <SimpleSelect
                        pos={0}
                        onAlgoChanged={this.props.onAlgoChanged}
                    />
                </div>

                <button
                    className='btn btn-warning'
                    onClick={this.props.onVisualize}
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
