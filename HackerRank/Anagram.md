# 🔄 Anagram - Optimal Solution

## 🎯 Problem Description
Given a string, determine the minimum number of character changes required to split the string into two anagrams. If the string length is odd, return -1 since it's impossible to split into two equal parts.

## 🧠 Solution Approach
This solution uses:
1. **Length parity check** to immediately handle odd-length strings
2. **String splitting** into two equal halves
3. **Frequency counting** using a hash map
4. **Difference calculation** to determine required changes

## 🚀 Optimal Implementation
```go
func anagram(s string) int32 {
    if len(s)%2 != 0 {
        return -1
    }
    
    mid := len(s) / 2
    s1 := s[:mid]
    s2 := s[mid:]
    
    charCount := make(map[rune]int)
    for _, char := range s2 {
        charCount[char]++
    }
    
    changes := int32(0)
    
    for _, char := range s1 {
        if charCount[char] > 0 {
            charCount[char]--
        } else {
            changes++
        }
    }
    
    return changes
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Two passes through half the string each (O(n/2) + O(n/2))
  - Map operations are O(1) average case
- **Space Complexity**: O(1) or O(k) where k is character set size
  - Uses a fixed-size map (limited by possible characters)

## 📊 Example Walkthrough
**Input:**
```go
"xaxbbbxx"
```

**Execution:**
1. Length is even (8), so proceed
2. Split into "xaxb" and "bbxx"
3. Count characters in second half:
   - 'b':2, 'x':2
4. Compare with first half:
   - 'x' exists (count: 2→1)
   - 'a' doesn't exist (changes++)
   - 'x' exists (count: 1→0)
   - 'b' exists (count: 2→1)
5. Total changes needed: 1 (for 'a')

**Output:** `1`

## 💡 Key Insights
1. **Immediate Rejection**:
   - Odd-length strings can't be split into equal anagrams
2. **Frequency Analysis**:
   - Only need to count characters in one half
   - Compare against the other half
3. **Efficient Counting**:
   - Map tracks available characters from second half
   - Decrement counts when matches found

## 🌟 Why This Solution Rocks
- Optimal O(n) time complexity
- Clean and straightforward logic
- Minimal space usage (only stores counts for one half)
- Handles all edge cases (empty string, single character, etc.)

## 🏆 Alternative Approaches
1. **Double Frequency Count**:
   ```go
   // Count frequencies for both halves and compare
   // Same time complexity but uses more space
   ```
2. **Sorting**:
   ```go
   // Sort both halves and compare
   // O(n log n) time - less efficient
   ```

The frequency counting solution provides the most efficient way to solve this problem!