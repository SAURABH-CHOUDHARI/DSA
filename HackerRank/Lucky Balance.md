# 🍀 Luck Balance Problem - Optimal Solution

## 📝 Problem Description
Lena is preparing for a programming competition where each contest has:
- A luck value (`L`)
- An importance flag (`T` where `1` = important, `0` = unimportant)

She can lose at most `k` important contests. Losing gives luck, winning takes luck. Find the maximum possible luck balance.

## 🧠 Solution Approach
This solution uses a **greedy algorithm** to maximize luck:
1. **Immediately take all unimportant contests** (free luck)
2. **Sort important contests** by descending luck value
3. **Lose the top `k` important contests** (maximizing gained luck)
4. **Win the remaining important contests** (minimizing lost luck)

## 🚀 Optimal Implementation
```go
func luckBalance(k int32, contests [][]int32) int32 {
    total := int32(0)
    arr := make([]int32, 0)
    
    // Separate important/unimportant contests
    for _, contest := range contests {
        if contest[1] == 0 {
            total += contest[0] // Take all unimportant
        } else {
            arr = append(arr, contest[0]) // Collect important
        }
    }
    
    // Sort important contests in descending order
    slices.SortFunc(arr, func(a, b int32) int { return int(b - a) })

    // Lose top k, win the rest
    for i, luck := range arr {
        if i < int(k) {
            total += luck
        } else {
            total -= luck
        }
    }
    
    return total
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n log n)
  - Dominated by the sorting step
  - O(n) for initial classification and final calculation
- **Space Complexity**: O(n)
  - Stores important contests in separate slice

## 📊 Example Walkthrough
**Input:**
```go
k = 2
contests = [[5,1], [1,1], [4,0], [6,1], [2,0]]
```

**Execution:**
1. Take unimportant contests: 4 + 2 = 6
2. Sort important: [6, 5, 1]
3. Lose top 2: 6 + 5 = 11 → Total = 6 + 11 = 17
4. Win last: -1 → Final total = 16

**Output:** `16`

## 💡 Key Insights
1. **Greedy Choice Property**: Always optimal to lose highest-value important contests
2. **Efficient Sorting**: Modern `slices.SortFunc` provides clean descending sort
3. **Edge Cases Handled**:
   - If `k > important contests`, all are lost
   - Empty input returns 0
   - All unimportant contests automatically contribute

## 🌟 Why This Solution Rocks
- Maximizes luck balance with minimal operations
- Clean separation of concerns
- Handles all edge cases gracefully
- Uses Go 1.21+ features for cleaner code