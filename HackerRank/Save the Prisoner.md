# 🎪 Save the Prisoner - Optimal Solution

## 🎯 Problem Description
Determine the prisoner who receives the last candy in a circular distribution starting from chair `s`, where `m` candies are distributed one by one to `n` prisoners.

## 🧠 Solution Approach
This solution uses:
1. **Modular arithmetic** for circular distribution
2. **Offset adjustment** for starting position
3. **Edge case handling** for exact multiples
4. **Efficient computation** without simulation

## 🚀 Optimal Implementation
```go
func saveThePrisoner(n int32, m int32, s int32) int32 {
    last := (s + m - 1) % n
    if last == 0 {
        return n
    }
    return last
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(1)
  - Fixed number of arithmetic operations
  - No loops or recursion
- **Space Complexity**: O(1)
  - Uses only one variable
  - No additional storage

## 📊 Example Walkthrough
**Input:**
```go
n = 5 (prisoners), m = 7 (candies), s = 2 (start)
```

**Execution:**
1. Calculate: (2 + 7 - 1) % 5 = 8 % 5 = 3
2. Result is non-zero → return 3

**Output:** `3`

## 💡 Key Insights
1. **Circular Distribution**:
   - Modulo operation handles wrap-around
2. **Position Adjustment**:
   - `m-1` adjusts for starting position
3. **Edge Case**:
   - When result is 0, return `n` (last chair)
4. **Efficiency**:
   - Solves mathematically without simulation

## 🌟 Why This Solution Rocks
- Optimal O(1) time complexity
- Minimal memory usage
- Handles all edge cases:
  - Single prisoner (n=1)
  - Single candy (m=1)
  - Exact multiples (wraps full circle)
  - Large values of n, m, s

## 🏆 Alternative Approaches
1. **Simulation Approach**:
   ```go
   // Simulate candy distribution
   // O(m) time - inefficient for large m
   ```
2. **Math Adjustment**:
   ```go
   // Alternative formula (s-1 + m) % n + 1
   // Similar performance, different style
   ```

The modular arithmetic solution provides the most efficient way to solve the prisoner candy problem!