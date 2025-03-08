# 🔄 Doubly Linked List Node Deletion Process 🔄

## 🎯 Goal
Our mission is to delete a node at position `x` from a doubly linked list!

## 🧩 Problem Breakdown

### 📋 What We're Working With:
- A doubly linked list where each node has:
  - `data`: The node's value
  - `next`: Pointer to the next node
  - `prev`: Pointer to the previous node
- Position `x` where we need to remove a node

### 🚦 Constraints:
- List size is between 2 and 10^6 nodes
- Position `x` is always valid (1 ≤ x ≤ list size)
- Node values are between 1 and 10^4

## 🔍 Step-by-Step Solution Process

### 1️⃣ Special Case: Deleting the Head Node
When we need to remove the first node (x = 1):

```javascript
if (x == 1) {
    let newHead = head.next;    // Save the second node as our new head
    newHead.prev = null;        // Remove the back-reference to the old head
    return newHead;             // Return our new head
}
```

### 2️⃣ Finding the Target Node
For any other position, we need to traverse the list:

```javascript
let cur = head;    // Start at the head
let pos = 1;       // Position counter

// Walk through the list until we reach position x
while (pos < x) {
    cur = cur.next;
    pos++;
}
```

### 3️⃣ Rewiring the Connections ⚡
Once we've found our target node, we update the pointers:

```javascript
// Connect the previous node to the next node
cur.prev.next = cur.next;

// If there's a next node, update its prev pointer
if (cur.next) cur.next.prev = cur.prev;
```

### 4️⃣ Return the Result 🎉
```javascript
return head;    // Return the original head (which might be different if we deleted the head)
```

## 💡 Visual Explanation

**Before Deletion:**
```
   +---+    +---+    +---+    +---+
   |   |<-->|   |<-->|   |<-->|   |
   +---+    +---+    +---+    +---+
    [1]      [2]      [3]      [4]
```

**Deleting Node at Position 2:**
```
   +---+             +---+    +---+
   |   |<----------->|   |<-->|   |
   +---+             +---+    +---+
    [1]               [3]      [4]
```

**Deleting Head Node (Position 1):**
```
             +---+    +---+    +---+
             |   |<-->|   |<-->|   |
             +---+    +---+    +---+
              [2]      [3]      [4]
```

## 🧪 Test It Yourself!

```javascript
// Example:
// Create a list: 10 <-> 20 <-> 30
let node1 = { data: 10, prev: null, next: null };
let node2 = { data: 20, prev: null, next: null };
let node3 = { data: 30, prev: null, next: null };

// Connect nodes
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

// Delete node at position 2 (value 20)
let solution = new Solution();
let result = solution.deleteNode(node1, 2);

// Result should be: 10 <-> 30
```

## 🚀 Performance Notes
- ⏱️ Time Complexity: O(n) - we might need to traverse to the nth position
- 🧠 Space Complexity: O(1) - we only use a fixed amount of extra memory

## 🎬 Final Code

```javascript
class Solution {
    deleteNode(head, x) {
        // Handle head deletion
        if (x == 1) {
            let newHead = head.next;
            newHead.prev = null;
            return newHead;
        }
        
        // Find target node
        let cur = head;
        let pos = 1;
        while (pos < x) {
            cur = cur.next;
            pos++;
        }
        
        // Update connections
        cur.prev.next = cur.next;
        if (cur.next) cur.next.prev = cur.prev;
        
        return head;
    }
}
```

Happy coding! 🎉👨‍💻👩‍💻