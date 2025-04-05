# 👁️‍🗨️ Right View of Binary Tree

## 💡 Intuition
The **Right View** of a binary tree contains the **last node visible** at each level when the tree is viewed from the right side. To achieve this, we can use **level order traversal** (Breadth-First Search) and ensure we capture the last node at each level.

---

## 🚀 Approach
We use a queue for level order traversal:
1. Initialize an empty result array `ans` and enqueue the root.
2. For each level:
   - Get the number of nodes (`size`) at the current level.
   - Traverse all nodes of this level.
   - **Push the last node (index `i === size - 1`) to the result.**
   - Enqueue left and right children of the current node.
3. Continue until the queue is empty.

---

## 📌 Steps
1. If the root is null, return an empty array.
2. Initialize a queue and push the root node.
3. While the queue is not empty:
   - Store the current level size.
   - For each node in this level:
     - If it's the last node (`i === size - 1`), add its value to the result.
     - Add its left and right children to the queue.
4. After all levels are processed, return the result array.

---

## 🧑‍💻 Code
```javascript
class Solution {
    rightView(root) {
        if(!root) return [];
        let ans = [];
        let q = [root];

        while(q.length > 0){
            let size = q.length;
            for(let i = 0; i < size; i++){
                let node = q[i];
                if(i === size - 1) ans.push(node.data);
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }
            q.splice(0, size);
        }

        return ans;
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
     / \   \
    4   5   6
```
### Level Order
- Level 0: [1] → Right: `1`
- Level 1: [2, 3] → Right: `3`
- Level 2: [4, 5, 6] → Right: `6`

🔚 Final Output:
- **Right View:** `[1, 3, 6]`

---

## ⏱️ Complexity Analysis
- **Time Complexity:** `O(N)` — Every node is visited once.
- **Space Complexity:** `O(N)` — For queue storage.

---

## 🎯 Summary
- BFS was used to traverse the tree level-by-level.
- Captured the last visible nodes at each level to form the **Right View**.
- Clean and efficient solution for visualizing trees from the right side. 🌳➡️👁️

