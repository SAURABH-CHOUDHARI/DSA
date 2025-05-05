# 📡 Mars Exploration (SOS Message) - Optimal Solution

## 🎯 Problem Description
A space probe on Mars sends messages to Earth as repetitions of "SOS". Some letters may be altered during transmission. Given the received message string, count how many letters were changed from the original "SOS" pattern.

## 🧠 Solution Approach
This solution uses:
1. **Pattern recognition** by checking every 3-character segment
2. **Direct comparison** against the expected "SOS" pattern
3. **Efficient traversal** with step size 3
4. **Bounds checking** to handle messages not divisible by 3

## 🚀 Optimal Implementation
```go
func marsExploration(s string) int32 {
    altered := int32(0)
    
    for i := 0; i < len(s); i += 3 {
        // Check first character in triplet (should be 'S')
        if i < len(s) && s[i] != 'S' {
            altered++
        }
        
        // Check second character in triplet (should be 'O')
        if i+1 < len(s) && s[i+1] != 'O' {
            altered++
        }
        
        // Check third character in triplet (should be 'S')
        if i+2 < len(s) && s[i+2] != 'S' {
            altered++
        }
    }
    
    return altered
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Processes each character exactly once
  - Steps through string in increments of 3
- **Space Complexity**: O(1)
  - Uses constant extra space (just the counter)

## 📊 Example Walkthrough
**Input:**
```go
"SOSSPSSQSSOR"
```

**Execution:**
1. Break into triplets:
   - "SOS" (perfect - 0 alterations)
   - "PSS" (P≠S, S≠O, S=S → 2 alterations)
   - "QSS" (Q≠S, S≠O, S=S → 2 alterations)
   - "OR" (O≠S, R≠O → 2 alterations, missing third character)
2. Total alterations: 0 + 2 + 2 + 2 = 6

**Output:** `3`  
*(Note: The example actually returns 3 because the last incomplete triplet "OR" counts as 2 alterations, making total 0+2+1=3 for this input)*

## 💡 Key Insights
1. **Pattern Matching**:
   - Each triplet should match "SOS" exactly
2. **Incomplete Triplets**:
   - Handles messages where length isn't multiple of 3
3. **Efficiency**:
   - Only checks necessary positions
   - No string copying or modification
4. **Edge Cases**:
   - Empty string
   - Very short strings (1-2 characters)
   - Strings with no alterations
   - Strings with all characters altered

## 🌟 Why This Solution Rocks
- Simple and straightforward logic
- Optimal O(n) time complexity
- Minimal memory usage
- Clearly demonstrates pattern recognition approach
- Handles all edge cases correctly

## 🏆 Alternative Approaches
1. **Regex Matching**:
   ```go
   // Use regular expressions to count mismatches
   // More complex with no performance benefit
   ```
2. **String Splitting**:
   ```go
   // Split into 3-character chunks first
   // Creates unnecessary temporary slices
   ```
3. **Character-by-Character**:
   ```go
   // Check position modulo 3 for expected character
   // Similar performance but less clear logic
   ```

The implemented solution provides the cleanest and most efficient way to solve this problem!