import { LinkedList, ListNode as Node } from "./linked-list";

class CircularLinkedList extends LinkedList {
  constructor(equalsFn?) {
    super(equalsFn);
  }

  insert(element, index): boolean {
    if (index < 0 || index > this.count) return undefined;

    const newNode = new Node(element);
    let current = this.head;
    // Add on first place
    if (index === 0) {
      // -- No elements yet
      if (this.head == null) {
        this.head = newNode;
        newNode.next = this.head;
      } else {
        // -- One or more elements added
        newNode.next = current;
        current = this.getElementAt(this.size());
        // --- Update last element
        this.head = newNode;
        current.next = this.head;
      }
    } else {
      // Add on middle or last place
      const previous = this.getElementAt(index - 1);
      newNode.next = previous.next;
      previous.next = newNode;
    }

    this.count++;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) return undefined;

    let current = this.head;

    // Delete the first position
    if (index === 0) {
      // Delete the only element on the first position
      if (this.size() === 1) {
        this.head = undefined;
      } else {
        // Delete the first position and update the tail to the new head or if there is only one element left then update the tail to itself.
        const removed = this.head;
        current = this.getElementAt(this.size());
        this.head = this.head.next;
        current.next = this.head;
        current = removed;
      }
    } else {
      // no need to update last element for circular list.
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }

    this.count--;
    return current.element;
  }

  getElementAt(index: any) {
    let node = this.head;
    for (let i = 0; i < index && node != null; i++) {
      node = node.next;
    }

    return node;
  }
}

const circularLinkedList = new CircularLinkedList();
console.log("insert:", circularLinkedList.insert("a", 0));
console.log("insert:", circularLinkedList.insert("b", 1));
console.log("insert:", circularLinkedList.insert("d", 2));
console.log("insert:", circularLinkedList.insert("c", 2));
console.log("items:", circularLinkedList.toString()); // a,b,c,d
console.log("removeAt:", circularLinkedList.removeAt(3)); // d
