class LinkedListNode<T> {
  public value: T;
  public next: LinkedListNode<T> | null = null;
  constructor(value: T, next: LinkedListNode<T> | null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList<T> {
  public head: LinkedListNode<T> | null = null;
  public length: number = 0;
  public insertAtHead = (value: T): void => {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    this.length++;
  };
}
export default LinkedList;
