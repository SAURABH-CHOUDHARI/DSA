# 📏 Designer PDF Viewer - Optimal Solution

## 🎯 Problem Description
Given:
- `h`: An array of 26 integers representing heights of each lowercase letter (a-z)
- `word`: A string to calculate its selection area in the PDF viewer

Calculate the highlighted area when selecting the word, where:
- Area = (number of letters) × (height of tallest letter)

## 🧠 Solution Approach
This solution uses:
1. **ASCII value conversion** to map letters to height array indices
2. **Single pass** through the word to find maximum height
3. **Simple multiplication** to calculate the area

## 🚀 Optimal Implementation
```go
func designerPdfViewer(h []int32, word string) int32 {
    maxH := int32(0)
    
    // Find maximum height in the word
    for _, char := range word {
        charHeight := h[int(char)-97] // Convert 'a'-'z' to 0-25
        if charHeight > maxH {
            maxH = charHeight
        }
    }
    
    return int32(len(word)) * maxH
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Single pass through the word (n = length of word)
- **Space Complexity**: O(1)
  - Uses constant extra space

## 📊 Example Walkthrough
**Input:**
```go
h = [1,3,1,3,1,4,1,3,2,5,5,5,5,1,1,5,5,1,5,2,5,5,5,5,5,5]
word = "abc"
```

**Execution:**
1. Convert letters to indices:
   - 'a' → 0 → height=1
   - 'b' → 1 → height=3
   - 'c' → 2 → height=1
2. Max height: 3
3. Area: 3 letters × 3 units = 9

**Output:** `9`

## 💡 Key Insights
1. **Letter-Height Mapping**:
   - ASCII conversion (`char-97`) efficiently maps a→0, b→1,... z→25
2. **Efficient Maximum Finding**:
   - Tracks tallest letter in single pass
3. **Edge Cases**:
   - Single-letter words
   - All letters same height
   - Tallest letter at start/end
   - Repeated letters

## 🌟 Why This Solution Rocks
- Extremely efficient O(n) time
- Minimal memory usage
- Clean ASCII conversion trick
- Handles all edge cases

## 🏆 Alternative Approaches
1. **Predefined Height Map**:
   ```go
   // Create map[rune]int32 first
   // More initialization but same complexity
   ```
2. **Unicode Conversion**:
   ```go
   // Use unicode.ToLower etc.
   // More robust but unnecessary for problem constraints
   ```

The ASCII-index solution provides the best combination of efficiency and simplicity for this problem!