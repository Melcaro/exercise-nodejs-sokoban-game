import React, { Component } from 'react';

import { maze, mazePositions } from '../data/maps.js';

export class GameGrid extends Component {
  state = {
    grid: new Array(maze.sizeY).fill(new Array(maze.sizeX).fill(0)),
    positions: mazePositions,
  };
  render() {
    console.log(this.state.positions);
    const { grid } = this.state;
    return (
      <div>
        <h1>Sokoban game with NodeJS</h1>
        <div>
          {grid.map((rows, i) => (
            <div>
              {rows.map((cell, j) => (
                <span>0</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
