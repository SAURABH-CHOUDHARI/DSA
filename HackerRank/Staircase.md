# 🪜 Staircase Pattern - Optimal Solution

## 🎯 Problem Description
Print a right-aligned staircase pattern of size `n` using spaces and `#` characters.

## 🧠 Solution Approach
This solution uses:
1. **Nested loops** for row and column control
2. **Conditional printing** for spaces vs. steps
3. **Right-alignment logic** through index comparison
4. **Efficient output** with direct printing

## 🚀 Optimal Implementation
```go
func staircase(n int32) {
    for i := int32(0); i < n; i++ {
        for j := int32(0); j < n; j++ {
            if j < n-i-1 {
                fmt.Print(" ")
            } else {
                fmt.Print("#")
            }
        }
        fmt.Println()
    }
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n²)
  - Outer loop runs `n` times
  - Inner loop runs `n` times per outer iteration
- **Space Complexity**: O(1)
  - Uses constant space (only loop variables)
  - Prints directly without storage

## 📊 Example Walkthrough
**Input:**
```go
n = 4
```

**Execution:**
1. Row 0: Prints "   #" (3 spaces, 1 #)
2. Row 1: Prints "  ##" (2 spaces, 2 #)
3. Row 2: Prints " ###" (1 space, 3 #)
4. Row 3: Prints "####" (0 spaces, 4 #)

**Output:**
```
   #
  ##
 ###
####
```

## 💡 Key Insights
1. **Row-Column Relationship**:
   - Spaces decrease as row number increases
   - Hashes increase with row number
2. **Index Calculation**:
   - `n-i-1` determines space/hash boundary
3. **Output Efficiency**:
   - Prints characters directly
   - No string concatenation overhead

## 🌟 Why This Solution Rocks
- Clear and intuitive implementation
- Precise control over output format
- No unnecessary memory usage
- Handles all edge cases:
  - n = 0 (no output)
  - n = 1 (single #)
  - Large n values
  - Consistent spacing

## 🏆 Alternative Approaches
1. **String Building**:
   ```go
   // Build each row as string before printing
   // Uses O(n) space per row
   ```
2. **Prefix Spaces**:
   ```go
   // Calculate space count separately
   // Similar complexity but less elegant
   ```

The nested loop solution provides an efficient and straightforward way to print the staircase pattern!