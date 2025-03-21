# Next Greater Element

## Problem Statement
Given an array `arr` of size `N`, for each element in the array, find the next greater element. The next greater element for an element `x` is the first greater element on the right side of `x` in the array. If there is no greater element, return `-1` for that position.

---

## Approach 1: Brute Force (Nested Loops) ❌ (TLE)

### Explanation
This approach iterates over the array using two nested loops. For each element, we search for the next greater element by checking all elements to its right.

### Implementation
```javascript
class Solution {
    nextLargerElement(arr) {
        let ans = new Array(arr.length).fill(-1);
       
        for(let i = 0 ; i < arr.length-1 ; i++){
            for(let j = i+1 ; j < arr.length ; j++){
                if(arr[j] > arr[i]){
                    ans[i] = arr[j];
                    break;
                }
            }
        }
        return ans;
    }
}
```

### Dry Run Example 📝
**Input:** `[4, 5, 2, 10, 8]`

| i \ j | 4  | 5  | 2  | 10  | 8  |
|-------|----|----|----|-----|----|
| 4     | **5** | -  | -  | -   | -  |
| 5     | -  | **10** | -  | -   | -  |
| 2     | -  | -  | **10** | -   | -  |
| 10    | -  | -  | -  | **-1**  | -  |
| 8     | -  | -  | -  | -   | **-1** |

**Output:** `[5, 10, 10, -1, -1]`

### Complexity Analysis ⏳
- **Time Complexity:** `O(N^2)` (Due to the nested loop)
- **Space Complexity:** `O(1)` (Only the answer array is used)

### Issues 🚨
- This approach leads to **TLE (Time Limit Exceeded)** for large input sizes, making it inefficient.

---

## Approach 2: Optimized Solution using Stack ✅

### Explanation
Instead of using nested loops, we use a **stack** to store elements while iterating from right to left.
1. Start from the rightmost element.
2. Maintain a stack that keeps track of elements for which we haven't found the next greater element yet.
3. If the top of the stack is **less than or equal to** the current element, pop elements from the stack.
4. If the stack is not empty, the top element is the **next greater element**.
5. Push the current element onto the stack.

### Implementation
```javascript
class Solution {
    nextLargerElement(arr) {
       let ans = new Array(arr.length).fill(-1);
       let st = [];
       
        for(let i = arr.length-1 ; i >= 0 ; i--){
            while(st.length !== 0 && st[st.length - 1] <= arr[i]) {
                st.pop();
            }
           
            if(st.length !== 0) {
                ans[i] = st[st.length - 1];
            }
        
            st.push(arr[i]);
        }
        return ans;
    }
}
```

### Dry Run Example 📝
**Input:** `[4, 5, 2, 10, 8]`

| i  | Element | Stack Before | Stack After | Next Greater |
|----|---------|-------------|-------------|--------------|
| 4  | 8       | `[]`         | `[8]`        | `-1`         |
| 3  | 10      | `[8]`        | `[10]`       | `-1`         |
| 2  | 2       | `[10]`       | `[10, 2]`    | `10`         |
| 1  | 5       | `[10, 2]`    | `[10, 5]`    | `10`         |
| 0  | 4       | `[10, 5]`    | `[10, 5, 4]` | `5`          |

**Output:** `[5, 10, 10, -1, -1]`

### Complexity Analysis ⏳
- **Time Complexity:** `O(N)` (Each element is pushed and popped from the stack at most once)
- **Space Complexity:** `O(N)` (For the stack in the worst case)

### Advantages 🚀
✅ Faster than the brute-force approach
✅ Uses stack efficiently
✅ Avoids unnecessary comparisons

---

## Conclusion 🎯
- **Brute Force Approach (TLE)** is inefficient due to nested loops.
- **Optimized Approach using Stack** significantly reduces time complexity to `O(N)`.
- The stack approach leverages **monotonic decreasing order** to efficiently find the next greater element.

Hope this helps! 🚀

