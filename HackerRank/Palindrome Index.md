# 🔄 Palindrome Index - Optimal Solution

## 🎯 Problem Description
Given a string, determine the index of a character that can be removed to make the string a palindrome. If the string is already a palindrome or no solution exists, return -1.

## 🧠 Solution Approach
This solution uses:
1. **Two-pointer technique** to check palindromes
2. **Early termination** when mismatch found
3. **Selective checking** of potential removal candidates
4. **Helper function** for palindrome verification

## 🚀 Optimal Implementation
```go
func palindromeIndex(s string) int32 {
    n := len(s)
    
    // Helper function to check if substring is palindrome
    isPalindrome := func(start, end int) bool {
        for i := start; i <= (start+end)/2; i++ {
            if s[i] != s[end-(i-start)] {
                return false
            }
        }
        return true
    }
    
    // Check if already palindrome
    if isPalindrome(0, n-1) {
        return -1
    }
    
    // Check for removable character
    for i := 0; i < n/2; i++ {
        if s[i] != s[n-1-i] {
            // Check removing left mismatch character
            if isPalindrome(i+1, n-1-i) {
                return int32(i)
            }
            
            // Check removing right mismatch character
            if isPalindrome(i, n-2-i) {
                return int32(n-1-i)
            }
            
            // No solution found
            return -1
        }
    }
    
    return -1
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Worst case: 3 passes through the string
  - Best case: Early termination if already palindrome
- **Space Complexity**: O(1)
  - Uses constant extra space

## 📊 Example Walkthrough
**Input:**
```go
"abca"
```

**Execution:**
1. Initial check finds mismatch at first/last characters ('a' vs 'a' OK, 'b' vs 'c' mismatch)
2. Check removing 'b' (substring "ca"): not palindrome
3. Check removing 'c' (substring "ba"): not palindrome
4. Return index of 'b' (1) since removing it makes "aca" palindrome

**Output:** `1`

## 💡 Key Insights
1. **Efficient Checking**:
   - Only checks potential removal candidates
   - Avoids full re-checking after removal
2. **Palindrome Verification**:
   - Helper function reduces code duplication
3. **Edge Cases**:
   - Already palindromic strings
   - No possible solution
   - Single character strings
   - Even/Odd length strings

## 🌟 Why This Solution Rocks
- Optimal O(n) time complexity
- Clean and modular design
- Handles all edge cases
- Early termination for efficiency

## 🏆 Alternative Approaches
1. **Brute Force**:
   ```go
   // Try removing each character and check
   // O(n²) time - too slow for large strings
   ```
2. **Recursive**:
   ```go
   // Recursively explore removal options
   // Exponential time - impractical
   ```

The two-pointer solution provides the most efficient way to solve this problem!