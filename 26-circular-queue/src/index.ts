// The circular queue - Hot Potato
import Queue from "./queue";

function hotPotato(elementsList, num) {
  const queue = new Queue();
  const eliminatedList = [];

  // Enqueue elements
  queue.enqueue(...elementsList);

  while (queue.size() > 1) {
    // Shuffles the elements
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    // Deletes one random element
    eliminatedList.push(queue.dequeue());
  }

  return {
    winner: queue.dequeue(),
    losers: eliminatedList,
  };
}

function randomInteger(min = 7, max = 20) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNumber = randomInteger();
console.log(randomNumber);
const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];

console.log("result: ", hotPotato(names, randomNumber));
