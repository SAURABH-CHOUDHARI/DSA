# 🌳 Sum of Longest Root-to-Leaf Path 🌳

## 💡 Intuition
This problem asks us to find the sum of the values along the longest path from the root to any leaf in a binary tree. If there are multiple paths with the same maximum length, we need to return the one with the largest sum.

The key intuition is to perform a depth-first traversal of the tree, keeping track of the length and sum of the current path at each step. When we reach a leaf node, we compare the current path's length and sum with our running maximum.

## 🔍 Approach
We use a recursive depth-first search (DFS) algorithm to explore all possible root-to-leaf paths in the binary tree. As we traverse, we maintain:

1. The current path length (`len`) 📏
2. The current sum of values along the path (`sum`) 🧮
3. A result array `res` where:
   - `res[0]` stores the maximum path length found so far 📊
   - `res[1]` stores the sum of the path with maximum length 💰

## 🚶‍♂️ Steps
1. ✅ Check if the tree is empty. If it is, return 0.
2. ✅ Initialize `res = [0, 0]` to track the maximum length and sum.
3. ✅ Define a recursive `solve` function that takes the current node, path length, and path sum.
4. ✅ In the `solve` function:
   - If the current node is null, return.
   - Increment the length by 1 and add the current node's value to the sum.
   - If it's a leaf node (no left or right children):
     - If the current path length is greater than the maximum length, or if they're equal but the current sum is greater than the maximum sum, update `res`.
   - Recursively call `solve` for the left and right children.
5. ✅ Start the recursion with the root node, length 0, and sum 0.
6. ✅ Return `res[1]` (the maximum path sum).

## 🧠 Dry Run
Let's trace the execution on this example tree:
```
      1
     / \
    2   3
   / \
  4   5
     /
    6
```

1. 🌱 Start with `root = 1`, `res = [0, 0]`
2. 🔄 Call `solve(1, 0, 0)`
   - Update: `len = 1`, `sum = 1`
   - Node 1 is not a leaf, continue
   - 👈 Call `solve(2, 1, 1)` (left child)
     - Update: `len = 2`, `sum = 3`
     - Node 2 is not a leaf, continue
     - 👈 Call `solve(4, 2, 3)` (left child)
       - Update: `len = 3`, `sum = 7`
       - Node 4 is a leaf 🍃, compare with `res`
       - `len = 3 > res[0] = 0`, so update `res = [3, 7]`
     - 👉 Call `solve(5, 2, 3)` (right child)
       - Update: `len = 3`, `sum = 8`
       - Node 5 is not a leaf, continue
       - 👈 Call `solve(6, 3, 8)` (left child)
         - Update: `len = 4`, `sum = 14`
         - Node 6 is a leaf 🍃, compare with `res`
         - `len = 4 > res[0] = 3`, so update `res = [4, 14]`
       - 👉 Call `solve(null, 3, 8)` (right child)
         - Return (null node)
     - Continue with right subtree of 2 (null)
   - 👉 Call `solve(3, 1, 1)` (right child)
     - Update: `len = 2`, `sum = 4`
     - Node 3 is a leaf 🍃, compare with `res`
     - `len = 2 < res[0] = 4`, so no update
3. 🎉 Return `res[1] = 14`

The sum of the longest path (1→2→5→6) is 14. 🚶‍♂️→🚶‍♂️→🚶‍♂️→🚶‍♂️

## ⏱️ Time and Space Complexity

### Time Complexity: O(N) ⏰
- We visit each node exactly once during the traversal, where N is the number of nodes in the tree.

### Space Complexity: O(H) 📚
- The recursion stack can go as deep as the height of the tree (H).
- In the worst case (skewed tree), this could be O(N).
- In a balanced tree, the space complexity would be O(log N).

## 📋 Summary
This solution employs depth-first search to explore all root-to-leaf paths in the binary tree. By tracking both the length and sum of each path, we can identify the path with the maximum length and, in case of ties, select the one with the greatest sum.

## 🏁 Conclusion
The recursive DFS approach is elegant and efficient for this problem. It correctly handles all cases:
- Empty trees 🌱
- Trees with a single node 🌲
- Trees with multiple paths of the same length 🌳🌳
- Trees with various shapes (balanced, skewed, etc.) 🌴

This solution efficiently solves the problem with optimal time complexity, and the code is concise and readable. 🚀