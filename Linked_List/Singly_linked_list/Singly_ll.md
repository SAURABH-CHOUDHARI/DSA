# 📚 Singly Linked List - A Comprehensive Guide

## 🔍 Introduction
A **Singly Linked List (SLL)** is a data structure consisting of **nodes**, where each node contains:
- A **value (data)**
- A **pointer (reference)** to the **next node** in the sequence

Unlike arrays, **linked lists** provide **dynamic memory allocation** and **efficient insertions/deletions** but require extra memory for pointers.

---

## 🏗️ Node Structure in JavaScript
Each node in an SLL is an object with two properties:
- `value` → Stores the actual data
- `next` → A reference to the next node (or `null` if it's the last node)

### 📝 Code Implementation
```javascript
class ListNode {
    constructor(value) {
        this.value = value;  // Data stored in the node
        this.next = null;    // Pointer to the next node
    }
}
```

---

## 🔗 Singly Linked List Class
A **Singly Linked List** consists of a sequence of nodes where each node points to the next.

### 📝 Code Implementation
```javascript
class SinglyLinkedList {
    constructor() {
        this.head = null;  // Points to the first node
        this.tail = null;  // Points to the last node
        this.length = 0;   // Tracks the number of nodes
    }
}
```

---

## 🔄 Basic Operations

### 1️⃣ **Insert at the End (Append)**
- If the list is empty, set `head` and `tail` to the new node.
- Otherwise, update the `next` of the last node and move `tail` forward.

#### 📝 Code Implementation
```javascript
append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
        this.head = this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
}
```

### 2️⃣ **Insert at the Beginning (Prepend)**
- Make the new node point to the current `head`.
- Update `head` to the new node.

#### 📝 Code Implementation
```javascript
prepend(value) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) {
        this.tail = newNode;
    }
    this.length++;
}
```

### 3️⃣ **Delete a Node by Value**
- Traverse the list to find the node before the target.
- Update its `next` pointer to skip the target node.

#### 📝 Code Implementation
```javascript
delete(value) {
    if (!this.head) return;

    if (this.head.value === value) {
        this.head = this.head.next;
        this.length--;
        return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
        current = current.next;
    }
    
    if (current.next) {
        current.next = current.next.next;
        this.length--;
    }
}
```

### 4️⃣ **Search for a Value**
- Traverse through the list and check each node's value.

#### 📝 Code Implementation
```javascript
search(value) {
    let current = this.head;
    while (current) {
        if (current.value === value) return true;
        current = current.next;
    }
    return false;
}
```

### 5️⃣ **Reverse the List**
- Change the `next` pointers of each node to point to the previous node.

#### 📝 Code Implementation
```javascript
reverse() {
    let prev = null;
    let current = this.head;
    this.tail = this.head;
    
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev;
}
```

---

## 🔥 Example Usage
```javascript
const list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
console.log(list.search(20)); // true
list.delete(20);
console.log(list.search(20)); // false
list.prepend(5);
list.reverse();
```

---

## 📈 Complexity Analysis
| Operation     | Time Complexity |
|--------------|---------------|
| Append       | O(1)          |
| Prepend      | O(1)          |
| Delete       | O(n)          |
| Search       | O(n)          |
| Reverse      | O(n)          |

---

## 🎯 Key Takeaways
✅ **Efficient insertions/deletions** compared to arrays.
✅ **Uses dynamic memory allocation**.
✅ **Takes extra space** for storing pointers.
✅ **Reversal and deletion** take `O(n)` time.

Happy Coding! 🚀🎉

