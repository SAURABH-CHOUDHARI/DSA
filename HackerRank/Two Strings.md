# 🔤 Two Strings - Optimal Solution

## 🎯 Problem Description
Given two strings, determine if they share any common substring (even a single character match is sufficient).

## 🧠 Solution Approach
This solution uses:
1. **Hash map tracking** for efficient character lookups
2. **Single pass initialization** of first string's characters
3. **Early termination** when any match is found
4. **Space-time tradeoff** for optimal performance

## 🚀 Optimal Implementation
```go
func twoStrings(s1 string, s2 string) string {
    charSet := make(map[rune]bool)
    
    // Record all characters from first string
    for _, char := range s1 {
        charSet[char] = true
    }
    
    // Check for any character present in second string
    for _, char := range s2 {
        if charSet[char] {
            return "YES"
        }
    }
    return "NO"
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n + m)
  - n = length of s1
  - m = length of s2
  - Processes each string exactly once
- **Space Complexity**: O(min(n, m))
  - Stores unique characters from first string
  - Worst case: all characters unique

## 📊 Example Walkthrough
**Input:**
```go
s1 = "hello"
s2 = "world"
```

**Execution:**
1. Store characters from s1: {'h', 'e', 'l', 'o'}
2. Check s2 characters:
   - 'w' → not found
   - 'o' → found! (returns "YES")

**Output:** `"YES"`

## 💡 Key Insights
1. **Single Character Sufficiency**:
   - Just one matching character satisfies the requirement
2. **Efficient Lookup**:
   - Hash map provides O(1) character checks
3. **Early Termination**:
   - Returns immediately upon first match
4. **Unicode Support**:
   - Uses `rune` to handle multi-byte characters

## 🌟 Why This Solution Rocks
- Optimal O(n + m) time complexity
- Clear and concise implementation
- Memory efficient (only stores unique characters)
- Handles all edge cases:
  - Empty strings
  - No common characters
  - Unicode characters
  - Identical strings

## 🏆 Alternative Approaches
1. **Brute Force Comparison**:
   ```go
   // Compare all character pairs
   // O(n*m) time - inefficient for long strings
   ```
2. **Bitmask Representation**:
   ```go
   // Use bits to represent characters (limited to 64 chars)
   // Faster but limited character set
   ```

The hash map solution provides the best balance of efficiency and readability for this problem!