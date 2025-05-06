# 🦘 Kangaroo Problem - Optimal Solution

## 🎯 Problem Description
Determine if two kangaroos starting at different positions (x1, x2) with different jump distances (v1, v2) will ever land at the same position at the same time.

## 🧠 Solution Approach
This solution uses:
1. **Relative motion analysis** to determine intersection
2. **Mathematical checks** for impossible cases
3. **Integer arithmetic** to verify synchronization
4. **Early termination** for obvious cases

## 🚀 Optimal Implementation
```go
func kangaroo(x1 int32, v1 int32, x2 int32, v2 int32) string {
    if v1 == v2 {
        if x1 == x2 {
            return "YES"
        }
        return "NO"
    }

    diffPos := x2 - x1
    diffVel := v1 - v2

    if diffVel == 0 {
        return "NO"
    }

    if diffPos*diffVel < 0 {
        return "NO"
    }

    if diffPos%diffVel == 0 {
        return "YES"
    }

    return "NO"
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(1)
  - Fixed number of arithmetic operations
  - No loops or iterations
- **Space Complexity**: O(1)
  - Uses only a few variables
  - No additional storage

## 📊 Example Walkthrough
**Input:**
```go
x1 = 0, v1 = 3
x2 = 4, v2 = 2
```

**Execution:**
1. Different velocities (3 ≠ 2)
2. diffPos = 4 - 0 = 4
3. diffVel = 3 - 2 = 1
4. diffPos/diffVel = 4/1 = 4 (integer)
5. Returns "YES" (they meet after 4 jumps)

**Output:** `"YES"`

## 💡 Key Insights
1. **Same Velocity Check**:
   - Only meet if already at same position
2. **Relative Motion**:
   - Must be moving toward each other (diffPos*diffVel > 0)
3. **Synchronization**:
   - Positions must align after integer jumps
4. **Efficiency**:
   - Solves with pure mathematics
   - No simulation required

## 🌟 Why This Solution Rocks
- Extremely efficient O(1) operations
- Mathematical elegance
- Handles all edge cases:
  - Same starting position
  - Same velocity
  - Impossible catch-ups
  - Large position values
- Clear logical flow

## 🏆 Alternative Approaches
1. **Simulation Approach**:
   ```go
   // Simulate jumps until meeting/passing
   // O(n) time - inefficient for large distances
   ```
2. **Equation Solving**:
   ```go
   // Solve linear equation x1 + n*v1 = x2 + n*v2
   // Similar complexity but more operations
   ```

The mathematical solution provides the most efficient way to solve the kangaroo problem!