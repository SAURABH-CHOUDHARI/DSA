# 🍫 Chocolate Feast - Optimal Solution

## 🎯 Problem Description
Given:
- `n`: Money you have
- `c`: Cost of one chocolate
- `m`: Number of wrappers needed to exchange for one free chocolate

Calculate the maximum number of chocolates you can get by:
1. Buying chocolates with money
2. Exchanging wrappers for additional chocolates

## 🧠 Solution Approach
This solution uses a **greedy algorithm** to maximize chocolates:
1. **Initial purchase**: Calculate how many chocolates you can buy directly
2. **Wrapper exchange**: Continuously exchange wrappers for more chocolates
3. **Track wrappers**: Keep count of remaining wrappers after each exchange

## 🚀 Optimal Implementation
```go
func chocolateFeast(n int32, c int32, m int32) int32 {
    chocolates := n / c
    wrappers := chocolates
    
    for wrappers >= m {
        newChocolates := wrappers / m
        chocolates += newChocolates
        wrappers = (wrappers % m) + newChocolates
    }
    
    return chocolates
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(log n)
  - Each wrapper exchange reduces the problem size exponentially
- **Space Complexity**: O(1)
  - Uses constant extra space

## 📊 Example Walkthrough
**Input:**
```go
n = 15, c = 3, m = 2
```

**Execution:**
1. Initial purchase: 15/3 = 5 chocolates (5 wrappers)
2. First exchange: 5/2 = 2 new chocolates (now 7 total)
   - Wrappers: 5%2 + 2 = 3
3. Second exchange: 3/2 = 1 new chocolate (now 8 total)
   - Wrappers: 3%2 + 1 = 2
4. Third exchange: 2/2 = 1 new chocolate (now 9 total)
   - Wrappers: 2%2 + 1 = 1 (loop ends)

**Output:** `9`

## 💡 Key Insights
1. **Wrapper Math**:
   - `wrappers / m` = new chocolates from exchange
   - `wrappers % m` = remaining unused wrappers
2. **Termination**:
   - Loop continues until wrappers can't be exchanged anymore
3. **Edge Cases**:
   - When `m = 1`: Infinite chocolates (problem constraints prevent this)
   - When `n < c`: Can't buy any chocolates

## 🌟 Why This Solution Rocks
- Efficient wrapper recycling logic
- Handles all edge cases properly
- Optimal O(log n) time complexity
- Clear and concise implementation

## 🏆 Alternative Approaches
1. **Recursive Solution**:
   ```go
   func chocolateFeast(n, c, m int32) int32 {
       if n < c { return 0 }
       bought := n / c
       return bought + chocolateFeast(bought, m, m)
   }
   ```
   - Less efficient due to function call overhead
   - Doesn't handle wrapper leftovers as elegantly

2. **Iterative with Break**:
   ```go
   for {
       if wrappers < m { break }
       // Exchange logic
   }
   ```
   - Similar performance, but less clean loop structure

The implemented solution is the most efficient and readable approach!