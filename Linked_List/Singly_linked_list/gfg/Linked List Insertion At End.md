# 🔄 Insert Node at the End of a Linked List

## 🚀 Problem Statement

Given the head of a linked list, insert a new node with a given value `x` at the end of the list and return the modified list.

## 🔍 Example

```javascript
Input: head = [1,2,3], x = 4
Output: [1,2,3,4]

Input: head = [], x = 5
Output: [5]
```

## 💡 Solution Approach

1. **Create a New Node**: Instantiate a new node with the given value `x`.
2. **Check if List is Empty**: If `head` is `null`, the new node becomes the head.
3. **Traverse to the End**: Iterate through the list until reaching the last node.
4. **Insert the Node**: Attach the new node to the last node's `next` pointer.

## 📝 Code Implementation

```javascript
class Solution {
    insertAtEnd(head, x) {
        let node = new Node(x);
        if (head == null) {
            head = node;
            return head;
        }
        
        let temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = node;
        return head;
    }
}
```

## 🛠 Complexity Analysis

- **Time Complexity**: `O(n)`, where `n` is the number of nodes in the linked list (since we traverse to the end).
- **Space Complexity**: `O(1)`, as we only use a constant amount of extra space.

## ✅ Edge Cases Considered

- The list is empty (`head == null`).
- The list contains only one node.
- The list contains multiple nodes.

## 🎯 Summary

This function efficiently inserts a new node at the end of a linked list while maintaining optimal time and space complexity. 🚀

