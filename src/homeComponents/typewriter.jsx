import React, { Component } from 'react';
import Typewriter from "typewriter-effect";
import './style.css';

class TypeWriterC extends Component {
    render() {
        return (
            <div className="typewriter-container" aria-label="Animated text showing algorithm types">
                <Typewriter
                    options={{
                        strings: ['Graph Algorithms', 'Sorting Algorithms'],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        deleteSpeed: 50,
                    }}
                />
            </div>
        );
    }
}

export default TypeWriterC;
