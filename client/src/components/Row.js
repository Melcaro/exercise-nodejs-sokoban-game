import React from 'react';

import { Cell } from './Cell';

export const Row = ({ row, positions, rowIndex }) => {
  return (
    <div>
      {row.map((cell, i) => (
        <Cell
          cell={cell}
          positions={positions}
          rowIndex={rowIndex}
          cellIndex={i}
        />
      ))}
    </div>
  );
};
