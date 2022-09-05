import { Queue } from '../../16-queue/queue.js';

const iterations = Math.floor(Math.random() * 10000);

function hotPotato(elementsList, num) {
  const queue = new Queue();
  const eliminatedList = [];

  for (let i = 0; i < elementsList.length; i++) {
    // {1} puts all in the queue.
    queue.enqueue(elementsList[i]);
  }

  // {2}  We will remove an item from the beginning of the queue, and add it to the end of thequeue to simulate the hot potato.
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    // person with the hot potato is removed.
    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, iterations);

// result.eliminated.forEach((name) => {
//   console.log(`${name} was eliminated from the Hot Potato game.`);
// // });
console.log(`The winner is: ${result.winner}`);

function hotPotato2(list, iterations) {
  const deletedUsers = [];

  while (list.length > 1) {
    for (let i = 0; i < iterations; i++) {
      list.push(list.shift());
    }
    deletedUsers.push(list.shift());
  }

  return {
    winner: list.shift(),
    deletedUsers,
  };
}

const result2 = hotPotato2(names, iterations);
console.log(`The winner is: ${result2.winner}`);
