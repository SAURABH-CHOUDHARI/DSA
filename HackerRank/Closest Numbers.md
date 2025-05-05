# 🔢 Closest Numbers - Optimal Solution

## 🎯 Problem Description
Given an array of integers, find all pairs of numbers with the smallest absolute difference between them.

## 🧠 Solution Approach
This solution uses:
1. **Sorting** to arrange numbers in order
2. **Two-pass algorithm**:
   - First pass to find the minimum difference
   - Second pass to collect all pairs with that difference

## 🚀 Optimal Implementation
```go
import (
    "math"
    "slices"
)

func closestNumbers(arr []int32) []int32 {
    slices.Sort(arr)
    
    // Find minimum difference
    minDiff := int32(math.MaxInt32)
    for i := 1; i < len(arr); i++ {
        diff := arr[i] - arr[i-1]
        if diff < minDiff {
            minDiff = diff
        }
    }
    
    // Collect all pairs with minimum difference
    var result []int32
    for i := 1; i < len(arr); i++ {
        if arr[i]-arr[i-1] == minDiff {
            result = append(result, arr[i-1], arr[i])
        }
    }
    
    return result
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n log n)
  - Dominated by the sorting operation
  - O(n) for both passes through the array
- **Space Complexity**: O(n)
  - Stores result pairs (worst case: all adjacent pairs have min difference)

## 📊 Example Walkthrough
**Input:**
```go
[5, 4, 3, 2]
```

**Execution:**
1. Sorted array: [2, 3, 4, 5]
2. Find minimum difference:
   - 3-2=1, 4-3=1, 5-4=1 → minDiff=1
3. Collect pairs:
   - (2,3), (3,4), (4,5)

**Output:**
```go
[2, 3, 3, 4, 4, 5]
```

## 💡 Key Insights
1. **Sorting First**:
   - Minimum differences always occur between adjacent elements in sorted array
2. **Two-Pass Efficiency**:
   - Separates finding min difference from collecting results
3. **Edge Cases**:
   - Handles empty array
   - Handles array with all equal elements
   - Returns multiple pairs when they exist

## 🌟 Why This Solution Rocks
- Clean separation of concerns
- Optimal time complexity
- Clear and readable implementation
- Efficient memory usage

## 🏆 Alternative Approaches
1. **Brute Force**:
   ```go
   // O(n²) time - compares all possible pairs
   ```
   - Too slow for large inputs

2. **Single Pass**:
   ```go
   // Could track pairs while finding minDiff
   ```
   - More complex code
   - No significant performance gain

The implemented two-pass solution provides the best balance of efficiency and readability!