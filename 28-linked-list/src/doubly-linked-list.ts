import { ListNode as Node, LinkedList } from "./linked-list";

class DoubleNode extends Node {
  public prev;

  constructor(element, prev?) {
    super(element);
    this.prev = prev;
  }
}

class DoublyLinkedList extends LinkedList {
  protected tail;

  constructor() {
    super();

    this.tail = undefined;
  }

  insert(element, index): any {
    if (index < 0 || index > this.count) return false;

    let node = new DoubleNode(element);
    let current = this.head;

    // first New node
    if (index === 0) {
      if (this.head == null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        current.prev = node;
        this.head = node;
      }
      // last New node
    } else if (index === this.count) {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
      // Whatever position except the first and last node
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      node.next = current;
      previous.next = node;
      current.prev = node;
      node.prev = previous;
    }
    this.count++;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) return undefined;

    let current = this.head;
    // Deletes first position
    if (index === 0) {
      this.head = current.next;
      if (this.count === 1) {
        this.tail = undefined;
      } else {
        this.head.prev = undefined;
      }
    } else if (index === this.count - 1) {
      // Deletes the last position
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = undefined;
    } else {
      // Deletes a middle position
      current = this.getElementAt(index);
      const previous = current.prev;
      previous.next = current.next;
      current.next.prev = previous;
    }

    this.count--;
    return current.element;
  }
}

const dLinkedList = new DoublyLinkedList();
// dLinkedList.insert("a", 0);
// dLinkedList.insert("b", 1);
// dLinkedList.insert("d", 2);
// dLinkedList.insert("c", 2);
// console.log(dLinkedList.toString()); // a,b,c,d
// console.log(dLinkedList.removeAt(3)); // d
export { DoubleNode, DoublyLinkedList };
