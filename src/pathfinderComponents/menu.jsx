import React, { Component } from 'react';
import SimpleSelect from "./simpleSelect";

class Menu extends Component {
    render() {
        const {
            onAlgoChanged,
            algorithms,
            onMazeChanged,
            mazes,
            onCreateMaze,
            onVisualize,
            onClearPath,
            onClearBoard
        } = this.props;

        return (
            <nav className="nav alert-dark px-3 py-2 d-flex flex-wrap align-items-start">
              
                <div className="d-flex flex-column mr-4">
                    <div className="mb-3"> 
                        <SimpleSelect
                            onAlgoChanged={onAlgoChanged}
                            items={algorithms}
                        />
                    </div>
                    <div>
                        <SimpleSelect
                            onAlgoChanged={onMazeChanged}
                            items={mazes}
                        />
                    </div>
                </div>

               
                <div className="d-flex flex-wrap align-items-start gap-2 mt-1">
                    <button
                        className="btn btn-lg btn-secondary m-2"
                        onClick={onCreateMaze}>
                        Create Maze
                    </button>
                    <button
                        className="btn btn-warning btn-lg m-2"
                        onClick={onVisualize}>
                        Visualize
                    </button>
                    <button
                        className="btn btn-danger btn-lg m-2"
                        onClick={onClearPath}>
                        Clear Path
                    </button>
                    <button
                        className="btn btn-danger btn-lg m-2"
                        onClick={onClearBoard}>
                        Clear Board
                    </button>
                </div>
            </nav>
        );
    }
}

export default Menu;
