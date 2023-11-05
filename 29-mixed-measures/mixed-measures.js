/* 
- 1H = 60M
- 1M = 60S
- 1S = 1000MLs
[
    [hours, minutes, seconds]
]
*/

const time_data = [
  [1, 30, 45],
  [0, 15, 20],
  [2, 5, 0],
  [3, 10, 55],
  [0, 50, 15],
  [15, 45, 30],
];

function sum_time_data(time_data) {
  const total_data = time_data.length;

  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  for (let i = 0; i < total_data; i++) {
    for (let j = 0; j < 3; j++) {
      const unit = time_data[i][j];
      if (j === 0) hours += unit;
      if (j === 1) minutes += unit;
      if (j === 2) seconds += unit;
    }
  }

  while (seconds >= 60) {
    minutes += 1;
    seconds -= 60;
  }

  while (minutes >= 60) {
    hours += 1;
    minutes -= 60;
  }

  return [hours, minutes, seconds];
}

module.exports = sum_time_data;
