# 🚀 Add One to a Number Represented as a Linked List

## 🔍 Problem Statement
Given a **singly linked list** representing a non-negative integer, add **one** to the number. The digits are stored such that the **most significant digit is at the head** of the linked list.

## 🏆 Examples

### Example 1:
```javascript
Input: 1 -> 2 -> 3
Output: 1 -> 2 -> 4
Explanation: 123 + 1 = 124
```

### Example 2:
```javascript
Input: 9 -> 9 -> 9
Output: 1 -> 0 -> 0 -> 0
Explanation: 999 + 1 = 1000
```

---

## 🛠 Approach
### 🔄 Steps:
1. **Reverse the linked list** so that we can process the least significant digit first.
2. Traverse the reversed list and **add one to the first non-9 digit**.
3. If all digits are **9**, set them to **0** and add an extra **1** node at the end.
4. **Reverse the list back** to restore the original order.

---

## 📝 Code
```javascript
class Solution {
    addOne(node) {
      let cur = node;
      let next = cur.next;
      let prev = null;
      
      // Reverse the linked list
      while (cur) {
          next = cur.next;
          cur.next = prev;
          prev = cur;
          cur = next;
      }
      
      let lastNode = prev;
      
      // Add one to the reversed list
      while (prev) {
          if (prev.data != 9) {
              prev.data += 1;
              break;
          } else {
              prev.data = 0;
              prev = prev.next;
          }
      }
      
      // If we reached the end and all digits were 9, add a new node with value 1
      if (!prev) node.next = new Node(1);
      
      // Reverse the list back
      cur = lastNode;
      next = lastNode.next;
      prev = null;
      
      while (cur) {
          next = cur.next;
          cur.next = prev;
          prev = cur;
          cur = next;
      }
      
      return prev;
    }
}
```

---

## ⏳ Complexity Analysis
- **Time Complexity**: `O(n)`, where `n` is the number of nodes in the linked list. We traverse the list three times (reverse, modify, reverse back).
- **Space Complexity**: `O(1)`, since we modify the list in place without using extra space.

---

## ✅ Edge Cases Considered
- **Single node (e.g., `5` → `6`)**
- **All 9s (e.g., `9 -> 9 -> 9` → `1 -> 0 -> 0 -> 0`)**
- **Empty list (should return null or a new node with value 1)**
- **Large numbers (ensuring correctness with significant digit increases)**

### 🎯 Summary
This approach efficiently **adds one** to a linked list representation of a number by reversing the list, modifying it, and reversing it back. 🚀🔥

