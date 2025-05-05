# 🏆 Climbing the Leaderboard - Optimal Solution

## 🎯 Problem Description
Given:
- `ranked`: Current leaderboard scores (in descending order)
- `player`: Array of player scores to be ranked

Determine the player's rank after each score is added to the leaderboard (using dense ranking where tied scores get the same rank).

## 🧠 Solution Approach
This solution uses:
1. **Deduplication**: Creates a unique version of the leaderboard
2. **Binary Search**: Efficiently finds the position for each player score
3. **Dense Ranking**: Returns position + 1 as the rank

## 🚀 Optimal Implementation
```go
func climbingLeaderboard(ranked []int32, player []int32) []int32 {
    // Create deduplicated ranked list
    var uniqueRanked []int32
    for i := 0; i < len(ranked); i++ {
        if i == 0 || ranked[i] != ranked[i-1] {
            uniqueRanked = append(uniqueRanked, ranked[i])
        }
    }
    
    result := make([]int32, len(player))
    
    // Determine rank for each player score
    for i, score := range player {
        pos := findPosition(uniqueRanked, score)
        result[i] = int32(pos + 1) // Convert position to rank
    }
    
    return result
}

// Binary search helper function
func findPosition(ranked []int32, score int32) int32 {
    left, right := 0, len(ranked)-1
    
    // Handle edge cases
    if score >= ranked[left] {
        return 0
    }
    if score < ranked[right] {
        return int32(len(ranked))
    }
    
    // Binary search
    for left <= right {
        mid := left + (right-left)/2
        
        if ranked[mid] == score {
            return int32(mid)
        } else if ranked[mid] > score {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    return int32(left)
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n + m log n)
  - O(n) for deduplication
  - O(m log n) for processing m player scores with binary search
- **Space Complexity**: O(n + m)
  - O(n) for storing unique ranked scores
  - O(m) for result storage

## 📊 Example Walkthrough
**Input:**
```go
ranked = [100, 90, 90, 80]
player = [70, 80, 105]
```

**Execution:**
1. Deduplicated ranked: [100, 90, 80]
2. Process player scores:
   - 70 → position 3 → rank 4
   - 80 → position 2 → rank 3
   - 105 → position 0 → rank 1

**Output:** `[4, 3, 1]`

## 💡 Key Insights
1. **Deduplication First**:
   - Essential for correct dense ranking
2. **Binary Search Efficiency**:
   - Critical for handling large inputs (n,m ≤ 2×10⁵)
3. **Edge Handling**:
   - Scores higher than leaderboard
   - Scores lower than leaderboard
   - Exact matches

## 🌟 Why This Solution Rocks
- Handles maximum constraints efficiently
- Clean separation of concerns
- Optimal use of binary search
- Correctly implements dense ranking

## 🏆 Alternative Approaches
1. **Linear Search**:
   ```go
   // O(nm) time - too slow for large inputs
   ```
   - Fails performance tests

2. **Maintaining Separate Data Structure**:
   ```go
   // Using trees or heaps
   ```
   - More complex implementation
   - No significant advantage

The implemented solution provides the best balance of efficiency and clarity for this problem!