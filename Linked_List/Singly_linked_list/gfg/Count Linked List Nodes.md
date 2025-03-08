# 🔢 Count Nodes in a Linked List

## 🚀 Problem Statement

Given the head of a singly linked list, count the total number of nodes present in the list and return the count.

## 🔍 Example

```javascript
Input: head = [1,2,3,4,5]
Output: 5

Input: head = []
Output: 0

Input: head = [10]
Output: 1
```

## 💡 Solution Approach

1. **Initialize a Counter**: Start with a counter set to `0`.
2. **Traverse the List**: Move through the linked list while keeping count of the nodes.
3. **Return the Count**: Once the traversal is complete, return the final count.

## 📝 Code Implementation

```javascript
class Solution {
    getCount(head) {
        if (head == null) return 0;
        let size = 0;
        while (head != null) {
            head = head.next;
            size++;
        }
        return size;
    }
}
```

## 🛠 Complexity Analysis

- **Time Complexity**: `O(n)`, where `n` is the number of nodes in the linked list (since we traverse the list once).
- **Space Complexity**: `O(1)`, as we only use a single variable to keep count.

## ✅ Edge Cases Considered

- The list is empty (`head == null`).
- The list contains only one node.
- The list contains multiple nodes.

## 🎯 Summary

This function efficiently counts the number of nodes in a linked list using a simple iteration approach. 🚀

