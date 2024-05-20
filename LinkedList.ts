class LinkedListNode<T> {
  public next: LinkedListNode<T> | null = null;
  public value: T;
  constructor(value: T, next: LinkedListNode<T> | null) {
    this.value = value;
    this.next = next;
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
}
export default LinkedList;
