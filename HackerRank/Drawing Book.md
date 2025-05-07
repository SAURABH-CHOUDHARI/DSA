# 📖 Page Count Optimization - Optimal Solution

## 🎯 Problem Description
Given a book with `n` pages (always even-numbered), determine the minimum number of page turns needed to reach page `p`, starting from either the front or back of the book. Pages always appear in pairs (e.g., (2,3), (4,5), etc.).

## 🧠 Solution Approach
This solution uses:
1. **Mathematical calculation** of turns from front and back
2. **Direct comparison** of both turn counts
3. **Efficient computation** without iteration
4. **Book structure awareness** (page pairing)

## 🚀 Optimal Implementation
```go
func pageCount(n int32, p int32) int32 {
    fromFront := p / 2
    fromBack := n/2 - p/2
    if fromFront < fromBack {
        return fromFront
    }
    return fromBack
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(1)
  - Three constant-time arithmetic operations
  - One comparison
- **Space Complexity**: O(1)
  - Uses only three variables
  - No additional storage

## 📊 Example Walkthrough
**Input:**
```go
n = 6 (pages: [1], [2,3], [4,5], [6])
p = 4
```

**Execution:**
1. Turns from front: 4/2 = 2
2. Turns from back: 6/2 - 4/2 = 3 - 2 = 1
3. Minimum of (2, 1) is 1

**Output:** `1`

## 💡 Key Insights
1. **Page Pairing**:
   - Each turn reveals 2 pages (except first/last)
2. **Front Calculation**:
   - Turns = target_page / 2
3. **Back Calculation**:
   - Turns = (total_pages / 2) - (target_page / 2)
4. **Efficiency**:
   - Avoids manual counting or simulation

## 🌟 Why This Solution Rocks
- Optimal O(1) time complexity
- Simple mathematical approach
- No unnecessary operations
- Handles all edge cases:
  - First page (0 turns)
  - Last page (0 turns from back)
  - Middle pages
  - Large book sizes

## 🏆 Alternative Approaches
1. **Simulation Approach**:
   ```go
   // Simulate page turning from both ends
   // O(n) time - inefficient for large n
   ```
2. **Separate Odd/Even Handling**:
   ```go
   // Different calculations for odd/even pages
   // More complex without benefits
   ```

The mathematical solution provides the most efficient way to solve the page turning problem!