# 🏀 Breaking Records - Optimal Solution

## 🎯 Problem Description
Given a sequence of game scores, count how many times the player breaks their season record for most and least points in a game.

## 🧠 Solution Approach
This solution uses:
1. **Single pass iteration** through the scores
2. **Tracking variables** for current min and max
3. **Conditional checks** for record-breaking scores
4. **Efficient counting** without additional storage

## 🚀 Optimal Implementation
```go
func breakingRecords(scores []int32) []int32 {
    min := scores[0]
    max := scores[0]
    countMin := int32(0)
    countMax := int32(0)
    
    for _, num := range scores {
        if num > max {
            max = num   
            countMax++
        } else if num < min {
            min = num
            countMin++
        }
    }
    return []int32{countMax, countMin}
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Single pass through all scores
  - n = number of games
- **Space Complexity**: O(1)
  - Uses only 4 variables regardless of input size

## 📊 Example Walkthrough
**Input:**
```go
[10, 5, 20, 20, 4, 5, 2, 25, 1]
```

**Execution:**
1. Initialize min = 10, max = 10
2. Process scores:
   - 5 < 10 → min=5, countMin=1
   - 20 > 10 → max=20, countMax=1
   - 20 = 20 → no change
   - 4 < 5 → min=4, countMin=2
   - 5 > 4 but < 20 → no change
   - 2 < 4 → min=2, countMin=3
   - 25 > 20 → max=25, countMax=2
   - 1 < 2 → min=1, countMin=4
3. Returns [2, 4]

**Output:** `[2 4]`

## 💡 Key Insights
1. **Initialization**:
   - First score sets initial records
2. **Record Tracking**:
   - Only update when strictly greater/lesser
   - Equal scores don't break records
3. **Efficiency**:
   - Processes data in single pass
   - Minimal memory usage

## 🌟 Why This Solution Rocks
- Optimal O(n) time complexity
- Clean and readable implementation
- No unnecessary operations
- Handles all edge cases:
  - Single game season
  - All scores equal
  - Strictly increasing/decreasing scores
  - Large input sizes

## 🏆 Alternative Approaches
1. **Separate Min/Max Tracking**:
   ```go
   // Track all min/max values in arrays
   // Uses O(n) space unnecessarily
   ```
2. **Functional Approach**:
   ```go
   // Use folds/reductions
   // More complex without benefits
   ```

The single-pass solution provides the most efficient way to track record-breaking scores!