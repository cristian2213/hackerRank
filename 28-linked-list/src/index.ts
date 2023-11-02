function defaultEquals(a, b) {
  return a === b;
}

interface ILinkedList {
  push(element): boolean;
  insert(element, position): boolean;
  getElementAt(index): any;
  remove(element): any;
  indexOf(element): number;
  removeAt(index: number): any;
  isEmpty(): boolean;
  size(): number;
  getHead(): Object;
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
  private head: undefined | any;
  protected equalsFn: Function;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  // - This method adds a new element to the end of the list.
  push(element: any): boolean {
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
    return true;
  }

  // - This method inserts a new element at a specified position in the list
  insert(element: any, index: any): boolean {
    if (index < 0 || index > this.count) return undefined;

    const newNode = new ListNode(element);
    if (index === 0) {
      // Add on first position
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const previous = this.getElementAt(index - 1);
      newNode.next = previous.next;
      previous.next = newNode;
    }
    this.count++;
    return true;
  }

  // - This method returns the element of a specific position in the list. If the element does not exist in the list, it returns undefined.

  getElementAt(index: any) {
    if (this.validateIndex(index)) return undefined;

    // The previous validation makes sure that the linked list at least contains one element to get. But if node variable is added to the for condition the previous validation can be deleted and the code isn't going to burst.
    let node = this.head;
    for (let i = 0; i < index && node != null; i++) {
      node = node.next;
    }

    return node;
  }

  // - This method removes an element from the list based on its element value.
  remove(element: any): any {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  // - This method returns the index of the element in the list using the element value.
  indexOf(elementValue: any): number {
    let currentNode = this.head;
    for (let i = 0; i < this.count; i++) {
      if (this.equalsFn(elementValue, currentNode.element)) return i;
      currentNode = currentNode.next;
    }
    return -1;
  }

  // -This method removes a Node from a specified index in the list.
  removeAt(index: number) {
    if (this.validateIndex(index)) return undefined;

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

      // This works, but the below approach too and with less code.
      let previousNode: ListNode;
      for (let i = 0; i < index; i++) {
        previousNode = currentNode; // first iteration is the head node
        currentNode = currentNode.next;
      }

      // Because of previousNode is a reference in memory of this.head variable, if we change it, the original reference (this.head) will be updated.

      // previousNode.next = currentNode.next;

      */

      const previous = this.getElementAt(index - 1);
      currentNode = previous.next;
      previous.next = currentNode.next;
    }

    this.count--;
    return currentNode.element;
  }

  validateIndex(index: any): boolean {
    // No negative values, and no values out of the limit
    return index < 0 || index >= this.count;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  toString(): string {
    if (this.isEmpty()) return "";

    let chain = `${this.head.element}`;
    let node = this.head.next;
    for (let i = 1; i < this.size(); i++) {
      chain = `${chain},${node.element}`;
      node = node.next;
    }
    return chain;
  }
}

const list = new LinkedList();

list.push(5); // ListNode { element: 15, next: undefined }
list.push(10); // ListNode {element: 15, next: ListNode { element: 10, next: undefined }}
// list.push(15);
// list.push(20);
// list.push(25);

// console.log("removeAt:", list.removeAt(1)); // {element: 10, next: ListNode}
// console.log("getElementAt:", list.getElementAt(0)); // {element: 5, next: ListNode}
list.insert(30, 2);
// console.log("indexOf:", list.indexOf(30));
// console.log("remove:", list.remove(30));
console.log(list.toString());
