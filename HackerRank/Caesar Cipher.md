# 🔠 Caesar Cipher - Optimal Solution

## 🎯 Problem Description
Implement the Caesar cipher that shifts each letter in a string by a fixed number (`k`) down the alphabet while leaving non-alphabetic characters unchanged. The cipher should wrap around if it reaches the end of the alphabet.

## 🧠 Solution Approach
This solution uses:
1. **Modulo operation** to handle large shift values (k > 26)
2. **ASCII code manipulation** for efficient character shifting
3. **Case preservation** for uppercase and lowercase letters
4. **Non-alphabetic character handling** to leave them unchanged

## 🚀 Optimal Implementation
```javascript
function caesarCipher(s, k) {
    // Early return for no shift needed
    if (s.length === k || k === 0) {
        return s;
    }
    
    // Normalize the shift amount
    k = k % 26;
    
    let result = '';
    
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        const code = s.charCodeAt(i);
        
        // Handle uppercase letters (A-Z)
        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(((code - 65 + k) % 26) + 65);
        }
        // Handle lowercase letters (a-z)
        else if (code >= 97 && code <= 122) {
            result += String.fromCharCode(((code - 97 + k) % 26) + 97);
        }
        // Leave other characters unchanged
        else {
            result += char;
        }
    }
    
    return result;
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Single pass through the string
  - Constant time operations per character
- **Space Complexity**: O(n)
  - Builds a new result string of same length as input

## 📊 Example Walkthrough
**Input:**
```javascript
caesarCipher("middle-Outz", 2)
```

**Execution:**
1. Normalize shift: k = 2 (already < 26)
2. Process each character:
   - 'm' → 'o' (109 → 111)
   - 'i' → 'k' (105 → 107)
   - 'd' → 'f' (100 → 102)
   - '-' → '-' (unchanged)
   - 'O' → 'Q' (79 → 81)
   - 'u' → 'w' (117 → 119)
   - 't' → 'v' (116 → 118)
   - 'z' → 'b' (122 → 98) *wraps around*
3. Final result: "okffng-Qwvb"

**Output:** `"okffng-Qwvb"`

## 💡 Key Insights
1. **Alphabet Wrapping**:
   - Achieved using modulo 26 operation
   - Handles shifts beyond 'z' or 'Z' correctly
2. **Case Sensitivity**:
   - Maintains original case of letters
3. **Efficiency**:
   - Early return for edge cases
   - Minimal operations per character
4. **Edge Cases**:
   - Empty string
   - Very large k values (k > 26)
   - Strings with no alphabetic characters

## 🌟 Why This Solution Rocks
- Clear and concise implementation
- Handles all edge cases gracefully
- Optimal time and space complexity
- Preserves original string properties (case, non-alphabetic chars)

## 🏆 Alternative Approaches
1. **Alphabet Array Lookup**:
   ```javascript
   // Use array of letters for mapping
   // More readable but slightly slower
   ```
2. **Double Pass**:
   ```javascript
   // First normalize k, then process
   // Unnecessary for this problem
   ```
3. **Regex Replacement**:
   ```javascript
   // Use regular expressions with callback
   // More complex with no performance benefit
   ```

The ASCII-based solution provides the best combination of efficiency and clarity for implementing the Caesar cipher!