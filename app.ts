import LinkedList from "./LinkedList";
const ll = LinkedList.fromValues(40, 20, 10);
ll.logAllValues();
ll.insertAtIndex(1, 30);
console.log("this is the result after");
ll.logAllValues();
