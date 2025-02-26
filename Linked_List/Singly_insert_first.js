class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertAtFirst(val) {
        let newNode = new Node(val)

        newNode.next = this.head
        this.head = newNode
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

newNode.print()
