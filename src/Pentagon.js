import React from 'react'

class Pentagon extends React.Component {

  point1 = { x: Math.cos(Math.PI * 72 / 180), y: Math.sin(Math.PI * 72 / 180) }
  point2 = { x: Math.cos(Math.PI * 144 / 180), y: Math.sin(Math.PI * 144 / 180) }
  points = [
    { x: 1, y: 0 }, this.point1, this.point2,
    { x: this.point2.x, y: -this.point2.y }, { x: this.point1.x, y: -this.point1.y }
  ].map((p) => { return { x: p.x * 200, y: p.y * 200 }; })

  makeString = (points) => points.map((p) => p.x + ',' + p.y).join(', ')

  scale = 1 / (1 - 2 * Math.cos(Math.PI * 144 / 180))

  render() {
    return (
      <g>
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
    )
  }
}

export default Pentagon
