export const maze = {
  map: `
    XXXXX             
    X   X             
    X*  X             
  XXX  *XXX           
  X  *  * X           
XXX X XXX X     XXXXXX
X   X XXX XXXXXXX  ..X
X *  *             ..X
XXXXX XXXX X@XXXX  ..X
    X      XXX  XXXXXX
    XXXXXXXX
`,
  sizeX: 22,
  sizeY: 11,
};

const splittedMaze = maze.map.split('\n');
const defaultPostions = {
  walls: [],
  boxes: [],
  targets: [],
  bob: null,
};
export const mazePositions = splittedMaze.reduce(
  (acc, row, j) => {
    const rowPositions = row.split('').reduce((positions, cell, i) => {
      if (cell === 'X') {
        return { ...positions, walls: [...positions.walls, { x: i, y: j }] };
      } else if (cell === '*') {
        return { ...positions, boxes: [...positions.boxes, { x: i, y: j }] };
      } else if (cell === '.') {
        return {
          ...positions,
          targets: [...positions.targets, { x: i, y: j }],
        };
      } else if (cell === '@') {
        return { ...positions, bob: { x: i, y: j } };
      }

      return positions;
    }, defaultPostions);

    return {
      walls: [...acc.walls, ...rowPositions.walls],
      boxes: [...acc.boxes, ...rowPositions.boxes],
      targets: [...acc.targets, ...rowPositions.targets],
      bob: rowPositions.bob || acc.bob,
    };
  },

  defaultPostions
);
