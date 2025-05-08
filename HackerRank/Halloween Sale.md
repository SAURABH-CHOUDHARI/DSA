# 🎮 How Many Games - Optimal Solution

## 🎯 Problem Description
Given an initial game price `p`, discount amount `d`, minimum price `m`, and budget `s`, calculate how many games can be purchased. Each subsequent game purchase applies the discount until the price reaches the minimum threshold.

## 🧠 Solution Approach
This solution features:
1. **Iterative purchasing** while budget allows
2. **Price reduction** after each purchase
3. **Price floor enforcement** using a max function
4. **Budget tracking** to prevent overspending

## 🚀 Clean Implementation
```go
func howManyGames(p int32, d int32, m int32, s int32) int32 {
    games := int32(0)
    curSpent := int32(0)
    
    for curSpent+p <= s {
        curSpent += p
        games++
        p = max(p-d, m)
    }
    return games
}

func max(a, b int32) int32 {
    if a > b {
        return a
    }
    return b
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Where n is number of purchasable games
  - Single loop with constant-time operations
- **Space Complexity**: O(1)
  - Uses only fixed-size variables

## 📊 Example Walkthrough
**Input:** `p=20, d=3, m=6, s=85`

**Execution:**
1. Purchase 1: Price=20, Spent=20, New price=max(17,6)=17
2. Purchase 2: Price=17, Spent=37, New price=max(14,6)=14
3. Purchase 3: Price=14, Spent=51, New price=max(11,6)=11
4. Purchase 4: Price=11, Spent=62, New price=max(8,6)=8
5. Purchase 5: Price=8, Spent=70, New price=max(5,6)=6
6. Purchase 6: Price=6, Spent=76, New price remains 6
7. Purchase 7: Price=6, Spent=82 (would be 88 → stop)

**Output:** `6`

## 💡 Key Insights
1. **Elegant Price Control**:
   - Single `max` operation cleanly handles price floor
2. **Budget Safety**:
   - Pre-check ensures never overspending
3. **Minimal Operations**:
   - Only essential calculations performed

## 🌟 Advantages
- More readable than nested conditionals
- Easier to maintain
- Same performance as alternative
- Clear expression of price floor logic

## 🔄 Comparison with Alternative
The second implementation uses explicit conditionals:
```go
if p-d > m {
    p -= d
} else {
    p = m
}
```
While functionally equivalent, the `max` version:
- Reduces cognitive complexity
- Eliminates branching
- More clearly expresses the price floor requirement

The max-based solution provides optimal clarity and maintainability while preserving identical runtime characteristics!