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
    insertAtlast(val){
        this.size++
        let newNode = new Node(val)
        if(this.head == null){
            this.head = newNode;
            return
        }
        let cur  = this.head;
        while(cur.next != null){
            cur = cur.next 
        }
        cur.next= newNode;
        
    }
    deleteAtfirst(){
        this.size--
        if(this.head == null){
            console.log("no node to delete")
            return
        }
        if (this.head.next == null){
            this.head = null;
            return
        }
        this.head = this.head.next;
    }
    deleteAtlast(){
        this.size--
    if(this.head == null || this.head.next == null){
        this.head = null
        return
    }
    let cur = this.head;
    while(cur.next.next != null){
        cur = cur.next;
    }
    cur.next = null
    }
    insertAtPos(val,pos){
        if(pos<1 || this.size + 2 < pos ){
            console.log("Out of Bound")
            return
        }
        if(pos == 1){
            this.insertAtfirst(val)
            return
        }
        if(pos == this.size+1){
            this.insertAtlast(val)
            return
        }
        this.size++
        let newNode = new Node(val)
        let cur  = this.head;
        let i=1;
        while(i<pos-1){
            cur = cur.next;
            i++
        }
        newNode.next = cur.next;
        cur.next = newNode;
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
newNode.insertAtPos(31,3)
newNode.insertAtPos(300,4)
newNode.insertAtPos(333,6)

newNode.print()
