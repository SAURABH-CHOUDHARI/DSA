# 📊 Find Median - Optimal Solution

## 🎯 Problem Description
Given an array of integers, find its **median** (the middle element in the sorted array).

## 🧠 Solution Approach
This solution uses:
1. **Sorting** to arrange numbers in order
2. **Direct access** to the middle element

## 🚀 Optimal Implementation
```go
import "slices"

func findMedian(arr []int32) int32 {
    slices.Sort(arr)
    return arr[len(arr)/2]
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n log n)
  - Dominated by the sorting operation
- **Space Complexity**: O(1) or O(n)
  - O(1) if sort is in-place (as in Go's implementation)
  - O(n) if sorting requires extra space

## 📊 Example Walkthrough
**Input:**
```go
[5, 3, 1, 2, 4]
```

**Execution:**
1. Sorted array: [1, 2, 3, 4, 5]
2. Middle index: 5/2 = 2
3. Return arr[2] = 3

**Output:** `3`

## 💡 Key Insights
1. **Odd-length Arrays**:
   - Median is exactly the middle element
2. **Even-length Arrays**:
   - Note: This implementation returns the lower middle element
   - For complete median calculation, average of two middle elements needed
3. **Edge Cases**:
   - Single-element array returns that element
   - Handles negative numbers correctly

## 🌟 Why This Solution Rocks
- Extremely simple and concise
- Leverages Go's efficient sorting
- Clearly demonstrates the core algorithm

## 🏆 Alternative Approaches
1. **Quickselect**:
   ```go
   // O(n) average case, but more complex to implement
   ```
   - Better theoretical complexity
   - Overkill for most practical cases

2. **Manual Sort**:
   ```go
   // Implementing your own sort
   ```
   - Not recommended (use built-in sorts)

3. **Full Median Calculation**:
```go
func findMedian(arr []int32) float64 {
    slices.Sort(arr)
    n := len(arr)
    if n%2 == 0 {
        return float64(arr[n/2-1]+arr[n/2])/2
    }
    return float64(arr[n/2])
}
```
- Handles even-length arrays properly

The implemented solution is perfect when you specifically need:
- The middle element for odd-length arrays
- The lower middle element for even-length arrays
- Maximum simplicity