function decimalToBinaryConverter(decimalValue) {
  const remainders = [];
  let number = decimalValue;

  while (number > 0) {
    const moduleOperation = number % 2;
    const divisionOperation = Math.floor(number / 2);
    remainders.push(moduleOperation);
    number = divisionOperation;
  }

  return remainders.reverse().join("");
}

const result10Num = baseConverter(10);
const result233Num = baseConverter(233);
const result1000Num = baseConverter(1000);

// console.log("10:", result10Num); // 1010
// console.log("233:", result233Num); // 11101001
// console.log("1000:", result1000Num); // 1111101000

// The logic is simply, We need two things a decimal number and a base like 2,8 or 16. The logic is to divide the number by the base until getting 0 as quotient and each time we divide, we'll get a remainder, that remainder will be a index in the digits string variable (0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ), and with that indexes we can pull out the proper values for the final result.

function baseConverter(decimalValue, base) {
  const remainders = [];
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decimalValue;

  while (number > 0) {
    const moduleOperation = number % base;
    const divisionOperation = Math.floor(number / base);
    remainders.push(moduleOperation);
    number = divisionOperation;
  }

  return remainders
    .reverse()
    .map((digit) => digits[digit])
    .join("");
}

const base2 = baseConverter(100345, 2); // binary - 11000011111111001
const base8 = baseConverter(100345, 8); // octal - 303771
const base16 = baseConverter(100345, 16); // hexadecimal - 187F9
const base32 = baseConverter(100345, 32); // base-32 - 31VP
console.log(base2);
console.log(base8);
console.log(base16);
console.log(base32);
