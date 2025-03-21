# 🔍 Smallest on Left (Nearest Smaller Element)

## 📌 Problem Statement
For each element in an array, find the **largest element** that is **smaller** than the current element among all the elements that appear to its left.  
- If no such element exists, return `-1` for that position.

## 💡 Intuition & Fundamentals
Imagine you have a list of numbers, and for each number, you want to know the closest (in value) number that came before it and is **strictly less** than it.  
- We can achieve this by maintaining a collection (in this case, a **Set**) of all numbers seen so far.
- For every new number, we scan through this collection to pick the maximum value that is **smaller** than the current number.
- **Note:** Using a Set here means the elements are stored uniquely, but we iterate over them to find the required value.

**Cool Note:**  
While this approach is straightforward, it can be improved using data structures that maintain sorted order (like a balanced BST) for faster queries. However, for learning purposes, this solution is a great way to understand the fundamentals!

## 🚀 Approach: Using a Set to Track Previous Elements

### Step-by-Step Breakdown:
1. **Initialize the Answer Array:**
   - Create an answer array `ans` of the same length as the input array, filled initially with `-1` to indicate that by default no smaller element exists.

2. **Create an Empty Set:**
   - This set (`set`) will store all the elements that have been encountered so far as we iterate from left to right.

3. **Iterate Through the Array:**
   - For each element `arr[i]`:
     - Initialize a variable `put` to `-1` (this will hold the largest number found so far that is smaller than `arr[i]`).
     - Iterate over each value in the set:
       - If the value is **less than** `arr[i]` and is **greater** than `put`, update `put` with that value.
     - After checking all values in the set, assign `ans[i] = put`.
     - **Add** the current element `arr[i]` to the set for future comparisons.

4. **Return the Answer Array:**
   - After processing all elements, return the filled answer array.

## 👨‍💻 Code Implementation
```javascript
class Solution {
    // Function to find the largest element on the left that is smaller than the current element.
    Smallestonleft(arr, n) {
        let ans = new Array(arr.length).fill(-1);  // Initialize answer array with -1
        let set = new Set();  // Set to store elements seen so far

        for (let i = 0; i < n; i++) {
            let put = -1;  // Default: no smaller element found

            // Iterate over elements in the set (previous elements)
            for (const value of set) {
                if (value > put && value < arr[i]) {
                    put = value;  // Update if we find a larger element that is still less than arr[i]
                }
            }

            ans[i] = put;  // Record the found value (or -1 if none)
            set.add(arr[i]);  // Add current element to the set for future iterations
        }
        
        return ans;
    }
}
```

## 📜 Dry Run Example
Consider the input array: `[2, 5, 3, 7, 1, 4]`

| Index (`i`) | Element `arr[i]` | Set (Previous Elements)   | Iteration over Set & Updates                         | `ans[i]` (Result) |
|-------------|------------------|---------------------------|------------------------------------------------------|-------------------|
| 0           | 2                | `[]`                      | No elements; remains `-1`                            | `-1`              |
| 1           | 5                | `[2]`                     | 2 < 5, so `put` becomes `2`                          | `2`               |
| 2           | 3                | `[2, 5]`                  | 2 < 3 → `put` becomes `2`; 5 is ignored               | `2`               |
| 3           | 7                | `[2, 5, 3]`               | 2, 5, 3 are all less than 7; largest is `5` → `put = 5`| `5`               |
| 4           | 1                | `[2, 5, 3, 7]`            | No element < 1 found; remains `-1`                   | `-1`              |
| 5           | 4                | `[2, 5, 3, 7, 1]`         | 2 < 4 → `put = 2`; 5 ignored; 3 < 4 → `put = 3`; 1 ignored → `put = 3`| `3`  |

**Final Output:** `[-1, 2, 2, 5, -1, 3]`

## ⏳ Complexity Analysis
- **Time Complexity:** `O(N * M)`  
  - Worst-case: For each of the `N` elements, we iterate over the set which can contain up to `N` elements.  
- **Space Complexity:** `O(N)`  
  - The set can store up to `N` unique elements.

## 🎯 Key Takeaways
- **Efficient Lookup:** Using a set helps keep track of previously encountered elements.
- **Monotonic Search:** We seek the maximum element among those that are less than the current element.
- **Learning Focus:** This solution teaches the fundamentals of **iterative searching** and **data structure usage** (Set) even though more optimized methods exist.

## 👍 Cool Note!
For even better performance on large arrays, consider using data structures like **balanced binary search trees** or **sorted arrays** with binary search to reduce the inner loop's time complexity.

---
This detailed explanation should help you understand every step of the algorithm. Happy coding! 🚀😊

