# 📊 Sherlock and Valid String - Optimal Solution

## 🎯 Problem Description
Given a string, determine if all characters appear with the same frequency, or if removing exactly one character makes all remaining frequencies equal.

## 🧠 Solution Approach
This solution uses:
1. **Frequency mapping** to count character occurrences
2. **Frequency-of-frequency analysis** to identify patterns
3. **Special case handling** for valid removal scenarios
4. **Multi-level validation** for different conditions

## 🚀 Optimal Implementation
```go
func isValid(s string) string {
    // Count character frequencies
    freqMap := make(map[rune]int)
    for _, char := range s {
        freqMap[char]++
    }
    
    // Count frequency occurrences
    freqOfFreq := make(map[int]int)
    for _, freq := range freqMap {
        freqOfFreq[freq]++
    }
    
    // Case 1: All frequencies same
    if len(freqOfFreq) == 1 {
        return "YES"
    }
    
    // Case 2: More than two different frequencies
    if len(freqOfFreq) > 2 {
        return "NO"
    }
    
    // Extract the two frequencies and their counts
    var freq1, freq2, count1, count2 int
    i := 0
    for freq, count := range freqOfFreq {
        if i == 0 {
            freq1 = freq
            count1 = count
        } else {
            freq2 = freq
            count2 = count
        }
        i++
    }
    
    // Case 3: Single character with frequency 1
    if (freq1 == 1 && count1 == 1) || (freq2 == 1 && count2 == 1) {
        return "YES"
    }
    
    // Case 4: One frequency is exactly one more than the other
    if (freq1 == freq2 + 1 && count1 == 1) || (freq2 == freq1 + 1 && count2 == 1) {
        return "YES"
    }
    
    return "NO"
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Two passes through the string (character counting)
  - Two passes through frequency maps (small constant factor)
- **Space Complexity**: O(1)
  - Uses fixed-size maps (limited by character set size)

## 📊 Example Walkthrough
**Input:**
```go
"aabbccd"
```

**Execution:**
1. Character frequencies: {'a':2, 'b':2, 'c':2, 'd':1}
2. Frequency counts: {2:3, 1:1}
3. Detects frequency 1 appears once → valid removal
4. Returns "YES"

**Output:** `"YES"`

## 💡 Key Insights
1. **Frequency Analysis**:
   - Two-level mapping reveals distribution patterns
2. **Valid Cases**:
   - All frequencies equal
   - Single outlier frequency
   - One frequency exactly one greater than others
3. **Efficient Validation**:
   - Early termination for obvious cases
   - Minimal additional storage required

## 🌟 Why This Solution Rocks
- Comprehensive case coverage
- Optimal O(n) time complexity
- Clear logical structure
- Handles all edge cases:
  - Single character strings
  - All characters identical
  - Multiple removal candidates
  - No valid solutions

## 🏆 Alternative Approaches
1. **Brute Force Removal**:
   ```go
   // Try removing each character and check frequencies
   // O(n²) time - inefficient for long strings
   ```
2. **Statistical Analysis**:
   ```go
   // Calculate mean and standard deviation
   // More complex and potentially less accurate
   ```

The frequency mapping solution provides the most efficient and reliable approach to this problem!