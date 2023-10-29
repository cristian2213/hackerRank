"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    // This method adds a new elements at the back of the queue.
    Queue.prototype.enqueue = function () {
        var newItems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newItems[_i] = arguments[_i];
        }
        if (newItems.length === 0)
            throw new Error("One value must be provided");
        var totalItems = newItems.length;
        for (var i = 0; i < totalItems; i++) {
            var newItem = newItems[i];
            this.items[this.count] = newItem;
            this.count++;
        }
    };
    // This method deletes the first element from the queue.
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var target = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return target;
    };
    // This method returns the first element in the queue.
    Queue.prototype.peek = function () {
        if (this.isEmpty())
            return undefined;
        return this.items[this.lowestCount];
    };
    // This method returns the size of the queue.
    Queue.prototype.size = function () {
        return this.count - this.lowestCount;
    };
    // This method returns a boolean if the queue is empty.
    Queue.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    Queue.prototype.clear = function () {
        while (!this.isEmpty()) {
            this.dequeue();
        }
    };
    Queue.prototype.toString = function () {
        if (this.isEmpty())
            return undefined;
        var chain = "";
        for (var i = this.lowestCount; i < this.count; i++) {
            chain += "".concat(this.items[i]).concat(i + 1 === this.count ? "" : ",");
        }
        return chain;
    };
    Queue.prototype.getQueue = function () {
        return this.items;
    };
    return Queue;
}());
var StringQueue = new Queue();
StringQueue.enqueue("a", "b", "c", "d", "e", "f", "g", "h", "i");
StringQueue.dequeue();
console.log(StringQueue.peek()); // b
console.log(StringQueue.getQueue());
console.log(StringQueue.toString());
StringQueue.dequeue();
StringQueue.dequeue();
StringQueue.clear();
console.log(StringQueue.toString());
exports.default = Queue;
