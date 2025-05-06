# 🔄 Fair Rations - Optimal Solution

## 🎯 Problem Description
Given an array representing the number of loaves each person has, determine the minimum number of loaves you must distribute to meet the requirement that everyone must have an even number of loaves. You can only give loaves to adjacent persons. If it's not possible, return "NO".

## 🧠 Solution Approach
This solution uses:
1. **Greedy algorithm** to distribute loaves optimally
2. **Single pass iteration** through the array
3. **Immediate distribution** when odd count found
4. **Final parity check** to verify solution possibility

## 🚀 Optimal Implementation
```go
func fairRations(B []int32) string {
    loaves := 0
    n := len(B)
    
    for i := 0; i < n-1; i++ {
        if B[i]%2 != 0 {
            B[i]++
            B[i+1]++
            loaves += 2
        }
    }
    
    if B[n-1]%2 != 0 {
        return "NO"
    }
    
    return strconv.Itoa(loaves)
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Single pass through the array
  - Constant time operations per element
- **Space Complexity**: O(1)
  - Uses constant extra space (only a few variables)

## 📊 Example Walkthrough
**Input:**
```go
[1, 2]
```

**Execution:**
1. First element is odd (1), so give loaf to first and second person → [2, 3]
2. Second element is now odd (3), but no next person to give to
3. Final element remains odd → return "NO"

**Output:** `"NO"`

## 💡 Key Insights
1. **Greedy Distribution**:
   - Always fix odd counts immediately when found
   - Only distribute to current and next person
2. **Final Check**:
   - Last element must be even after all distributions
3. **Efficiency**:
   - Single pass ensures optimal time complexity
   - No additional data structures needed

## 🌟 Why This Solution Rocks
- Simple and intuitive approach
- Optimal O(n) time complexity
- Minimal space usage
- Handles edge cases naturally (small arrays, already even distributions)

## 🏆 Alternative Approaches
1. **Brute Force**:
   ```go
   // Try all possible distribution sequences
   // Exponential time - impractical
   ```
2. **Two-pass**:
   ```go
   // First pass to count odd positions
   // Second pass to distribute
   // Less efficient than single-pass solution
   ```

The greedy single-pass solution provides the most efficient way to solve this problem!