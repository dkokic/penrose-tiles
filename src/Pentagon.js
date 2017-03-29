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
    return this.props.depth > 0 ? (
      <g transform={`scale(${this.scale})`}>
        <g transform={`rotate(${180})`}>
          <Pentagon depth={this.props.depth - 1} />
        </g>
        {
          this.points.map((p, index) => (
            <g key={index} transform={`translate(${p.x * (1 / this.scale - 1)} ${p.y * (1 / this.scale - 1)})`}>
              <Pentagon depth={this.props.depth - 1} />
            </g>
          ))
        }
      </g>
    ) : (
      <polygon fill="white" stroke="black" points={this.makeString(this.points)} />
    )
  }
}

export default Pentagon
