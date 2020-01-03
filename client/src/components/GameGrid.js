import React, { Component } from 'react';

import { map } from '../data/maps.js';

export class GameGrid extends Component {
  state = {
    grid: new Array(map.sizeY).fill(new Array(map.sizeX).fill(0)),
  };
  render() {
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
