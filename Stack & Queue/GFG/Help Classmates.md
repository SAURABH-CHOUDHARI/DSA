# Help Classmate - Finding the Next Smaller Element

## Problem Statement
Given an array `arr` of size `N`, find the nearest smaller element on the right for each element in the array. If there is no smaller element, return `-1` for that position.

---

## Intuition 💡
- We need to find the **next smaller element** for each element in the array.
- Instead of using a **brute-force approach** (which results in `O(N^2)` complexity), we can optimize it using a **monotonic stack**.
- We traverse the array **from right to left**, maintaining a stack that helps track smaller elements efficiently.

---

## Approach 🚀

1. **Initialize a Stack:**
   - The stack will store elements in increasing order (from top to bottom).
   
2. **Traverse the Array from Right to Left:**
   - If the stack is **not empty** and the **top of the stack is greater than or equal to the current element**, pop elements from the stack.
   - If the stack is **not empty after popping**, the top element is the **next smaller element**.
   - Otherwise, if the stack is empty, set `-1` as there is no smaller element.
   
3. **Push the Current Element onto the Stack:**
   - This ensures the stack always maintains the next smaller elements for future iterations.

---

## Implementation 💻
```javascript
class Solution{
    help_classmate(arr,n){
        let ans = new Array(arr.length).fill(-1);
        let st = [];
        
        for(let i = arr.length - 1; i >= 0; i--){
            while(st.length !== 0 && st[st.length - 1] >= arr[i]){
                st.pop();
            }
            
            if(st.length !== 0){
                ans[i] = st[st.length - 1];
            }
            st.push(arr[i]);
        }
        return ans;
    }
}
```

---

## Dry Run 📝
**Input:** `[3, 8, 5, 2, 25]`

| i  | Element | Stack Before | Stack After | Next Smaller |
|----|---------|-------------|-------------|--------------|
| 4  | 25      | `[]`         | `[25]`      | `-1`         |
| 3  | 2       | `[25]`       | `[2]`       | `-1`         |
| 2  | 5       | `[2]`        | `[2, 5]`    | `2`          |
| 1  | 8       | `[2, 5]`     | `[2, 5, 8]` | `5`          |
| 0  | 3       | `[2, 5, 8]`  | `[2, 3]`    | `2`          |

**Output:** `[2, 5, 2, -1, -1]`

---

## Complexity Analysis ⏳
- **Time Complexity:** `O(N)` (Each element is pushed and popped from the stack at most once)
- **Space Complexity:** `O(N)` (For the stack in the worst case)

---

## Advantages 🚀
✅ More efficient than brute-force (`O(N^2)`).
✅ Uses **monotonic stack** to optimize performance.
✅ Simple and easy to implement.

---

## Conclusion 🎯
- This approach efficiently finds the **next smaller element** for each element in `O(N)` time.
- The use of a **monotonic stack** ensures we process each element optimally.
- This method can be used in various problems involving **next greater/smaller element searches**.

