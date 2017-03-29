import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pentagon from "./Pentagon";

class App extends Component {
  svg = {
    width: 1280,
    height: 600
  }
  angle = -90

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Penrose Tiles in React</h2>
        </div>
        <div className="App-content">
          <svg ref="svg" style={{border: "1px solid lightgray"}}
               width="95%" height={this.svg.height}
               preserveAspectRatio="xMidYMid"
               viewBox={`0 0 ${this.svg.height} ${this.svg.height}`}>
            <g transform={`translate(${this.svg.height / 2} ${this.svg.height / 2}) rotate(${this.angle})`}>
              {
                [-2, -1, 0, 1, 2].map((i) => (<line key={`y${i}`} stroke="black" x1={i * 100} y1="-300" x2={i * 100} y2="300" />))
              }{
                [-2, -1, 0, 1, 2].map((i) => (<line key={`x${i}`} stroke="black" x1="-300" y1={i * 100} x2="300" y2={i * 100} />))
              }
              <Pentagon/>
            </g>
          </svg>
        </div>
        <div className="App-footer">
          <span>Created by </span>
          <a href="http://kodra.net">Draško Kokić</a>
          <span> • </span>
          <a href="https://github.com/dkokic/penrose-tiles">Github Repo</a>
        </div>
      </div>
    );
  }
}

export default App;
