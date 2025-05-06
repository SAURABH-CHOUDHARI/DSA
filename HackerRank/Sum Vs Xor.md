# 🔢 Sum vs XOR - Optimal Solution

## 🎯 Problem Description
Given a number `n`, find the count of numbers `x` such that:
- `0 <= x <= n`
- `n + x == n ^ x` (sum equals XOR)

## 🧠 Solution Approach
This solution uses:
1. **Bit manipulation** to count unset bits
2. **Exponential calculation** for result
3. **Efficient iteration** through bits

## 🚀 Optimal Implementation
```go
func sumXor(n int64) int64 {
    if n == 0 {
        return 1 // Special case: only 0 satisfies 0+0=0^0
    }
    
    zeroBits := int64(0)
    
    // Count unset bits in n
    for n > 0 {
        if n&1 == 0 { // Check if least significant bit is 0
            zeroBits++
        }
        n >>= 1 // Right shift to check next bit
    }
    
    // Result is 2^zeroBits (each unset bit doubles possibilities)
    return int64(1) << zeroBits
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(log n)
  - Iterates through each bit of n
- **Space Complexity**: O(1)
  - Uses constant extra space

## 📊 Example Walkthrough
**Input:**
```go
n = 5 (binary 101)
```

**Execution:**
1. Count unset bits:
   - Bit 0: 1 (set)
   - Bit 1: 0 (unset) → zeroBits=1
   - Bit 2: 1 (set)
2. Calculate result: 2^1 = 2
3. Valid numbers: 0 (0+5=5=0^5), 2 (5+2=7=5^2)

**Output:** `2`

## 💡 Key Insights
1. **Mathematical Insight**:
   - `n + x == n ^ x` when there are no carry-overs in binary addition
   - Each unset bit in `n` provides a choice (0 or 1) in `x`
2. **Bit Counting**:
   - Only need to count unset bits
   - Set bits must be 0 in `x` to avoid carry-over
3. **Edge Cases**:
   - `n = 0` (special case)
   - Powers of 2 (all bits unset except one)

## 🌟 Why This Solution Rocks
- Extremely efficient O(log n) time
- Minimal memory usage
- Clever mathematical insight
- Handles all edge cases

## 🏆 Alternative Approaches
1. **Brute Force**:
   ```go
   // Check all numbers 0..n
   // O(n) time - too slow for large n
   ```
2. **Bitmask Generation**:
   ```go
   // Generate all valid x values
   // More complex with same complexity
   ```

The bit-counting solution provides the most efficient way to solve this problem!