# 🔗 Construct a Linked List from an Array

## 🚀 Problem Statement

Given an array of integers, construct a singly linked list where each element in the array becomes a node in the linked list, preserving the order.

## 🔍 Example

```javascript
Input: arr = [1,2,3,4,5]
Output: head -> 1 -> 2 -> 3 -> 4 -> 5 -> null

Input: arr = []
Output: null
```

## 💡 Solution Approach

1. **Create the Head Node**: Initialize the head with the first element of the array.
2. **Iterate Through the Array**: Use a loop to traverse the array and create new nodes.
3. **Link Nodes Together**: Maintain a `tail` pointer to keep track of the last node and link new nodes to it.
4. **Return the Head**: The head node represents the entire linked list.

## 📝 Code Implementation

```javascript
class Solution {
    construct(arr) {
        if (arr.length === 0) return null;

        let head = new Node(arr[0]);
        let tail = head;

        for (let i = 1; i < arr.length; i++) {
            let temp = new Node(arr[i]);
            tail.next = temp;
            tail = temp;
        }
        return head;
    }
}
```

## 🛠 Complexity Analysis

- **Time Complexity**: `O(n)`, where `n` is the number of elements in the array (since we iterate once through the array).
- **Space Complexity**: `O(1)`, as we use a constant amount of extra space.

## ✅ Edge Cases Considered

- The input array is empty (`arr.length == 0`).
- The array contains only one element.
- The array contains duplicate elements.

## 🎯 Summary

This function efficiently constructs a linked list from an array while maintaining optimal time and space complexity. 🚀

