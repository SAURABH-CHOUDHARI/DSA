# 🔺 Maximum Perimeter Triangle - Optimal Solution

## 🎯 Problem Description
Given an array of stick lengths, determine the three sticks that form the triangle with the maximum perimeter. If no valid triangle can be formed, return [-1].

## 🧠 Solution Approach
This solution uses:
1. **Sorting** to organize sticks by length
2. **Reverse iteration** to check largest sticks first
3. **Triangle inequality theorem** validation
4. **Early termination** when valid triangle found

## 🚀 Optimal Implementation
```go
func maximumPerimeterTriangle(sticks []int32) []int32 {
    slices.Sort(sticks)
    
    for i := len(sticks) - 1; i >= 2; i-- {
        a := sticks[i-2]
        b := sticks[i-1]
        c := sticks[i]

        if a + b > c {
            return []int32{a, b, c}
        }
    }
    
    return []int32{-1}
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n log n)
  - Dominated by sorting operation
  - O(n) for the reverse iteration
- **Space Complexity**: O(1)
  - In-place sorting (no additional storage)
  - Constant space for variables

## 📊 Example Walkthrough
**Input:**
```go
[1, 2, 3, 4, 5, 10]
```

**Execution:**
1. Sort array: [1, 2, 3, 4, 5, 10]
2. Check sticks from end:
   - 3,4,5 → 3+4>5 → valid triangle
3. Return [3,4,5]

**Output:** `[3 4 5]`

## 💡 Key Insights
1. **Sorting Benefit**:
   - Largest possible perimeter will use largest consecutive elements
2. **Triangle Theorem**:
   - Only need to check a + b > c when a ≤ b ≤ c
3. **Efficiency**:
   - First valid triangle found is automatically maximum perimeter
4. **Edge Handling**:
   - Returns [-1] when no triangle possible

## 🌟 Why This Solution Rocks
- Optimal O(n log n) time complexity
- Clean and intuitive implementation
- Minimal memory usage
- Handles all edge cases:
  - Small arrays (<3 elements)
  - No valid triangles
  - Multiple valid triangles
  - Degenerate triangles

## 🏆 Alternative Approaches
1. **Brute Force**:
   ```go
   // Check all possible triplets
   // O(n³) time - impractical for large n
   ```
2. **Combination Generation**:
   ```go
   // Generate all 3-length combinations
   // O(n³) in worst case
   ```

The sorting + reverse iteration solution provides the most efficient approach to finding the maximum perimeter triangle!