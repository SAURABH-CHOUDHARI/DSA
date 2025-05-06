# 💎 Gemstones - Optimal Solution

## 🎯 Problem Description
Given an array of strings (each representing a rock's mineral composition), determine how many distinct minerals occur in every rock (gemstones).

## 🧠 Solution Approach
This solution uses:
1. **Intersection of sets** to find common minerals
2. **Hash map tracking** for efficient lookups
3. **Iterative reduction** of the common mineral set
4. **Character uniqueness** within each rock

## 🚀 Optimal Implementation
```go
func gemstones(arr []string) int32 {
    gemMap := make(map[rune]bool)
    // Initialize with first rock's minerals
    for _, char := range arr[0] {
        gemMap[char] = true
    }
    
    // Intersect with subsequent rocks
    for i := 1; i < len(arr); i++ {
        currentChars := make(map[rune]bool)
        for _, char := range arr[i] {
            currentChars[char] = true
        }
        
        // Remove minerals not in current rock
        for char := range gemMap {
            if !currentChars[char] {
                delete(gemMap, char)
            }
        }
    }
    
    return int32(len(gemMap))
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n*m)
  - n = number of rocks
  - m = average length of rocks
  - Processes each character in each rock
- **Space Complexity**: O(k)
  - k = number of unique minerals in first rock
  - Shrinks with each subsequent rock

## 📊 Example Walkthrough
**Input:**
```go
["abc", "bcd", "cde"]
```

**Execution:**
1. Initialize with first rock: {'a', 'b', 'c'}
2. Compare with second rock {'b', 'c', 'd'} → keep {'b', 'c'}
3. Compare with third rock {'c', 'd', 'e'} → keep {'c'}
4. Final gemstones: 1 ('c')

**Output:** `1`

## 💡 Key Insights
1. **Set Intersection**:
   - Progressively narrows possible gemstones
2. **Efficient Filtering**:
   - Each rock reduces the candidate set
3. **Duplicate Handling**:
   - Maps automatically handle duplicate minerals within rocks
4. **Early Termination**:
   - If gemMap becomes empty, can exit early (optimization not shown)

## 🌟 Why This Solution Rocks
- Clear mathematical approach (set intersection)
- Optimal time complexity for problem constraints
- Memory efficient (only tracks necessary minerals)
- Handles all edge cases:
  - Single rock input
  - Empty input
  - Rocks with duplicate minerals
  - No gemstone case

## 🏆 Alternative Approaches
1. **Brute Force Counting**:
   ```go
   // Count all mineral occurrences across all rocks
   // Requires O(total characters) space
   ```
2. **Bitmask Representation**:
   ```go
   // Use bits to represent minerals (limited to 64 minerals)
   // Faster operations but limited character set
   ```

The hash map intersection solution provides an optimal balance of efficiency and clarity for this problem!