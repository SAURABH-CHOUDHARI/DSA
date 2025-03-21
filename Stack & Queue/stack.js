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

    pop() {
        if (this.size === 0) {
            return null;
        }

        const poppedValue = this.top.val;
        this.top = this.top.next;
        this.size--;
        return poppedValue;
    }

    peek() {
        if (this.size === 0) {
            return null;
        }
        return this.top.val;
    }

    display() {
        let values = [];
        let cur = this.top;
        while (cur) {
            values.push(cur.val);
            cur = cur.next;
        }

        console.log(values.reverse().join(' '));
    }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.display();
s.pop();
s.display();
console.log(s.peek()); 