class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertAtFirst(val) {
        this.size++
        let newNode = new Node(val)

        newNode.next = this.head
        this.head = newNode
    }
    insertAtlast(val) {
        this.size++
        let newNode = new Node(val)
        if (this.head == null) {
            this.head = newNode;
            return
        }
        let cur = this.head;
        while (cur.next != null) {
            cur = cur.next
        }
        cur.next = newNode;

    }
    deleteAtfirst() {
        if (this.head == null) {
            console.log("no node to delete")
            return
        }
        this.size--
        if (this.head.next == null) {
            this.head = null;
            return
        }
        this.head = this.head.next;
    }
    deleteAtlast() {
        if (this.head == null ) {
            return
        }
        this.size--
        if (this.head.next == null) {
            this.head = null
            return
        }
        let cur = this.head;
        while (cur.next.next != null) {
            cur = cur.next;
        }
        cur.next = null
    }
    insertAtPos(val, pos) {
        if (pos < 1 || this.size + 1 < pos) {
            console.log("Out of Bound")
            return
        }
        if (pos == 1) {
            this.insertAtfirst(val)
            return
        }
        if (pos == this.size + 1) {
            this.insertAtlast(val)
            return
        }
        this.size++
        let newNode = new Node(val)
        let cur = this.head;
        let i = 1;
        while (i < pos - 1) {
            cur = cur.next;
            i++
        }
        newNode.next = cur.next;
        cur.next = newNode;
    }
    deleteAtPos(pos) {
        if (pos < 1 || this.size < pos) {
            console.log("Out of bound")
            return
        }
        if (pos == 1) {
            this.deleteAtfirst()
            return
        }
        if (pos == this.size) {
            this.deleteAtlast()
            return
        }
        this.size--
        let cur = this.head;
        let i = 1;
        while (i < pos - 1) {
            cur = cur.next;
            i++
        }
        cur.next = cur.next.next;

    }
    print() {
        if (this.head == null) {
            console.log("no node ahead")
            return
        }
        let temp = this.head;
        let ans = [];
        while (temp != null) {
            ans.push(temp.val)
            temp = temp.next;
        }
        console.log(ans.join(" => ") + " => null")
    }
}

let newNode = new LinkedList()

newNode.insertAtFirst(40)
newNode.insertAtFirst(42)
newNode.insertAtFirst(47)
newNode.insertAtFirst(50)
newNode.insertAtlast(10)
newNode.deleteAtfirst()
newNode.deleteAtlast()
newNode.insertAtPos(31, 3)
newNode.insertAtPos(300, 4)
newNode.insertAtPos(333, 6)
newNode.deleteAtPos(3)

console.log(newNode.size)
newNode.print()
