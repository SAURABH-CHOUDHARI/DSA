# 🌳 Utopian Tree - Optimal Solution

## 🎯 Problem Description
The Utopian Tree goes through 2 growth cycles every year:
1. **Spring**: The tree doubles its height
2. **Summer**: The tree grows by 1 meter

Given `n` growth cycles, calculate the final height of the tree after all cycles complete.

## 🧠 Solution Approach
This solution features:
1. **Iterative growth cycle simulation**
2. **Conditional height adjustment** based on cycle type
3. **Efficient cycle processing** without unnecessary calculations

## 🚀 Clean Implementation
```go
func utopianTree(n int32) int32 {
    h := int32(1)  
    
    for i := 1; i <= int(n); i++ {
        if i%2 == 1 { // Spring cycle (odd-numbered)
            h *= 2
        } else { // Summer cycle (even-numbered)
            h += 1
        }
    }
    return h
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Single loop through all growth cycles
- **Space Complexity**: O(1)
  - Uses only constant space for height tracking

## 📊 Example Walkthrough
**Input:** `n = 5` (5 growth cycles)

**Execution:**
1. Initial height: 1m
2. Cycle 1 (Spring): 1 * 2 = 2m
3. Cycle 2 (Summer): 2 + 1 = 3m
4. Cycle 3 (Spring): 3 * 2 = 6m
5. Cycle 4 (Summer): 6 + 1 = 7m
6. Cycle 5 (Spring): 7 * 2 = 14m

**Output:** `14`

## 💡 Key Insights
1. **Pattern Recognition**:
   - Odd cycles (Spring) double height
   - Even cycles (Summer) add 1 meter
2. **Efficient Calculation**:
   - No need for separate season tracking
   - Simple parity check determines growth type

## 🌟 Advantages
- Simple and intuitive implementation
- Minimal memory usage
- Clear mapping of problem requirements to code
- Handles edge cases (n=0 returns initial height)

## 🔄 Alternative Approaches
1. **Mathematical Formula**:
   ```go
   // Could use formula: 2^(n/2 + 1) - 1 for even n, 2^((n+3)/2) - 2 for odd n
   // More complex but O(1) time solution
   ```
2. **Recursive Solution**:
   ```go
   func utopianTree(n int32) int32 {
       if n == 0 { return 1 }
       if n%2 == 1 { return 2 * utopianTree(n-1) }
       return 1 + utopianTree(n-1)
   }
   ```

The iterative solution provides the best balance of simplicity and efficiency for this problem!