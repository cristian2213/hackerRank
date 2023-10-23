// Don't use unshift

const NUMS_ARR = [0, 1, 2, 3, 4, 5];

function insertItemFirstPosition(newItemArg, arrayArg) {
  const newArray = [...arrayArg];
  const numsLength = arrayArg.length;

  for (let i = numsLength; i >= 0; i--) {
    newArray[i] = newArray[i - 1];
  }

  newArray[0] = newItemArg;

  return newArray;
}

console.log(insertItemFirstPosition(-1, NUMS_ARR));
/*
[
  -1, 0, 1, 2,
   3, 4, 5
]
*/
