# 🔗 Construct a Doubly Linked List

## 🚀 Problem Statement

Given an array of `n` elements, construct a **Doubly Linked List (DLL)** where each node contains a value from the array. The function should return the head of the constructed doubly linked list.

## 🔍 Example

```javascript
Input: arr = [1, 2, 3, 4, 5]
Output: DLL with nodes: 1 ⇄ 2 ⇄ 3 ⇄ 4 ⇄ 5
Explanation: A doubly linked list is created where each node points to the next and previous node.
```

## 💡 Solution Approach

1. **Initialize the Head Node**: Create a new node with the first element of the array and set it as the head.
2. **Iterate Through the Array**: For each element, create a new node and link it to the previous node.
3. **Set Previous Pointers**: Ensure that each node correctly references its predecessor.
4. **Return the Head**: After constructing the list, return the head node.

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
}
```

## 🛠 Complexity Analysis

- **Time Complexity**: `O(n)`, where `n` is the number of elements in the array (since each element is processed once).
- **Space Complexity**: `O(n)`, since we create a new node for each element in the array.

## ✅ Edge Cases Considered

- The array is empty (`arr.length == 0`).
- The array contains only one element.
- The array contains duplicate values.

## 🎯 Summary

This function efficiently constructs a **doubly linked list (DLL)** from an array while maintaining the correct `next` and `prev` pointers for each node. 🚀

