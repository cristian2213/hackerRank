"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    // This method adds a new elements at the back of the queue.
    enqueue(...newItems) {
        if (newItems.length === 0)
            throw new Error("One value must be provided");
        const totalItems = newItems.length;
        for (let i = 0; i < totalItems; i++) {
            const newItem = newItems[i];
            this.items[this.count] = newItem;
            this.count++;
        }
    }
    // This method deletes the first element from the queue.
    dequeue() {
        if (this.isEmpty())
            return undefined;
        const target = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return target;
    }
    // This method returns the first element in the queue.
    peek() {
        if (this.isEmpty())
            return undefined;
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
        if (this.isEmpty())
            return undefined;
        let chain = "";
        for (let i = this.lowestCount; i < this.count; i++) {
            chain += `${this.items[i]}${i + 1 === this.count ? "" : ","}`;
        }
        return chain;
    }
    getQueue() {
        return this.items;
    }
}
class MergerQueueStack extends Queue {
    constructor() {
        super();
    }
    /*
      - This method adds a new item at the front of the queue
  
      case1: Evaluates when the queue is empty.
  
      case2: Evaluates when the first queue item has been deleted and adds the new item in the lowest position (0).
  
      case3: When the queue is not empty, so it must add the new item at the front of the queue and reposition the old first item  to the next position - ['a','b'] => [empty,'a', 'b'].
     */
    addFront(item) {
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
    addBack(item) {
        this.items[this.count] = item;
        this.count++;
    }
    /*
      - Returns the first item at the front of the queue.
    */
    peekFront() {
        return super.peek();
    }
    /*
      - Returns the last item at the back of the queue.
    */
    peekBack() {
        if (this.isEmpty())
            return undefined;
        return this.items[this.count - 1];
    }
    /*
      - Implements the same logic of the dequeue method in the Queue class.
    */
    removeFront() {
        const target = super.dequeue();
        if (this.count === this.lowestCount)
            this.resetProperties();
        return target;
    }
    /*
      - Implements the same logic of the Stack class in the method pop (Last in first out).
    */
    removeBack() {
        if (this.isEmpty())
            return undefined;
        this.count--;
        const target = this.items[this.count];
        delete this.items[this.count];
        if (this.count === this.lowestCount)
            this.resetProperties();
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
exports.default = MergerQueueStack;
//# sourceMappingURL=deque.js.map