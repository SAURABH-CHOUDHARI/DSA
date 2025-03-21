# Stack Implementation in JavaScript

## 📌 Introduction
A **stack** is a linear data structure that follows the **LIFO (Last In, First Out)** principle. This means that the last element added to the stack will be the first one to be removed.

In this implementation, we create a stack using a **linked list** approach in JavaScript.

---

## 🔍 Stack Fundamentals
A **stack** supports the following fundamental operations:
- **Push**: Adds an element to the top of the stack 📥
- **Pop**: Removes and returns the top element of the stack 📤
- **Peek**: Returns the top element without removing it 👀
- **Display**: Prints the stack elements from top to bottom 📜

---

## 🛠️ Implementation Details
We create two classes:
1. **Node**: Represents each element in the stack.
2. **Stack**: Implements the stack operations using a linked list.

```javascript
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
```

---

## 🏗️ Step-by-Step Breakdown
### 1️⃣ **Push Operation** (📥 Adding an Element)
- Create a new node.
- Point its `next` to the current top element.
- Update the `top` to the new node.
- Increase the stack size.

### 2️⃣ **Pop Operation** (📤 Removing an Element)
- Check if the stack is empty.
- Store the top element's value.
- Update `top` to point to the next element.
- Decrease the stack size.

### 3️⃣ **Peek Operation** (👀 Viewing the Top Element)
- Check if the stack is empty.
- Return the value of the top element without modifying the stack.

### 4️⃣ **Display Operation** (📜 Printing Stack Elements)
- Traverse the stack from top to bottom.
- Store elements in an array.
- Print them in the correct order.

---

## 🚀 Example Usage
```javascript
let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.display();  // Output: 10 20 30 40

s.pop();
s.display();  // Output: 10 20 30

console.log(s.peek()); // Output: 30
```

---

## 🎯 Time Complexity
- **Push**: O(1) ✅
- **Pop**: O(1) ✅
- **Peek**: O(1) ✅
- **Display**: O(N) ❌ (N is the number of elements in the stack)

---

## 🏆 Advantages of Stack (Using Linked List)
✔️ Dynamic size allocation (no wasted space)
✔️ Efficient O(1) push and pop operations
✔️ No need for resizing (as in arrays)

---

## ❗ Use Cases of Stacks
✅ Undo/Redo operations in text editors ✍️
✅ Call stack in programming languages 💻
✅ Backtracking (e.g., solving mazes, recursion) 🔄
✅ Expression evaluation (postfix, prefix) ➕➖
✅ Browser history (back/forward navigation) 🌐

---

## 📝 Conclusion
This stack implementation provides an efficient way to manage elements using **LIFO**. It supports essential operations like push, pop, and peek with **O(1)** time complexity. 🚀

