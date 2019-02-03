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
        if (!this.head) { return null }
        let i = this.head;
        while (i.next) {
            i = i.next;
        }
        return i;
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        if (this.head) {
            this.head = this.head.next;
        }
    }
    removeLast() {
        if (!this.head) { return; }
        if (!this.head.next) { return this.head = null }
        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

}

module.exports = { Node, LinkedList };
