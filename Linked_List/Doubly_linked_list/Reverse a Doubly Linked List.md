# 🔗 Construct, Modify, and Reverse a Doubly Linked List

## 🚀 Problem Statement

### **1️⃣ Constructing a Doubly Linked List**
Given an array of `n` elements, construct a **Doubly Linked List (DLL)** where each node contains a value from the array. The function should return the head of the constructed doubly linked list.

### **2️⃣ Inserting a Node at a Given Position**
Given a **Doubly Linked List (DLL)**, a position `p`, and a value `x`, insert a new node containing `x` at position `p` (0-based indexing).

### **3️⃣ Reversing a Doubly Linked List**
Given the head of a **Doubly Linked List (DLL)**, reverse the list by swapping `next` and `prev` pointers for each node and return the new head.

## 🔍 Example

```javascript
Input: arr = [1, 2, 3, 4, 5]
Output: DLL with nodes: 1 ⇄ 2 ⇄ 3 ⇄ 4 ⇄ 5

Input: head = 1 ⇄ 2 ⇄ 3 ⇄ 4 ⇄ 5, p = 2, x = 10
Output: 1 ⇄ 2 ⇄ 10 ⇄ 3 ⇄ 4 ⇄ 5

Input: head = 1 ⇄ 2 ⇄ 3 ⇄ 4 ⇄ 5
Output: 5 ⇄ 4 ⇄ 3 ⇄ 2 ⇄ 1
Explanation: The DLL is reversed.
```

## 💡 Solution Approach

### **1️⃣ Constructing the DLL**
- Initialize the head node with the first array element.
- Iterate through the array, linking each node to its predecessor and successor.
- Return the head node.

### **2️⃣ Inserting a Node at a Given Position**
- If `p == 0`, insert at the head.
- Traverse to position `p` and insert the new node.
- Adjust `next` and `prev` pointers accordingly.

### **3️⃣ Reversing the DLL**
- Traverse the DLL while swapping `next` and `prev` pointers.
- Update the head when reaching the new starting node.

## 📝 Code Implementation

```javascript
class Solution {
    /**
    * @param {number[]} arr
    * @returns {Node}
    */
    constructDLL(arr) {
        let node = new Node(arr[0]);
        let head = node;
        let tail = node;
        tail.prev = null;
        
        for (let i = 1; i < arr.length; i++) {
            let temp = new Node(arr[i]);
            let temp2 = tail;
            tail.next = temp;
            tail = temp;
            tail.prev = temp2;
        }
        
        return head;
    }

    /**
    * @param {Node} head
    * @param {number} p
    * @param {number} x
    * @returns {Node}
    */
    addNode(head, p, x) {
        let node = new Node(x);
        
        if (p == 0) {
            node.next = head;
            if (head) head.prev = node;
            return node;
        }
        
        let temp = head;
        for (let i = 0; i < p - 1 && temp != null; i++) {
            temp = temp.next;
        }
        
        if (temp == null) return head; // Position is out of bounds
        
        node.next = temp.next;
        if (temp.next) temp.next.prev = node;
        temp.next = node;
        node.prev = temp;
        
        return head;
    }

    /**
    * @param {Node} head
    * @returns {Node}
    */
    reverseDLL(head) {
        let current = head;
        let temp = null;

        while (current != null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            
            if (current.prev == null) {
                head = current;
                break;
            }
            current = current.prev;
        }
        
        return head;
    }
}
```

## 🛠 Complexity Analysis

- **Constructing DLL**: `O(n)` time, `O(n)` space.
- **Inserting a Node**: `O(p)` time (traverse up to position `p`), `O(1)` space.
- **Reversing DLL**: `O(n)` time (traverse all nodes), `O(1)` space.

## ✅ Edge Cases Considered

- Empty array (`arr.length == 0`).
- Single-element array.
- Inserting at the beginning (`p == 0`).
- Inserting at the end (`p == n - 1`).
- Invalid positions (`p > list length`).
- Reversing an empty or single-node list.

## 🎯 Summary

This solution efficiently constructs a **Doubly Linked List (DLL)** from an array, supports node insertion at any position, and allows for reversing the list while maintaining correct `next` and `prev` pointers. 🚀

