import { expect, jest, test, describe } from "@jest/globals";
import LinkedList from "./LinkedList";
//testing the insertAtHead method
describe("#insertAtHead", () => {
  test("it adds the element to the beginning of the list", () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);
    if (ll.head) {
      expect(ll.head.value).toBe(20);
      expect(ll.head.next).toBe(oldHead);
      expect(ll.length).toBe(2);
    } else {
      console.log("linked list is null");
    }
  });
});

describe("#getByIndex", () => {
  describe("with index less than 0", () => {
    test("it returns null", () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(-1)).toBeNull();
    });
  });
  describe("with index greater than list length", () => {
    test("it returns null", () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(5)).toBeNull();
    });
  });
  describe("with index 0 which is the head", () => {
    test("it returns the head", () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(0)).toBe(20);
    });
  });
  describe("with the index in the middle", () => {
    test("it returns the element at that index", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);

      expect(ll.getByIndex(2)).toBe(20);
    });
  });
  describe("#insertAtIndex", () => {
    //insert at a certain index
    //index less than 0 or more than the length of the list - can't
    describe("index smaller than 0", () => {
      test("it does not insert anything", () => {
        const linkedList = LinkedList.fromValues(10, 20);
        linkedList.insertAtIndex(-1, 30);
        expect(linkedList.length).toBe(2);
      });
    });

    //0 = replacing our head value
    describe("index greater than list length", () => {
      test("it does not insert anything", () => {
        const linkedList = LinkedList.fromValues(10, 20);
        linkedList.insertAtIndex(5, 30);
        expect(linkedList.length).toBe(2);
      });
    });
    //with index in the middle
    describe("with the index 0", () => {
      test("insert at the head", () => {
        const linkedList = LinkedList.fromValues(10, 20);
        linkedList.insertAtIndex(0, 30);
        if (linkedList.head) {
          expect(linkedList.head.value === 30);
          if (linkedList.head.next) expect(linkedList.head.next.value === 20);
          //because when we do the fromValues it puts the first ones first
        }
        expect(linkedList.length).toBe(3);
      });
    });
    describe("at the given index", () => {
      test("insert at the index", () => {
        const linkedList = LinkedList.fromValues(20, 10);
        linkedList.insertAtIndex(1, 30);
        expect(linkedList.length).toBe(3);
        if (linkedList) {
          expect(linkedList.getByIndex(1)).toBe(30);
          if (linkedList.head) expect(linkedList.head.value).toBe(10);
        }
      });
    });
  });
});
