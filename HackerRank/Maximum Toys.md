# 🧸 Maximum Toys - Optimal Solution

## 🎯 Problem Description
Given:
- `prices`: Array of toy prices
- `k`: Maximum amount you can spend

Find the **maximum number of toys** you can buy without exceeding your budget.

## 🧠 Solution Approach
This solution uses a **greedy algorithm**:
1. **Sort prices** in ascending order
2. **Buy cheapest toys first** until budget is exhausted
3. **Count each affordable toy**

## 🚀 Optimal Implementation
```go
func maximumToys(prices []int32, k int32) int32 {
    slices.Sort(prices) // Sort prices from cheapest to most expensive
    
    count := int32(0)
    
    for i := 0; i < len(prices); i++ {
        if k < prices[i] {
            break // Can't afford this toy (or any remaining)
        }
        k -= prices[i] // Deduct from budget
        count++        // Increment toy count
    }
    
    return count
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n log n)
  - Dominated by the sorting operation
  - O(n) for the single pass through prices
- **Space Complexity**: O(1)
  - Uses constant extra space (in-place sort)

## 📊 Example Walkthrough
**Input:**
```go
prices = [1, 12, 5, 111, 200, 1000, 10]
k = 50
```

**Execution:**
1. Sorted prices: [1, 5, 10, 12, 111, 200, 1000]
2. Buy 1 → budget: 49
3. Buy 5 → budget: 44
4. Buy 10 → budget: 34
5. Buy 12 → budget: 22
6. Can't buy 111 → stop

**Total toys:** 4  
**Output:** `4`

## 💡 Key Insights
1. **Greedy Choice Property**:
   - Cheapest toys first maximizes quantity
2. **Early Termination**:
   - Stops at first unaffordable toy
3. **Edge Cases**:
   - Empty price list returns 0
   - Budget too small for any toy returns 0
   - Exact budget match handled correctly

## 🌟 Why This Solution Rocks
- Simple and intuitive
- Optimal O(n log n) time
- Space efficient (O(1) extra space)
- Clearly demonstrates greedy algorithm principles

## 🏆 Alternative Approaches
1. **Without Sorting**:
   - Would require O(n²) time to find minimums
   - Impractical for large inputs

2. **Recursive Solution**:
   ```go
   func maxToys(prices []int32, k int32) int32 {
       if len(prices) == 0 || k < prices[0] { return 0 }
       return 1 + maxToys(prices[1:], k-prices[0])
   }
   ```
   - Inefficient due to slicing
   - Stack overflow risk for large inputs

The implemented sorting solution is the most efficient approach for this problem!