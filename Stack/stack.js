class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(val) {
        this.size++;
        let newNode = new Node(val);
        newNode.next = this.top;
        this.top = newNode;
    }

    
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);
