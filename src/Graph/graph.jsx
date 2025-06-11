import React, { Component } from 'react';
import CanvasSvg from "./canvasSVG";
import { getTree } from "./fib";
import Menu from "./menu";
import Navbar from "./navbar";
import Details from "./details";

class Graph extends Component {
  constructor() {
    super();
    this.state = {
      root: undefined,
      vertices: [],
      edges: [],
      current: -1,
      n: 0,
      r: 2,
      algo: 0,
      offset: 0,
      disable: false,  
    };
  }

  setAlgo = (pos, val) => {
    if (pos === 0) {
      this.setState({ algo: val });
    }
  };

  setN = (pos, val) => {
    if (pos === 0) {
      this.setState({ n: val });
    }
  };

  setR = (pos, val) => {
    if (pos === 0) {
      this.setState({ r: val });
    }
  };

  resetGraph = () => {
    this.setState({
      root: undefined,
      vertices: [],
      edges: [],
      current: -1,
      n: 0,
      r: 2,
      algo: 0,
      offset: 0,
      disable: false,  
    });
  };

  addNumber = async () => {
    this.setState({ disable: true });  

    const tree = getTree(this.state.n, this.state.algo, this.state.r);
    this.setState(
      {
        edges: [],
        vertices: [],
        offset: tree.x,
        current: -1,
      },
      async () => {
        await this.recur(tree, undefined);
        this.setState({ disable: false });  
      }
    );
  };

  recur = async (node, parent) => {
    let { vertices, edges, current } = this.state;

    current = vertices.length;

    if (parent !== undefined) {
      vertices.push({
        label: node.tree.label,
        val: node.children.length ? 0 : node.tree.node,
        x: node.x,
        y: node.y,
        px: parent.x,
        py: parent.y,
      });

      edges.push({
        x1: parent.x,
        y1: parent.y,
        x2: node.x,
        y2: node.y,
      });
    } else {
      vertices.push({
        label: node.tree.label,
        val: node.children.length ? 0 : node.tree.node,
        x: node.x,
        y: node.y,
        px: node.x,
        py: node.y,
      });
    }

    this.setState({ vertices, edges, current });
    await sleep(500);

    for (let i = 0; i < node.children.length; i++) {
      await this.recur(node.children[i], node);
      this.setState({ current });
      await sleep(500);
    }

    vertices = [...this.state.vertices];
    vertices[current].val = node.tree.node;
    this.setState({ vertices });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Menu
          setN={this.setN}
          setR={this.setR}
          setAlgo={this.setAlgo}
          onStart={this.addNumber}
          onReset={this.resetGraph}  
          disable={this.state.disable} 
        />
        <Details algo={this.state.algo} />
        <CanvasSvg
          vertices={this.state.vertices}
          edges={this.state.edges}
          current={this.state.current}
          offset={this.state.offset}
        />
      </div>
    );
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default Graph;
