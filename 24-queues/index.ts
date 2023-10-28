interface QueueStructure {
  enqueue(item: any): void;
  dequeue(index: any): void;
  peek(): void;
  isEmpty(): boolean;
  size(): number;
  toString(): string | undefined;
  getQueue(): Object;
}

class Queue implements QueueStructure {
  private count: number;
  private lowestCount: number;
  items: Object;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // This method adds a new elements at the back of the queue.
  enqueue(...newItems: any[]) {
    if (newItems.length === 0) throw new Error("One value must be provided");

    const totalItems = newItems.length;

    for (let i = 0; i < totalItems; i++) {
      const newItem = newItems[i];
      this.items[this.count] = newItem;
      this.count++;
    }
  }

  // This method deletes the first element from the queue.
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const target = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;

    return target;
  }

  // This method returns the first element in the queue.
  peek() {
    if (this.isEmpty()) return undefined;

    return this.items[this.lowestCount];
  }

  // This method returns the size of the queue.
  size() {
    return this.count - this.lowestCount;
  }

  // This method returns a boolean if the queue is empty.
  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    while (!this.isEmpty()) {
      this.dequeue();
    }
  }

  toString() {
    if (this.isEmpty()) return undefined;

    return this.items.toString();
  }

  getQueue() {
    return this.items;
  }
}

const StringQueue = new Queue();

StringQueue.enqueue("a", "b", "c", "d", "e", "f", "g", "h", "i");
// console.log(StringQueue.items); // { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }

StringQueue.dequeue();
// console.log(StringQueue.items); // { '1': 'b', '2': 'c', '3': 'd' }

console.log(StringQueue.peek()); // b
console.log(StringQueue.getQueue()); // { '1': 'b', '2': 'c', '3': 'd' }
StringQueue.clear();
console.log(StringQueue.getQueue()); // {}
