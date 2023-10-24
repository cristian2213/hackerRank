const friends = [
  { name: "John", age: 30 },
  { name: "Ana", age: 20 },
  { name: "Chris", age: 25 },
];

function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}

console.log(friends.sort(comparePerson));

/*
[
    {
        "name": "Ana",
        "age": 20
    },
    {
        "name": "Chris",
        "age": 25
    },
    {
        "name": "John",
        "age": 30
    }
]
*/

let names = ["Ana", "ana", "john", "John"];
console.log(names.sort()); // ["Ana", "John", "ana", "john"]

/*
Why didn't it sort?
    JavaScript compares each character according to its ASCII value. Forexample, A, J, a, and j have the decimal ASCII values of A: 65, J: 74, a: 97, and j:106.
*/

console.log(
  names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  })
);

/*
[
    "Ana",
    "ana",
    "John",
    "john"
]
*/

// If we want lowercase letters to come first in the sorted array, then we need to usethe localeCompare method:
names.sort((a, b) => a.localeCompare(b)); // ["ana", "Ana", "john", "John"]
