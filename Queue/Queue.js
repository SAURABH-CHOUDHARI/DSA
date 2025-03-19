class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    enqueue(val) {
        const newNode = new Node(val)
        if (this.rear == null) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }
    dequeue() {
        if (this.front == null) {
            console.log("queue is empty")
            return
        }
        this.front = this.front.next;
        if (this.front == null) this.rear = null;
        this.size--;
    }
    empty() {
        return this.size === 0;
    }
    display() {
        if (this.front == null) {
            console.log("queue is empty")
            return
        }
        let cur = this.front
        while (cur != null) {
            process.stdout.write(cur.val + " ");
            cur = cur.next;
        }
    }
}

let Q1 = new Queue();
Q1.enqueue(10);
Q1.enqueue(20);
Q1.enqueue(30);
Q1.enqueue(40);
Q1.display();
console.log();

Q1.dequeue();
Q1.display();
console.log();
console.log(Q1.size)

Q1.empty();
console.log(Q1.empty())