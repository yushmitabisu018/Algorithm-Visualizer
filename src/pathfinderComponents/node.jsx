import React, { Component } from 'react';
import './node.css';

class Node extends Component {
    render() {
        const { row, col, node, onMouseDown, onMouseEnter, onMouseUp } = this.props;

        return (
            <div
                id={`node-${row}-${col}`}
                className={this.getClassName()}
                onMouseDown={() => onMouseDown(row, col)}
                onMouseEnter={() => onMouseEnter(row, col)}
                onMouseUp={() => onMouseUp(row, col)}
                role="button"
                tabIndex={0}
            />
        );
    }

    getClassName() {
        const { node } = this.props;

        if (node.isWall) {
            return "node node-wall";
        } else if (node.isStartNode) {
            return "node node-start";
        } else if (node.isEndNode) {
            return "node node-end";
        } else if (node.ispathNode) {
            return "node node-shortest-path";
        } else if (node.isVisited) {
            return "node node-visited";
        } else {
            return "node";
        }
    }
}

export default Node;
