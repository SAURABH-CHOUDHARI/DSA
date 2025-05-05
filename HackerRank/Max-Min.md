# 🔍 Max-Min (Minimum Unfairness) - Optimal Solution

## 🎯 Problem Description
Given an array of integers and integer `k`, find the minimum possible "unfairness" that can be achieved by selecting any `k` elements from the array, where unfairness is defined as the difference between the maximum and minimum values in the subset.

## 🧠 Solution Approach
This solution uses:
1. **Sorting** to arrange numbers in order
2. **Sliding Window** technique to find the minimum range difference
3. **Linear Scan** to compare all possible k-length windows

## 🚀 Optimal Implementation
```go
import (
    "math"
    "slices"
)

func maxMin(k int32, arr []int32) int32 {
    slices.Sort(arr)
    n := int32(len(arr))
    minUnfairness := int32(math.MaxInt32)
    
    for i := int32(0); i <= n-k; i++ {
        currentDiff := arr[i+k-1] - arr[i]
        if currentDiff < minUnfairness {
            minUnfairness = currentDiff
        }
    }
    
    return minUnfairness
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n log n)
  - Dominated by the sorting operation
  - O(n) for the sliding window pass
- **Space Complexity**: O(1)
  - Uses constant extra space (in-place sort)

## 📊 Example Walkthrough
**Input:**
```go
arr = [1, 4, 7, 2], k = 2
```

**Execution:**
1. Sorted array: [1, 2, 4, 7]
2. Check all 2-length windows:
   - [1,2] → 2-1 = 1
   - [2,4] → 4-2 = 2
   - [4,7] → 7-4 = 3
3. Minimum unfairness: 1

**Output:** `1`

## 💡 Key Insights
1. **Sorting is Crucial**:
   - Minimum unfairness always comes from consecutive elements in sorted array
2. **Sliding Window Efficiency**:
   - Only need to check adjacent groups after sorting
3. **Edge Cases**:
   - When k = 1 (unfairness is always 0)
   - When array contains duplicate values
   - When k equals array length

## 🌟 Why This Solution Rocks
- Simple and intuitive approach
- Optimal time complexity
- Minimal memory usage
- Handles all edge cases gracefully

## 🏆 Alternative Approaches
1. **Brute Force**:
   ```go
   // Check all possible k-length combinations
   // O(n choose k) time - completely impractical
   ```
2. **Priority Queue**:
   ```go
   // Maintain min and max heaps
   // More complex with no performance benefit
   ```
3. **Bucket Sort**:
   ```go
   // For limited range integers
   // O(n) time but limited applicability
   ```

The implemented sorting + sliding window solution is the most efficient general-purpose approach for this problem!