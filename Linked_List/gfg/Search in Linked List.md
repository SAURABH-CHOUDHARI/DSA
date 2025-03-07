# 🔍 Search in a Linked List

## 🚀 Problem Statement

Given a linked list of `n` nodes and a `key`, check if the `key` is present in the linked list or not.

## 🔍 Example

```javascript
Input: n = 4, key = 3
Linked List: 1 -> 2 -> 3 -> 4
Output: true
Explanation: 3 is present in the linked list, so the function returns true.

Input: n = 5, key = 6
Linked List: 1 -> 2 -> 3 -> 4 -> 5
Output: false
Explanation: 6 is not present in the linked list, so the function returns false.
```

## 💡 Solution Approach

1. **Traverse the List**: Iterate through the linked list.
2. **Compare Each Node**: Check if the current node's value matches the key.
3. **Return Result**: If a match is found, return `true`; otherwise, return `false` after the traversal.

## 📝 Code Implementation

```javascript
class Solution {
    /**
     * @param {number} n
     * @param {Node} head
     * @param {number} key
     * @returns {boolean}
     */
    searchKey(n, head, key) {
        let temp = head;
        while (temp != null) {
            if (temp.data === key) return true; // Fixed condition to check node data
            temp = temp.next;
        }
        return false; // Changed null to false for correct return type
    }
}
```

## 🛠 Complexity Analysis

- **Time Complexity**: `O(n)`, where `n` is the number of nodes in the linked list (since we traverse the list once).
- **Space Complexity**: `O(1)`, as we only use a constant amount of extra space.

## ✅ Edge Cases Considered

- The list is empty (`head == null`).
- The key is present at the head, middle, or tail of the list.
- The key is not present in the list.

## 🎯 Summary

This function efficiently searches for a key in a linked list while maintaining optimal time and space complexity. 🚀

