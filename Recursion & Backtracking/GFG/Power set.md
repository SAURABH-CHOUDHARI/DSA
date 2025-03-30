# All Possible Strings - Generating Subsequences

## Problem Statement 📌
Given a string `s`, generate **all possible non-empty subsequences** of `s` and return them **sorted in lexicographical order**.

### Example
**Input:**
```js
s = "abc"
```
**Output:**
```js
["a", "ab", "abc", "ac", "b", "bc", "c"]
```

---

## Intuition 🎯
This problem requires us to generate **all possible subsequences** of a string. Since a subsequence is formed by deleting **zero or more characters** without changing the order, we can solve this using **recursion and backtracking**.

### **Key Observations** 🔍
- Every character has **two choices**:
  1. **Include** it in the current subsequence.
  2. **Exclude** it and move to the next character.
- The recursion tree will explore all possible subsets of the string.
- We need to **sort the result** before returning it.

---

## Approach 🚀

### **Fundamental Concepts**
✅ **Recursion** - Helps explore all possibilities.
✅ **Backtracking** - Ensures all valid subsequences are generated.
✅ **String Manipulation** - Creating new subsequences dynamically.
✅ **Sorting** - Required for lexicographical order.

### **Steps to Solve**
1. **Define a recursive function** that generates subsequences.
2. **Base Condition:** When we reach the end of the string, store the current subsequence (if non-empty).
3. **Recursive Calls:**
   - Include the current character and move forward.
   - Exclude the current character and move forward.
4. **Sort the resultant array** before returning.

---

## **Code Implementation** 🧑‍💻

```js
class Solution {
    solve(s, ans, cur, i){
        if(i==s.length){
            if(cur.length!=0) ans.push(cur);
            return;
        }
        this.solve(s, ans, cur + s[i], i+1); // Include
        this.solve(s, ans, cur, i+1);       // Exclude
    }
    AllPossibleStrings(s){
        let ans= [];
        let cur = "";
        this.solve(s, ans, cur, 0);
        ans.sort(); // Sort lexicographically
        return ans;
    }
}
```

---

## **Dry Run Example 📜**

**Input:** `"abc"`

| Step | Current Subsequence | Remaining Characters | Action |
|------|---------------------|----------------------|--------|
| 1    | `""`               | `"abc"`              | Start  |
| 2    | `"a"`              | `"bc"`               | Include 'a'  |
| 3    | `"ab"`             | `"c"`                | Include 'b'  |
| 4    | `"abc"`            | `""`                 | Include 'c'  |
| 5    | `"ab"`             | `"c"`                | Backtrack  |
| 6    | `"ac"`             | `""`                 | Include 'c'  |
| 7    | `"a"`              | `"bc"`               | Backtrack  |
| 8    | `"b"`              | `"c"`                | Include 'b'  |
| 9    | `"bc"`             | `""`                 | Include 'c'  |
| 10   | `"c"`              | `""`                 | Include 'c'  |

**Final Output (Sorted):** `["a", "ab", "abc", "ac", "b", "bc", "c"]`

---

## **Complexity Analysis ⏳**
- **Time Complexity:** `O(2^N + NlogN)`
  - `O(2^N)` for generating all subsequences.
  - `O(N log N)` for sorting the subsequences.
- **Space Complexity:** `O(2^N * N)`
  - Storing all subsequences.

---

## **Edge Cases 🔍**
✅ Empty string `""` ➝ Should return `[]`.
✅ Single character string `"a"` ➝ Should return `["a"]`.
✅ All characters are the same `"aaa"` ➝ Should return `["a", "aa", "aaa"]`.
✅ Large string ➝ Should handle efficiently.

---

## **Advantages ✅**
- Simple recursive approach.
- Ensures all possible subsequences are generated.
- Uses sorting to maintain lexicographical order.

---

🔥 Hope this helps! Happy Coding! 🚀

