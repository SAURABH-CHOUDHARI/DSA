# ☁️ Jumping on Clouds - Optimal Solution

## 🎯 Problem Description
Given an array of clouds where:
- `0` represents a safe cloud
- `1` represents a thunder cloud (must avoid)

Start at cloud `0` and jump to the last cloud with the minimum number of jumps. You can jump:
- 1 cloud ahead (`i+1`)
- 2 clouds ahead (`i+2`) 

## 🧠 Solution Approach
This solution uses a **greedy algorithm** to minimize jumps:
1. **Always try to jump 2 clouds** when possible (optimal move)
2. **Jump 1 cloud** only when necessary
3. **Count each jump** until reaching the end

## 🚀 Optimal Implementation
```go
func jumpingOnClouds(c []int32) int32 {
    n := len(c)
    position := 0
    jumps := int32(0)
    
    for position < n-1 {
        // Prefer jumping 2 clouds if possible
        if position+2 < n && c[position+2] == 0 {
            position += 2
        } else {
            position++
        }
        jumps++
    }
    
    return jumps
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Single pass through the cloud array
- **Space Complexity**: O(1)
  - Uses constant extra space

## 📊 Example Walkthrough
**Input:**
```go
c = [0, 0, 1, 0, 0, 1, 0]
```

**Execution:**
1. Start at position 0
2. Jump 2 → pos 2 (cloud 1 - invalid)
3. Jump 1 → pos 1
4. Jump 2 → pos 3
5. Jump 2 → pos 5 (cloud 1 - invalid)
6. Jump 1 → pos 4
7. Jump 2 → pos 6 (end)

**Total jumps:** 4  
**Output:** `4`

## 💡 Key Insights
1. **Greedy Choice Property**: Always optimal to maximize jump distance when possible
2. **Safety Check**: Always verify cloud is safe (`0`) before jumping
3. **Termination Condition**: Loop until reaching the last cloud

## 🌟 Why This Solution Rocks
- Minimizes jumps optimally in O(n) time
- Simple and intuitive logic
- Handles all edge cases:
  - Small cloud sequences
  - Forced single jumps
  - Maximum double jumps
- Space efficient with O(1) extra space

## 🏆 Alternative Approaches
1. **Recursive Solution**:
   - Would have O(2^n) time complexity
   - Impractical for large inputs

2. **DP Solution**:
   - O(n) time and space
   - Overkill for this problem

The greedy approach is perfectly suited for this problem!