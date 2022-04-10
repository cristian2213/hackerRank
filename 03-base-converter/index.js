/*
- The remainders will be 0 or 1; in the conversion from decimal to
octagonal, the remainders will be from 0 to 8; and in the conversion from
decimal to hexadecimal, the remainders can be 0 to 9 plus the letters A to F
(values 10 to 15).
*/
function baseConverter(number, base) {
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let num = number;
  const rems = [];
  let result = '';

  while (num > 0) {
    let division = Math.floor(num / base);
    rems.push(Math.floor(num % base));
    num = division;
  }

  rems.forEach((rem) => {
    result += digits[rem];
  });
  return result.split('').reverse().join('');
}

console.log(baseConverter(1253, 2)); // Binary => 10011100101
console.log(baseConverter(1253, 8)); // Octagonal => 2345
console.log(baseConverter(1253, 16)); // Hexadecimal => 4E5
console.log(baseConverter(1253034, 32)); // Hexadecimal => 167LA
