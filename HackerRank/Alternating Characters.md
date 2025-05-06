# 🔄 Alternating Characters - Optimal Solution

## 🎯 Problem Description
Given a string consisting of characters 'A' and 'B', determine the minimum number of deletions required to transform the string into one with no two adjacent characters being the same.

## 🧠 Solution Approach
This solution uses:
1. **Single pass iteration** through the string
2. **Adjacent character comparison** to identify duplicates
3. **Counter increment** for each duplicate found
4. **Efficient checking** without additional storage

## 🚀 Optimal Implementation
```go
func alternatingCharacters(s string) int32 {
    count := int32(0)
    for i := 1; i < len(s); i++ {
        if s[i-1] == s[i] {
            count++
        }
    }  
    return count
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Single pass through the string (n-1 comparisons)
- **Space Complexity**: O(1)
  - Uses only a single counter variable

## 📊 Example Walkthrough
**Input:**
```go
"AABBBAB"
```

**Execution:**
1. Compare positions:
   - A-A → count = 1
   - A-B → no change
   - B-B → count = 2
   - B-B → count = 3
   - B-A → no change
   - A-B → no change
2. Total deletions needed: 3

**Output:** `3`

## 💡 Key Insights
1. **Adjacent Comparison**:
   - Only need to check each character against its neighbor
2. **Simple Counting**:
   - Each matching pair requires one deletion
3. **Efficiency**:
   - No need to modify the string
   - Early termination possible (though not implemented)

## 🌟 Why This Solution Rocks
- Extremely efficient O(n) time
- Minimal memory usage (single counter)
- Clean, readable implementation
- Handles all edge cases:
  - Empty string
  - Single character
  - Already alternating strings
  - All identical characters

## 🏆 Alternative Approaches
1. **String Builder Modification**:
   ```go
   // Build new string while checking
   // O(n) time but uses O(n) space
   ```
2. **Recursive Solution**:
   ```go
   // Recursively check and remove duplicates
   // O(n²) time - much less efficient
   ```

The single-pass counting solution provides the most efficient way to solve this problem!