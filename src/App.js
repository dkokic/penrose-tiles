import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  svg = {
    width: 1280,
    height: 600
  }
  angle = -90
  point1 = { x: Math.cos(Math.PI * 72 / 180), y: Math.sin(Math.PI * 72 / 180) }
  point2 = { x: Math.cos(Math.PI * 144 / 180), y: Math.sin(Math.PI * 144 / 180) }
  points = [
    { x: 1, y: 0 }, this.point1, this.point2,
    { x: this.point2.x, y: -this.point2.y }, { x: this.point1.x, y: -this.point1.y }
  ].map((p) => { return { x: p.x * 200, y: p.y * 200 }; })

  makeString = (points) => points.reduce((r, p) => r + p.x + ',' + p.y + ', ', '')

  scale = 1 / (1 - 2 * Math.cos(Math.PI * 144 / 180))

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
              <polygon fill="white" stroke="black" points={this.makeString(this.points)} />
              <g transform={`scale(${this.scale})`}>
                <g transform={`rotate(${180})`}>
                  <polygon fill="white" stroke="black" points={this.makeString(this.points)} />
                </g>
                {
                  this.points.map((p) => (
                    <g transform={`translate(${p.x * (1 / this.scale - 1)} ${p.y * (1 / this.scale - 1)})`}>
                      <polygon fill="white" stroke="black" points={this.makeString(this.points)} />
                    </g>
                  ))
                }
              </g>
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
