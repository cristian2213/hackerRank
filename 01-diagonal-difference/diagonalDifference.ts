/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
  let leftD: number = 0;
  let rightD: number = 0;
  let leftCounter: number = 0;
  const totalRows: number = arr.length;
  for (let i = 0; i < totalRows; i++) {
    const totalColumns: number = arr[i].length;
    for (let j = 0; j < totalColumns; j++) {
      if (j === leftCounter) {
        leftD += arr[i][j];
        rightD += arr[i][Math.abs(j - (totalColumns - 1))];
        leftCounter += 1;
        break;
      }
    }
  }
  return Math.abs(leftD - rightD);
}
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));