import Queue from "./queue";

interface IQueueStackMethods {
  addFront(item: any): void;
  addBack(item: any): void;
  peekFront(): any;
  peekBack(): any;
  removeFront(): any;
  removeBack(): any;
  getProperties(): void;
}

class MergerQueueStack extends Queue implements IQueueStackMethods {
  items: Object;

  constructor() {
    super();
  }

  /*
    - This method adds a new item at the front of the queue

    case1: Evaluates when the queue is empty.

    case2: Evaluates when one queue item has been deleted and adds the new item in the lowest position (0).

    case3: When the queue is not empty, so it must add the new item at the front of the queue and reposition the old first item  to the next position - ['a','b'] => [empty,'a', 'b'].
   */
  addFront(item: string) {
    switch (true) {
      case this.isEmpty():
        this.addBack(item);
        break;

      case this.lowestCount > 0:
        this.lowestCount--;
        this.items[this.lowestCount] = item;
        this.count++;
        break;

      default:
        /*
					item = 'a';
				  ['b', 'c'] =>  ['a', 'b', 'c']
						i0,  i1				 i0,  i1,   i2
				 */

        for (let i = this.count; i > 0; i--) {
          this.items[i] = this.items[i - 1];
        }
        this.count++;
        break;
    }

    this.items[0] = item;
  }

  /*
    - Adds a new item at the back of the queue.
  */
  addBack(item: string) {
    this.items[this.count] = item;
    this.count++;
  }

  /*
    - Returns the first item at the front of the queue.
  */
  peekFront(): string {
    return super.peek();
  }

  /*
    - Returns the last item at the back of the queue.
  */
  peekBack(): string {
    if (this.isEmpty()) return undefined;

    return this.items[this.count - 1];
  }

  /*
    - Implements the same logic of the dequeue method in the Queue class.
  */
  removeFront() {
    const target = super.dequeue();
    if (this.count === this.lowestCount) this.resetProperties();
    return target;
  }

  /*
    - Implements the same logic of the Stack class in the method pop (Last in first out).
  */
  removeBack() {
    if (this.isEmpty()) return undefined;

    this.count--;
    const target = this.items[this.count];
    delete this.items[this.count];

    if (this.count === this.lowestCount) this.resetProperties();
    return target;
  }

  /* 
   - Resets all properties in the class.
  */
  resetProperties() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  /* 
   - Helper function for testing purposes
  */
  getProperties() {
    console.log(this.count, this.lowestCount, this.items);
  }
}

const Deque = new MergerQueueStack();
Deque.addFront("c");
Deque.addFront("b");
// console.log("peekBack: ", Deque.peekBack());
console.log(Deque.toString());
Deque.addFront("a");

// console.log("peekFront: ", Deque.peekFront());
// Deque.removeFront();
console.log(Deque.toString());
Deque.removeBack();
Deque.removeBack();
Deque.removeFront();
console.log(Deque.size());
Deque.addFront("c");
Deque.addFront("b");
Deque.addFront("a");

Deque.removeBack();
Deque.removeFront();
Deque.removeBack();

Deque.getProperties();
