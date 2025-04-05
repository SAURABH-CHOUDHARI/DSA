# 🔭 Bottom View of Binary Tree

## 💡 Intuition
The **Bottom View** of a binary tree consists of the nodes that are visible when the tree is viewed from the bottom. We track the **horizontal distance (HD)** of each node from the root and always record the **last node** encountered at each HD during a **level order traversal**.

---

## 🚀 Approach
We perform a level order traversal (BFS) and maintain a map of horizontal distances:
1. Initialize a queue with the root node and HD `0`.
2. For each node, **update the value** in the map for that HD (overwrite previous).
3. Add left child with HD - 1 and right child with HD + 1.
4. After traversal, sort the HDs and collect corresponding node values in order.

---

## 📌 Steps
1. If root is null, return an empty array.
2. Initialize a map `hdMap` to store the latest node at each HD.
3. Use a queue to do BFS, storing each node with its HD.
4. For each node in the current level:
   - Always store/update node value for its HD in the map.
   - Enqueue left child with HD - 1.
   - Enqueue right child with HD + 1.
5. After BFS, sort the keys of the map and extract values in that order.

---

## 🧑‍💻 Code
```javascript
class Solution {
    bottomView(root) {
        if (!root) return [];

        let hdMap = new Map();
        let q = [{ node: root, hd: 0 }];

        while (q.length > 0) {
            let size = q.length;
            for (let i = 0; i < size; i++) {
                let { node, hd } = q[i];

                hdMap.set(hd, node.data);

                if (node.left) q.push({ node: node.left, hd: hd - 1 });
                if (node.right) q.push({ node: node.right, hd: hd + 1 });
            }
            q.splice(0, size);
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
        20
       /  \
      8   22
     / \    \
    5  3    25
      / \
     10 14
```
### Horizontal Distances:
- HD -2: 5
- HD -1: 10
- HD  0: 3
- HD  1: 14
- HD  2: 25

🔚 Final Output:
- **Bottom View:** `[5, 10, 3, 14, 25]`

---

## ⏱️ Complexity Analysis
- **Time Complexity:** `O(N log N)` — Due to sorting HDs.
- **Space Complexity:** `O(N)` — For the queue and map.

---

## 🎯 Summary
- Used level order traversal with horizontal distance tracking.
- Always updated each HD's entry for the most recently seen node.
- Sorted the map to extract the bottom view from left to right.

🌳🔽 A great way to look at the binary tree from ground level!