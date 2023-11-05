const sum_time_data = require("./mixed-measures");

describe("sum_time_data", () => {
  it("should return the correct sum of time data", () => {
    const time_data1 = [
      [1, 30, 45],
      [0, 15, 20],
      [2, 5, 0],
      [3, 10, 55],
      [0, 50, 15],
      [15, 45, 30],
    ]; // [23, 37, 45]

    const time_data2 = [
      [2, 30, 15],
      [1, 10, 30],
      [4, 45, 10],
    ];
    // Expected Result: [8, 25, 55]

    const time_data3 = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    // Expected Result: [0, 0, 0]

    const time_data4 = [
      [5, 0, 0],
      [3, 45, 20],
      [2, 30, 15],
      [1, 15, 45],
    ];
    // Expected Result: [12, 31, 20]

    const time_data5 = [
      [1, 0, 0],
      [0, 15, 0],
      [2, 0, 45],
    ];
    // Expected Result: [3, 15, 45]

    const time_data6 = [
      [0, 0, 30],
      [0, 30, 0],
      [0, 0, 45],
    ];
    // Expected Result: [0, 31, 15]

    const result1 = sum_time_data(time_data1);
    const result2 = sum_time_data(time_data2);
    const result3 = sum_time_data(time_data3);
    const result4 = sum_time_data(time_data4);
    const result5 = sum_time_data(time_data5);
    const result6 = sum_time_data(time_data6);

    const expected1 = [23, 37, 45];
    const expected2 = [8, 25, 55];
    const expected3 = [0, 0, 0];
    const expected4 = [12, 31, 20];
    const expected5 = [3, 15, 45];
    const expected6 = [0, 31, 15];

    expect(result1).toEqual(expected1);
    expect(result2).toEqual(expected2);
    expect(result3).toEqual(expected3);
    expect(result4).toEqual(expected4);
    expect(result5).toEqual(expected5);
    expect(result6).toEqual(expected6);
  });
});
