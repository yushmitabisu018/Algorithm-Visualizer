import React, { Component } from 'react';
import Node from "./node";
import './grid.css';

class Grid extends Component {
    render() {
        const { grid, onMouseDown, onMouseEnter, onMouseUp } = this.props;

        return (
            <div className="Grid">
                {grid.map((row, rowIdx) => (
                    <div key={rowIdx} className="grid-row">
                        {row.map((node, nodeIdx) => {
                            const { row, col, isWall, visitedNode } = node;
                            return (
                                <Node
                                    key={col}  
                                    row={row}
                                    col={col}
                                    node={node}
                                    isWall={isWall}
                                    visitedNode={visitedNode}
                                    onMouseDown={onMouseDown}
                                    onMouseEnter={onMouseEnter}
                                    onMouseUp={onMouseUp}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        );
    }
}

export default Grid;
