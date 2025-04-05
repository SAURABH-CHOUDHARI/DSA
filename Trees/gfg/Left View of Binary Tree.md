# 👁️‍🗨️ Left View of Binary Tree

## 💡 Intuition
The **Left View** of a binary tree contains the **first node visible** at each level when the tree is viewed from the left side. To achieve this, we can use **level order traversal** (Breadth-First Search) and ensure we capture the first node at each level.

---

## 🚀 Approach
We use a queue for level order traversal:
1. Initialize an empty result array `ans` and enqueue the root.
2. For each level:
   - Get the number of nodes (`size`) at the current level.
   - Traverse all nodes of this level.
   - **Push the first node (index `i === 0`) to the result.**
   - Enqueue left and right children of the current node.
3. Continue until the queue is empty.

---

## 📌 Steps
1. Check if the root is null; if so, return an empty array.
2. Initialize a queue and add the root node to it.
3. Traverse each level using the size of the queue.
4. For the first node at each level (`i === 0`), store its value in the result array.
5. Add the left and right child nodes (if they exist) to the queue.
6. Continue this until the entire tree is traversed.
7. Return the result array.

---

## 🧑‍💻 Code
```javascript
class Solution {
    leftView(root) {
        if(!root) return [];
        let ans = [];
        let q = [root];

        while(q.length > 0){
            let size = q.length;
            for(let i = 0; i < size; i++){
                let node = q[i];
                if(i === 0) ans.push(node.data);
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
- Level 0: [1] → add `1` to result
- Level 1: [2, 3] → add `2`
- Level 2: [4, 5, 6] → add `4`

🔚 Final Output: `[1, 2, 4]`

---

## ⏱️ Complexity Analysis
- **Time Complexity:** `O(N)` — Every node is visited once.
- **Space Complexity:** `O(N)` — For queue storage.

---

## 🎯 Summary
- Performed BFS to scan levels.
- Captured the leftmost node at each level.
- Straightforward and optimal approach.

👀 Tree gazing from the left made easy! 🌲

