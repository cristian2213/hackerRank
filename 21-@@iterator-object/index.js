const numbers = [1, 2, 3, 4, 5, 6, 7];

// Iterate values manually
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4
console.log(iterator.next().value); // 5

// The entries method returns @@iterator, which contains key/value pairs.
let aEntries = numbers.entries(); // retrieve iterator of key/value
console.log(aEntries.next().value); // [0, 1] - position 0, value 1
console.log(aEntries.next().value); // [1, 2] - position 1, value 2
console.log(aEntries.next().value); // [2, 3] - position 2, value 3

// Retrive iterator of keys
const aKeys = numbers.keys(); // retrieve iterator of keys
console.log(aKeys.next()); // {value: 0, done: false }
console.log(aKeys.next()); // {value: 1, done: false }
console.log(aKeys.next()); // {value: 2, done: false } When done has the value "false", it means that there are still more keys of thearray to be iterated.

// values method returns the values of the array.
const aValues = numbers.values();
console.log(aValues.next()); // {value: 1, done: false }
console.log(aValues.next()); // {value: 2, done: false }
console.log(aValues.next()); // {value: 3, done: false }
