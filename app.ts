import LinkedList from "./LinkedList";
const ll = LinkedList.fromValues(40, 30, 20, 10);
ll.logAllValues();
console.log("this is after remove at index 1 function");
ll.removeAtIndex(1);
ll.logAllValues();
console.log(ll.length);
