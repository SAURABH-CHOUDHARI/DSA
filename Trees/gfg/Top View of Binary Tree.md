# 👁️‍🗨️ Top View of Binary Tree

## 💡 Intuition
The **Top View** of a binary tree includes all nodes that are visible when the tree is viewed from the top. To determine this, we track the **horizontal distance (HD)** of each node from the root and ensure we capture the **first node** encountered at each HD during a **level order traversal**.

---

## 🚀 Approach
We perform a level order traversal and maintain a map of horizontal distances:
1. Initialize a queue with the root node and HD `0`.
2. For each node, if its HD is **not already in the map**, record it.
3. Add left child with HD - 1 and right child with HD + 1.
4. After traversal, sort the HDs and collect corresponding node values in order.

---

## 📌 Steps
1. If root is null, return an empty array.
2. Initialize a map `hdMap` to store the first node at each HD.
3. Use a queue to do BFS, storing each node with its HD.
4. For each node:
   - If HD is not in map, store the node value.
   - Enqueue left child with HD - 1.
   - Enqueue right child with HD + 1.
5. After BFS, sort the keys of the map and extract values in that order.

---

## 🧑‍💻 Code
```javascript
class Solution {
    topView(root) {
        if (!root) return [];

        let hdMap = new Map();
        let q = [{ node: root, hd: 0 }];

        while (q.length > 0) {
            let { node, hd } = q.shift();

            if (!hdMap.has(hd)) {
                hdMap.set(hd, node.data);
            }

            if (node.left) q.push({ node: node.left, hd: hd - 1 });
            if (node.right) q.push({ node: node.right, hd: hd + 1 });
        }

        let sortedKeys = Array.from(hdMap.keys()).sort((a, b) => a - b);
        return sortedKeys.map(hd => hdMap.get(hd));
    }
}
```

---

## 🔍 Dry Run
### Tree Example
```
        1
       / \
      2   3
       \   \
        4   5
```
### Top View:
- Horizontal Distances:
  - HD -1: 2
  - HD  0: 1
  - HD  1: 3
  - HD  2: 5

🔚 Final Output:
- **Top View:** `[2, 1, 3, 5]`

---

## ⏱️ Complexity Analysis
- **Time Complexity:** `O(N log N)` — Due to sorting HDs.
- **Space Complexity:** `O(N)` — For the queue and map.

---

## 🎯 Summary
- Used BFS with horizontal distance tracking.
- Stored first visible nodes at each HD.
- Sorted result to produce the **Top View**.

🌳📏 Great way to visualize the structure of a binary tree from the top!

