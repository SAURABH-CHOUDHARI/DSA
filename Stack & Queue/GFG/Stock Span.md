# Stock Span Problem

## Problem Statement 📌
Given an array `arr` representing the stock prices for `N` days, the **stock span** of a stock's price on a given day `i` is defined as the maximum number of consecutive days (including the current day) the price of the stock has been less than or equal to its price on day `i`.

**Goal:** Find the stock span for each day.

---

## Intuition 🧠
- We need to determine for each day how many previous consecutive days had a stock price **less than or equal** to the current day's price.
- A **stack** helps efficiently track previous days with a smaller stock price, enabling a quick lookup.

---

## Approach 🚀
We iterate through the stock prices and use a **monotonic decreasing stack** to track indices of days where the stock price was lower than the current day's price.

1. **Initialize** an answer array `ans` where `ans[i] = 1` (default span for every day is at least 1).
2. **Use a stack** to keep track of indices of previous stock prices.
3. **Iterate through the prices:**
   - Pop indices from the stack **while** the price at that index is **less than or equal** to the current price.
   - If the stack is empty, it means **all previous prices were smaller**, so `span = i + 1`.
   - Otherwise, the span is **difference between current index and top of stack**.
   - Push the current index onto the stack.
4. **Return** the final span array.

---

## Implementation 💻
```javascript
class Solution {
    calculateSpan(arr) {
        let ans = new Array(arr.length).fill(1);
        let st = [];
        
        for(let i = 0; i < arr.length; i++) {
            
            while(st.length > 0 && arr[st[st.length-1]] <= arr[i]) {
                st.pop();
            }
            
            ans[i] = st.length === 0 ? i + 1 : i - st[st.length-1];
            
            st.push(i);
        }
        
        return ans;
    }
}
```

---

## Dry Run 📝
### Example:
**Input:** `[100, 80, 60, 70, 60, 75, 85]`

| Day (i) | Price | Stack Before | Stack After | Span Calculation | Span Value |
|---------|-------|-------------|-------------|------------------|------------|
| 0       | 100   | []          | [0]         | `i + 1 = 0 + 1`  | **1**      |
| 1       | 80    | [0]         | [0, 1]      | `i - st.top = 1 - 0` | **1**      |
| 2       | 60    | [0, 1]      | [0, 1, 2]   | `i - st.top = 2 - 1` | **1**      |
| 3       | 70    | [0, 1, 2]   | [0, 1, 3]   | `i - st.top = 3 - 1` | **2**      |
| 4       | 60    | [0, 1, 3]   | [0, 1, 3, 4] | `i - st.top = 4 - 3` | **1**      |
| 5       | 75    | [0, 1, 3, 4] | [0, 1, 5]   | `i - st.top = 5 - 1` | **4**      |
| 6       | 85    | [0, 1, 5]   | [6]         | `i + 1 = 6 + 1`  | **6**      |

**Output:** `[1, 1, 1, 2, 1, 4, 6]`

---

## Complexity Analysis ⏳
- **Time Complexity:** `O(N)`
  - Each element is pushed **once** and popped **once** from the stack, making it **O(2N) ≈ O(N)**.
- **Space Complexity:** `O(N)` (for storing the stack in the worst case).

---

## Key Takeaways 🎯
✅ Uses a **monotonic decreasing stack** to efficiently track previous stock prices.
✅ Avoids unnecessary comparisons using stack operations.
✅ **Optimized** approach compared to brute force `O(N^2)`, achieving `O(N)` time complexity.
✅ Common technique in **stock market problems**.

---

Hope this helps! 🚀🔥

