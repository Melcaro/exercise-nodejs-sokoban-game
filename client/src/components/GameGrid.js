import React, { Component } from 'react';
import { maze, mazePositions } from '../data/maps.js';

import { Row } from './Row';

export class GameGrid extends Component {
  state = {
    grid: new Array(maze.sizeY).fill(new Array(maze.sizeX).fill(0)),
    positions: mazePositions,
  };
  render() {
    const { grid, positions } = this.state;
    return (
      <div>
        <h1>Sokoban game with NodeJS</h1>
        <div>
          {grid.map((row, i) => (
            <Row row={row} positions={positions} rowIndex={i} />
          ))}
        </div>
      </div>
    );
  }
}
