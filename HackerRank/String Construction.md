# 🏗️ String Construction - Optimal Solution

## 🎯 Problem Description
Given a string `s`, determine the minimum cost to construct the string where:
- Appending any character costs 1 unit
- Copying any substring costs 0 units

## 🧠 Solution Approach
This solution uses:
1. **Hash map tracking** to count unique characters
2. **Single pass** through the string
3. **Incremental cost calculation** for new characters

## 🚀 Optimal Implementation
```go
func stringConstruction(s string) int32 {
    seen := make(map[rune]bool) // Track seen characters
    cost := int32(0)            // Initialize cost counter
    
    for _, char := range s {
        if !seen[char] {       // If character is new
            seen[char] = true  // Mark as seen
            cost++             // Increment cost
        }
    }
    
    return cost
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Single pass through the string
  - O(1) map operations
- **Space Complexity**: O(1) or O(k)
  - Where k is number of unique characters (max 26 for lowercase English)

## 📊 Example Walkthrough
**Input:**
```go
"abab"
```

**Execution:**
1. Process 'a':
   - New → cost=1, seen={'a'}
2. Process 'b':
   - New → cost=2, seen={'a','b'}
3. Process 'a':
   - Seen → no cost change
4. Process 'b':
   - Seen → no cost change

**Output:** `2`

## 💡 Key Insights
1. **Optimal Strategy**:
   - Only pay for new characters
   - Copy all existing characters for free
2. **Efficiency**:
   - Early termination possible if all 26 letters seen
3. **Edge Cases**:
   - Empty string (cost=0)
   - All unique characters
   - All duplicate characters

## 🌟 Why This Solution Rocks
- Optimal O(n) time complexity
- Clean and readable implementation
- Handles all character types (Unicode compatible)
- Space efficient for limited character sets

## 🏆 Alternative Approaches
1. **Array Tracking** (for known character sets):
   ```go
   var seen [26]bool
   // Works for lowercase English letters
   ```
2. **Bitmasking** (for very limited character sets):
   ```go
   var seen uint32
   // Uses bits to track presence
   ```

The hash map solution provides the best combination of efficiency and flexibility!