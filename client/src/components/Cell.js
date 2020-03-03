import React from 'react';

function isPosition(position1, position2) {
  return position1.y === position2.y && position1.x === position2.x;
}


export const Cell = ({ cell, positions, rowIndex, cellIndex }) => {
  return <span>X</span>;
};
