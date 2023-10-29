import Queue from "./queue";

interface IQueueStackMethods {
  addFront(item: string): void;
  addBack(item: string): void;
  peekFront(): string;
  peekBack(): string;
  removeFront(): string;
  removeBack(): string;
}

class MergerQueueStack extends Queue {
  items: Object;

  constructor() {
    super();

    // Override properties
    // this.items = {
    //   1: "b",
    //   2: "c",
    // };
    // this.count = 2;
    // this.lowestCount = 0;
  }

  addFront(item: string) {
    switch (true) {
      case this.isEmpty():
        this.addBack(item);
        break;

      case this.lowestCount > 0:
        this.lowestCount--;
        this.items[this.lowestCount] = item;
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
        break;
    }

    this.items[0] = item;
    this.count++;
  }

  addBack(item: string) {
    this.items[this.count] = item;
  }

  peekFront(): string {
    return "";
  }
  peekBack(): string {
    return "";
  }
  removeFront(): string {
    return "";
  }
  removeBack(): string {
    return "";
  }
}

const Deque = new MergerQueueStack();
Deque.addFront("c");
Deque.addFront("b");
Deque.addFront("a");
console.log(Deque.toString());
