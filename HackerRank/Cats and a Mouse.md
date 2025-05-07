# 🐱🐭 Cat and Mouse - Optimal Solution

## 🎯 Problem Description
Given positions of two cats (Cat A at x, Cat B at y) and a mouse (at z), determine which cat reaches the mouse first or if they arrive at the same time. Cats move at equal speed.

## 🧠 Solution Approach
This solution uses:
1. **Absolute distance calculation** for each cat
2. **Direct comparison** of distances
3. **Simple conditional logic** for result determination
4. **Efficient computation** without loops

## 🚀 Optimal Implementation
```go
func catAndMouse(x int32, y int32, z int32) string {
    diffCatA := z - x
    if diffCatA < 0 {
        diffCatA *= -1
    }

    diffCatB := z - y
    if diffCatB < 0 {
        diffCatB *= -1
    }

    if diffCatA < diffCatB {
        return "Cat A"
    } else if diffCatB < diffCatA {
        return "Cat B"
    }

    return "Mouse C"
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(1)
  - Fixed number of operations
  - No iteration or recursion
- **Space Complexity**: O(1)
  - Uses only three variables
  - No additional storage

## 📊 Example Walkthrough
**Input:**
```go
x = 1 (Cat A), y = 3 (Cat B), z = 2 (Mouse)
```

**Execution:**
1. Cat A distance: |2-1| = 1
2. Cat B distance: |2-3| = 1
3. Distances equal → "Mouse C"

**Output:** `"Mouse C"`

## 💡 Key Insights
1. **Distance Calculation**:
   - Absolute difference determines travel time
2. **Equal Speed**:
   - Only distance matters, not direction
3. **Tie Handling**:
   - Mouse escapes if distances equal
4. **Efficiency**:
   - Solves with basic arithmetic

## 🌟 Why This Solution Rocks
- Optimal O(1) time complexity
- Minimal memory usage
- Clear and readable implementation
- Handles all edge cases:
  - Cats at same position
  - Mouse between cats
  - All three at same point
  - Large position values

## 🏆 Alternative Approaches
1. **Ternary Operator**:
   ```go
   // Use one-line conditional
   // Less readable but same logic
   ```
2. **Math Package**:
   ```go
   // Use math.Abs for absolute value
   // Requires type conversion
   ```

The distance comparison solution provides the most efficient way to solve the cat and mouse problem!    