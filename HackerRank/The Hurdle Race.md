# 🏃 Hurdle Race - Optimal Solution

## 🎯 Problem Description
Determine the number of magic potions a runner needs to consume to jump all hurdles in a race. The runner can naturally jump `k` units high, and each potion increases jump height by 1 unit. The goal is to find the difference between the highest hurdle and the runner's natural jump height.

## 🧠 Solution Approach
This solution uses:
1. **Single pass iteration** to find maximum hurdle height
2. **Simple comparison** between runner's ability and max hurdle
3. **Direct calculation** of required potions
4. **Efficient computation** without sorting

## 🚀 Optimal Implementation
```go
func hurdleRace(k int32, height []int32) int32 {
    maxHeight := height[0]
    for _, h := range height {
        if h > maxHeight {
            maxHeight = h
        }
    }

    if k >= maxHeight {
        return 0
    }
    return maxHeight - k
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Single pass through all hurdles
  - n = number of hurdles
- **Space Complexity**: O(1)
  - Uses only two variables
  - No additional storage

## 📊 Example Walkthrough
**Input:**
```go
k = 4
height = [1, 6, 3, 5, 2]
```

**Execution:**
1. Find max height: 6
2. Compare with k: 4 < 6
3. Calculate difference: 6 - 4 = 2

**Output:** `2`

## 💡 Key Insights
1. **Max Height Determination**:
   - Only the tallest hurdle matters
2. **Efficiency**:
   - No need to process all hurdles if k is already sufficient
3. **Simple Logic**:
   - Direct subtraction gives required potions
4. **Edge Handling**:
   - Returns 0 if no potions needed

## 🌟 Why This Solution Rocks
- Optimal O(n) time complexity
- Minimal memory usage
- Clean and readable implementation
- Handles all edge cases:
  - All hurdles below k
  - Single hurdle
  - Large input sizes
  - k = 0 case

## 🏆 Alternative Approaches
1. **Sorting Method**:
   ```go
   // Sort array and take last element
   // O(n log n) time - less efficient
   ```
2. **Math Package**:
   ```go
   // Use math.Max functions
   // Similar performance but more dependencies
   ```

The single-pass solution provides the most efficient way to solve the hurdle race problem!