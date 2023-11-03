import { LinkedList, ListNode as Node } from "./linked-list";

class CircularLinkedList extends LinkedList {
  constructor(equalsFn) {
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
        current.need = this.head;
      }
    } else {
      // Add on middle or last place
      const previous = this.getElementAt(index - 1);
      newNode.next = previous.next;
      previous.next = newNode;
    }

    this.count;
    return true;
  }

  removeAt(index) {}
}
