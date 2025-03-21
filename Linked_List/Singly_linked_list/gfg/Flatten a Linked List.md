# Flatten a Multilevel Linked List

## Problem Statement
Given a linked list where every node has two pointers:
1. `next` pointer (points to the next node in the main list)
2. `bottom` pointer (points to a linked list where each node is sorted)

Flatten the list so that all nodes appear in a single level, sorted in increasing order.

---

## Approach 1: Brute Force (Sorting Method) ❌
### Explanation
1. Traverse the entire list and store all node values in an array.
2. Sort the array.
3. Reconstruct a single-level linked list from the sorted values.

### Implementation
```javascript
class Solution {
    flatten(root) {
        let arr = [];
        let cur = root;
        
        while (cur) {
            arr.push(cur.data);
            let temp = cur.bottom;
            
            while (temp) {
                arr.push(temp.data);
                temp = temp.bottom;
            }
            cur = cur.next;
        }
        
        arr.sort((a, b) => a - b);
        
        let dummy = new Node(-1);
        let iter = dummy;
        
        for (let i = 0; i < arr.length; i++) {
            let newNode = new Node(arr[i]);
            iter.bottom = newNode;
            iter = iter.bottom;
        }
        
        return dummy.bottom;
    }
}
```

### Dry Run Example 📝
#### Input:
```
5 -> 10 -> 19 -> 28
|    |     |     |
7    20    22    35
|          |     |
8          50    40
|                |
30               45
```
#### Steps:
1. Store all values: `[5, 10, 19, 28, 7, 20, 22, 35, 8, 50, 40, 30, 45]`
2. Sort them: `[5, 7, 8, 10, 19, 20, 22, 28, 30, 35, 40, 45, 50]`
3. Reconstruct the list.

#### Output:
```
5 -> 7 -> 8 -> 10 -> 19 -> 20 -> 22 -> 28 -> 30 -> 35 -> 40 -> 45 -> 50
```

### Complexity Analysis ⏳
- **Time Complexity:** `O(N log N)` (due to sorting)
- **Space Complexity:** `O(N)` (array to store values)

### Issues 🚨
❌ Sorting is unnecessary since the list is already partially sorted.
❌ Takes extra space.

---

## Approach 2: Optimized Merge Approach ✅
### Explanation
We can merge the lists one by one using a helper function:
1. Use a function `merge(a, b)` to merge two sorted linked lists.
2. Recursively merge the entire list.

### Implementation
```javascript
class Solution {
    merge(a, b) {
        if (!a) return b;
        if (!b) return a;
        
        let result;
        if (a.data < b.data) {
            result = a;
            result.bottom = this.merge(a.bottom, b);
        } else {
            result = b;
            result.bottom = this.merge(a, b.bottom);
        }
        return result;
    }

    flatten(root) {
        if (!root || !root.next) return root;
        
        root.next = this.flatten(root.next);
        root = this.merge(root, root.next);
        return root;
    }
}
```

### Dry Run Example 📝
(Same input as before)
1. Merge two lists at a time, maintaining sorted order.
2. Recursively flatten the list.

#### Output:
```
5 -> 7 -> 8 -> 10 -> 19 -> 20 -> 22 -> 28 -> 30 -> 35 -> 40 -> 45 -> 50
```

### Complexity Analysis ⏳
- **Time Complexity:** `O(N log K)`, where `K` is the number of linked lists.
- **Space Complexity:** `O(1)`, as we modify pointers in place.

### Advantages 🚀
✅ Efficient merging process.
✅ No extra space usage apart from recursion stack.
✅ Utilizes the fact that each bottom list is already sorted.

---
## Conclusion 🎯
- **Brute Force Sorting Method:** Easier to implement but inefficient.
- **Optimized Merge Approach:** More efficient with `O(N log K)` complexity.
- The merge approach is preferred in interview scenarios. 🚀

