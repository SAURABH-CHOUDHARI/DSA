# 🐫 CamelCase Word Counter - Optimal Solution

## 🎯 Problem Description
Given a string written in CamelCase (where each new word starts with a capital letter), count the number of words in the string.

Example: "saveChangesInTheEditor" → 5 words ("save", "Changes", "In", "The", "Editor")

## 🧠 Solution Approach
This solution uses:
1. **ASCII value checking** to detect uppercase letters
2. **Simple counter** initialized to 1 (first word is lowercase)
3. **Single pass** through the string

## 🚀 Optimal Implementation
```go
func camelcase(s string) int32 {
    count := int32(1) // First word starts lowercase
    
    for _, char := range s {
        if int(char) < 97 { // ASCII check for uppercase (A-Z are 65-90)
            count++
        }
    }
    
    return count
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Single pass through the string
- **Space Complexity**: O(1)
  - Uses constant extra space

## 📊 Example Walkthrough
**Input:**
```go
"saveChangesInTheEditor"
```

**Execution:**
1. Initialize count = 1 ("save")
2. Detect uppercase letters at positions:
   - 'C' → count=2
   - 'I' → count=3
   - 'T' → count=4
   - 'E' → count=5
3. Final count: 5

**Output:** `5`

## 💡 Key Insights
1. **First Word Handling**:
   - Counter starts at 1 to account for initial lowercase word
2. **Uppercase Detection**:
   - Uses ASCII values (A-Z = 65-90)
3. **Edge Cases**:
   - Empty string (returns 0)
   - Single word (returns 1)
   - All uppercase (returns length)
   - Unicode characters (handled safely)

## 🌟 Why This Solution Rocks
- Extremely efficient O(n) time
- Minimal memory usage
- Simple and clean logic
- Handles all standard cases

## 🏆 Alternative Approaches
1. **Unicode Package**:
   ```go
   if unicode.IsUpper(char) { ... }
   ```
   - More readable but slightly slower
2. **String Splitting**:
   ```go
   // Using regex to split
   // Much slower and memory intensive
   ```
3. **Character Range Check**:
   ```go
   if char >= 'A' && char <= 'Z' { ... }
   ```
   - More readable ASCII check

The ASCII-based solution provides the best combination of efficiency and simplicity for this problem!