# Left Smaller Element using Stack

## Problem Statement
Given an array `arr` of size `N`, the task is to find the **left smaller element** for each element in the array. The left smaller element for an element `x` is the first smaller element on the left side of `x` in the array. If no smaller element exists, return `-1` for that position.

---

## Intuition 💡
Instead of using a **brute-force approach** that checks all previous elements, we can efficiently solve this problem using a **stack**. The key idea is:
- **Maintain a monotonic increasing stack** to track smaller elements on the left.
- As we iterate through the array, **pop elements** from the stack if they are **greater than or equal to** the current element.
- The **top of the stack** will be the nearest smaller element to the left.
- If the stack is empty, assign `-1` (no smaller element exists).
- Finally, **push the current element** onto the stack for future comparisons.

---

## Approach: Using Stack ✅
### Steps 🔢
1. **Initialize** an empty stack `st` and an answer array `ans` of size `N`, filled with `-1`.
2. **Iterate** through the array from left to right:
   - **Pop** elements from the stack if they are **greater than or equal to** the current element.
   - If the stack is **not empty**, assign `ans[i] = st[st.length - 1]` (top element is the left smaller element).
   - **Push** the current element onto the stack.
3. **Return** the answer array.

---

## Implementation 👨‍💻
```javascript
class Solution {
  leftSmaller(arr, n) {
      let ans = new Array(arr.length).fill(-1); // Initialize answer array with -1
      let st = []; // Stack to keep track of smaller elements
      
      for (let i = 0; i < n; i++) {
          // Remove elements from stack that are greater or equal to arr[i]
          while (st.length !== 0 && st[st.length - 1] >= arr[i]) {
              st.pop();
          }
          
          // If stack is not empty, the top is the left smaller element
          if (st.length !== 0) {
              ans[i] = st[st.length - 1];
          }
          
          // Push current element onto the stack
          st.push(arr[i]);
      }
      return ans;
  }
}
```

---

## Dry Run Example 📝
**Input:** `[2, 5, 3, 7, 1, 4]`

| i  | Element | Stack Before | Stack After  | Left Smaller |
|----|---------|-------------|--------------|--------------|
| 0  | 2       | `[]`         | `[2]`        | `-1`         |
| 1  | 5       | `[2]`        | `[2,5]`      | `2`          |
| 2  | 3       | `[2,5]`      | `[2,3]`      | `2`          |
| 3  | 7       | `[2,3]`      | `[2,3,7]`    | `3`          |
| 4  | 1       | `[2,3,7]`    | `[1]`        | `-1`         |
| 5  | 4       | `[1]`        | `[1,4]`      | `1`          |

**Output:** `[-1, 2, 2, 3, -1, 1]`

---

## Complexity Analysis ⏳
- **Time Complexity:** `O(N)` (Each element is pushed and popped from the stack at most once)
- **Space Complexity:** `O(N)` (For the stack in the worst case)

---

## Key Takeaways 🎯
✅ **Efficient approach** compared to brute force `O(N^2)`
✅ Uses **monotonic increasing stack** to track left smaller elements
✅ Avoids unnecessary comparisons, reducing time complexity to `O(N)`

This method ensures that we efficiently find the left smaller elements in a single pass using a stack! 🚀

