# 💻 Electronics Shop - Optimal Solution

## 🎯 Problem Description
Given a budget `b`, arrays of keyboard prices and USB drive prices, find the maximum total price for one keyboard and one USB drive that doesn't exceed the budget. Return -1 if no combination is possible.

## 🧠 Solution Approach
This solution uses:
1. **Sorting** of USB drives for efficient searching
2. **Binary search** to find optimal USB drive for each keyboard
3. **Budget-aware pruning** to skip impossible combinations
4. **Max tracking** to find the best valid combination

## 🚀 Optimal Implementation
```go
func getMoneySpent(keyboards []int32, drives []int32, b int32) int32 {
    slices.Sort(drives)
    
    maxSpent := int32(-1)
    
    for _, k := range keyboards {
        remaining := b - k
        if remaining <= 0 {
            continue
        }

        l, r := 0, len(drives)-1
        idx := -1
        for l <= r {
            mid := (l + r) / 2
            if drives[mid] <= remaining {
                idx = mid
                l = mid + 1
            } else {
                r = mid - 1
            }
        }

        if idx != -1 {
            total := k + drives[idx]
            if total > maxSpent {
                maxSpent = total
            }
        }
    }
    return maxSpent
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n log n + m log n)
  - Sorting USB drives: O(n log n)
  - Binary search for each keyboard: O(m log n)
- **Space Complexity**: O(1)
  - Modifies drives array in-place
  - Uses constant extra space

## 📊 Example Walkthrough
**Input:**
```go
keyboards = [40, 50, 60]
drives = [5, 8, 12]
b = 60
```

**Execution:**
1. Sort drives: [5, 8, 12]
2. Check keyboard 40:
   - Remaining: 20
   - Binary search finds drive 12 (idx=2)
   - Total: 52 (new max)
3. Check keyboard 50:
   - Remaining: 10
   - Binary search finds drive 8 (idx=1)
   - Total: 58 (new max)
4. Check keyboard 60:
   - Remaining: 0 → skip
5. Return max found: 58

**Output:** `58`

## 💡 Key Insights
1. **Sorted Optimization**:
   - Sorting enables binary search efficiency
2. **Early Pruning**:
   - Skips keyboards that exceed budget alone
3. **Binary Search Power**:
   - Quickly finds best matching USB drive
4. **Max Tracking**:
   - Efficiently updates best valid combination

## 🌟 Why This Solution Rocks
- Optimal O(n log n) complexity
- Handles large input sizes efficiently
- Clean implementation with Go's sort package
- Handles all edge cases:
  - No possible combinations
  - Exact budget matches
  - Single affordable item
  - Large price ranges

## 🏆 Alternative Approaches
1. **Brute Force Check**:
   ```go
   // Check all keyboard-drive pairs
   // O(n*m) time - inefficient for large inputs
   ```
2. **Double Sorting**:
   ```go
   // Sort both arrays and use two pointers
   // O(n log n + m log m) - similar complexity
   ```

The sorting + binary search solution provides the best balance of efficiency and readability for this problem!