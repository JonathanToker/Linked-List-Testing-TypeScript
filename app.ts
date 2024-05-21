import LinkedList from "./LinkedList";
const ll = LinkedList.fromValues(20, 10);
ll.logAllValues();
ll.insertAtIndex(2, 30);
console.log("this is the result after");
ll.logAllValues();
console.log(ll.length);
