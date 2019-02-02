// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
    size() {
        let count = 0;
        let i = this.head;
        while (i) {
            count++;
            i = i.next;
        }
        return count;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        let i = this.head;
        while (i.next) {
            i = i.next;
        }
        return i;
    }
    clear() {
        this.head = null;
    }
}

module.exports = { Node, LinkedList };
