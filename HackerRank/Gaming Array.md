# 🎮 Gaming Array - Optimal Solution

## 🎯 Problem Description
Two players (Bob and Andy) take turns removing elements from an array:
- Each turn: Remove all elements to the right of the current maximum element
- Last player to make a move wins
- Bob always goes first

Determine the winner given the initial array.

## 🧠 Solution Approach
This solution uses:
1. **Single pass** through the array
2. **Counts peaks** (new maximum elements)
3. **Odd/Even check** to determine winner

## 🚀 Optimal Implementation
```go
func gamingArray(arr []int32) string {
    count := 0
    currentMax := int32(0)
    
    for _, num := range arr {
        if num > currentMax {
            currentMax = num
            count++
        }
    }
    
    if count%2 == 1 {
        return "BOB"
    }
    return "ANDY"
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Single pass through the array
- **Space Complexity**: O(1)
  - Uses constant extra space

## 📊 Example Walkthrough
**Input:**
```go
[5, 2, 6, 3, 4]
```

**Execution:**
1. Peaks found at:
   - 5 (count=1)
   - 6 (count=2)
2. Total peaks: 2 (even)
3. Andy wins (second player)

**Output:** `"ANDY"`

## 💡 Key Insights
1. **Peak Counting**:
   - Each peak represents a game move
2. **Winner Determination**:
   - Odd count → Bob wins
   - Even count → Andy wins
3. **Edge Cases**:
   - Single-element array (Bob wins)
   - Strictly decreasing array (Bob wins)
   - Strictly increasing array (alternating wins)

## 🌟 Why This Solution Rocks
- Extremely efficient O(n) time
- Minimal memory usage
- Simple and elegant logic
- Correctly models game mechanics

## 🏆 Alternative Approaches
1. **Simulation Approach**:
   ```go
   // Actually simulate each move
   // O(n²) time - too slow for large arrays
   ```
2. **Stack-Based**:
   ```go
   // Track peaks using stack
   // More complex with same O(n) time
   ```
3. **Recursive**:
   ```go
   // Recursively determine winner
   // Exponential time - impractical
   ```

The implemented peak-counting solution is the most efficient way to solve this problem!