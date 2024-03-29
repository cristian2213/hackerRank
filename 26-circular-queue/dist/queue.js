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
exports.default = Queue;
//# sourceMappingURL=queue.js.map