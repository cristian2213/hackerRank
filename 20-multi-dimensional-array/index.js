// Create a 3x3 matrix.

const cubeMatrix = [];

/*
i = row
j = column
z = depth
 */

for (let i = 0; i < 3; i++) {
  cubeMatrix[i] = [];
  for (let j = 0; j < 3; j++) {
    cubeMatrix[i][j] = [];
    for (let z = 0; z < 3; z++) {
      cubeMatrix[i][j][z] = i + j + z;
    }
  }
}

console.log(cubeMatrix);
/*
[
  [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
  ],
  [
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5],
  ],
  [
    [2, 3, 4],
    [3, 4, 5],
    [4, 5, 6],
  ],
];
/*
