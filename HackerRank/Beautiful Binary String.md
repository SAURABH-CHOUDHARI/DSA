# 💻 Beautiful Binary String - Optimal Solution

## 🎯 Problem Description
Given a binary string, determine the minimum number of changes needed to make the string "beautiful" (containing no occurrences of the substring "010").

## 🧠 Solution Approach
This solution uses:
1. **Sliding window technique** to scan the string in chunks of 3 characters
2. **Pattern matching** to identify "010" substrings
3. **Greedy replacement** strategy (changes middle character when pattern found)
4. **Efficient scanning** with optimized index jumps

## 🚀 Optimal Implementation
```javascript
function beautifulBinaryString(b) {
    let count = 0;
    let i = 0;
    
    while (i <= b.length - 3) {
        if (b.substring(i, i + 3) === "010") {
            count++;
            i += 3;  // Skip ahead after finding pattern
        } else {
            i++;
        }
    }
    
    return count;
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Single pass through the string with some index jumps
  - Worst case: n comparisons (no patterns found)
  - Best case: n/3 comparisons (every 3 chars is a pattern)
- **Space Complexity**: O(1)
  - Uses only a few variables regardless of input size

## 📊 Example Walkthrough
**Input:**
```javascript
"0101010"
```

**Execution:**
1. Finds "010" at positions 0-2 → count = 1 (skip to index 3)
2. Finds "010" at positions 3-5 → count = 2 (skip to index 6)
3. Final character doesn't form new pattern
4. Total changes needed: 2

**Output:** `2`

## 💡 Key Insights
1. **Pattern Recognition**:
   - Only need to check consecutive triplets
2. **Optimal Changes**:
   - Changing middle character (1→0) breaks current and prevents future patterns
3. **Efficient Scanning**:
   - Jump ahead after finding pattern to avoid overlap checks
4. **Greedy Works**:
   - Each change is locally optimal and leads to global optimum

## 🌟 Why This Solution Rocks
- Simple and intuitive implementation
- Optimal O(n) time complexity
- Minimal space usage
- Handles all edge cases:
  - Empty string
  - Strings shorter than 3 characters
  - Already beautiful strings
  - Worst-case patterns (alternating 0101...)

## 🏆 Alternative Approaches
1. **Brute Force Replacement**:
   ```javascript
   // Replace all "010" patterns then rescan
   // Potentially O(n²) time for nested patterns
   ```
2. **Regular Expression**:
   ```javascript
   // Use global pattern matching
   // Cleaner but potentially less efficient
   ```

The sliding window solution provides the most efficient and straightforward solution to this problem!