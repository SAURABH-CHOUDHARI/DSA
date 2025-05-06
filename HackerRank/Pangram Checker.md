# 🔤 Pangram Checker - Optimal Solution

## 🎯 Problem Description
Given a string, determine if it is a pangram (contains all letters of the English alphabet at least once), ignoring case and spaces.

## 🧠 Solution Approach
This solution uses:
1. **Boolean tracking array** to mark encountered letters
2. **Case normalization** to handle both uppercase and lowercase
3. **Space skipping** to ignore non-letter characters
4. **Final verification** to check all letters were present

## 🚀 Optimal Implementation
```go
func pangrams(s string) string {
    alaphabets := make([]bool, 26)
    
    for _, char := range s {
        if char == ' ' {
            continue
        }
        num := int(char)
        if num >= 97 {
            num -= 97  // lowercase normalization
        } else {
            num -= 65  // uppercase normalization
        }
        alaphabets[num] = true
    }
    
    for _, b := range alaphabets {
        if !b {
            return "not pangram"
        }
    }
    return "pangram"
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Single pass through the string (n characters)
  - Final 26-element check is O(1)
- **Space Complexity**: O(1)
  - Fixed-size array (26 elements) regardless of input

## 📊 Example Walkthrough
**Input:**
```go
"The quick brown fox jumps over the lazy dog"
```

**Execution:**
1. Process each character:
   - 'T' → 19 (normalized)
   - 'h' → 7
   - 'e' → 4
   - ... (marks all 26 letters)
2. Final check confirms all letters present
3. Returns "pangram"

**Output:** `"pangram"`

## 💡 Key Insights
1. **Case Handling**:
   - Normalizes both uppercase (65-90) and lowercase (97-122)
2. **Efficient Tracking**:
   - Boolean array provides O(1) lookup and marking
3. **Space Ignoring**:
   - Skips spaces without processing
4. **Complete Check**:
   - Verifies all 26 letters were encountered

## 🌟 Why This Solution Rocks
- Optimal O(n) time complexity
- Minimal constant space usage
- Clean and straightforward implementation
- Handles all edge cases:
  - Mixed case strings
  - Strings with spaces/punctuation
  - Exactly minimum pangrams
  - Non-pangram inputs

## 🏆 Alternative Approaches
1. **Hash Map Solution**:
   ```go
   // Uses map[rune]bool instead of array
   // Same time complexity but slightly more overhead
   ```
2. **Bitmask Solution**:
   ```go
   // Uses integer bits to track letters
   // More space efficient but less readable
   ```

The boolean array solution provides an optimal balance of efficiency and readability for this problem!