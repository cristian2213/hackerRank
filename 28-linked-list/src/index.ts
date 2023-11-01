function defaultEquals(a, b) {
  return a === b;
}

interface ILinkedList {
  push(element): void;
  insert(element, position): void;
  getElementAt(index): any;
  remove(element): any;
  indexOf(element): number;
  removeAt(index: number): any;
  isEmpty(): boolean;
  size(): number;
  toString(): string;
}

class ListNode {
  public element: any;
  public next: ListNode;

  constructor(element: any) {
    this.element = element;
    this.next = undefined;
  }
}

class LinkedList implements ILinkedList {
  protected count: number;
  protected head: undefined | any;
  protected equalsFn: Function;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  // - This method adds a new element to the end of the list.
  push(element: any): void {
    const newNode = new ListNode(element);
    let lastNode: any;

    // First Node
    if (this.head == null) {
      this.head = newNode;
    } else {
      lastNode = this.head;

      // get last Node
      while (lastNode.next != null) {
        lastNode = lastNode.next;
      }

      // Makes the bind to the last Node
      lastNode.next = newNode;
    }

    this.count++;
  }

  // - This method inserts a new element at a specified position in the list
  insert(element: any, position: any): void {
    throw new Error("Method not implemented.");
  }

  // - This method returns the element of a specific position in the list. If the element does not exist in the list, it returns undefined.

  getElementAt(index: any) {
    if (index < 0 || index >= this.count) return undefined;

    // The previous validation makes sure that the linked list at least contains one element to get. But if node variable is added to the for condition the previous validation can be deleted and the code isn't going to burst.
    let node = this.head;
    for (let i = 0; i < index && node != null; i++) {
      node = node.next;
    }

    return node;
  }

  // - This method removes an element from the list based on its node value.
  remove(element: any) {
    throw new Error("Method not implemented.");
  }

  // - This method returns the index of the element in the list. If the element does not exist in the list, it returns -1.
  indexOf(element: any): number {
    throw new Error("Method not implemented.");
  }

  // -This method removes a Node from a specified index in the list.
  removeAt(index: number) {
    // No negative values, and no values out of the limit
    if (index < 0 || index >= this.count) return undefined;

    let currentNode = this.head;
    // Deletes the first node
    if (index === 0) {
      this.head = currentNode.next;
    } else {
      /* - We don't need to iterate until find the target node, All we need is iterate one node before and with the link to the next node we can rewrite the link (next property):

      const obj = {
        element: 10,
        next: {
          element: 15,
          next: {
            element: 20,
            next: {
              element: 25,
              next: undefined,
            },
          },
        },
      };

      */

      let previousNode: ListNode;
      for (let i = 0; i < index; i++) {
        previousNode = currentNode; // first iteration is the head node
        currentNode = currentNode.next;
      }

      // Because of previousNode is a reference in memory of this.head variable, if we change it, the original reference (this.head) will be updated.
      previousNode.next = currentNode.next;
    }

    this.count--;
    return currentNode.element;
  }

  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }

  size(): number {
    throw new Error("Method not implemented.");
  }

  toString(): string {
    throw new Error("Method not implemented.");
  }
}

const list = new LinkedList();

list.push(5); // ListNode { element: 15, next: undefined }
list.push(10); // ListNode {element: 15, next: ListNode { element: 10, next: undefined }}
list.push(15);
list.push(20);
list.push(25);

console.log("removeAt:", list.removeAt(1)); // {element: 10, next: ListNode}
console.log("getElementAt:", list.getElementAt(0)); // {element: 5, next: ListNode}
