class LinkedListNode<T> {
  public next: LinkedListNode<T> | null = null;
  public value: T;
  constructor(value: T, next: LinkedListNode<T> | null) {
    this.value = value;
    this.next = next;
  }

  public setNext(newList: LinkedListNode<T> | null) {
    this.next = newList;
  }
}
class LinkedList<T> {
  public head: LinkedListNode<T> | null = null;
  public length: number = 0;
  // O(1) for insertion
  public insertAtHead = (value: T): void => {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    this.length++;
  };
  //T: O(n) S: O(n)
  public static fromValues<T>(...values: T[]): LinkedList<T> {
    const ll: LinkedList<T> = new LinkedList();
    for (let i = 0; i < values.length; i++) {
      ll.insertAtHead(values[i]);
    }
    return ll;
  }
  public getByIndex = (index: number) => {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      if (!currentNode || currentNode.next === null) {
        return null;
      }
      currentNode = currentNode.next;
    }
    if (currentNode === null) return null;
    return currentNode;
  };
  public logAllValues = (): void => {
    if (!this.head) return;
    let finalString = "";
    let currentNode: LinkedListNode<T> | null = this.head;
    while (currentNode) {
      finalString += "-->" + currentNode.value;
      currentNode = currentNode.next;
    }
    finalString += "-->null";
    console.log(finalString);
  };
  public insertAtIndex(index: number, value: T) {
    if (index === 0) return this.insertAtHead(value);
    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  }
}
export default LinkedList;
