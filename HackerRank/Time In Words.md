# 🕒 Time in Words - Optimal Solution

## 🎯 Problem Description
Convert a given time in hours (h) and minutes (m) into its English word representation following these rules:
- 0 minutes → "o' clock"
- 1-30 minutes → "past" the current hour
- 31-59 minutes → "to" the next hour
- Special cases for 15, 30, and 45 minutes

## 🧠 Solution Approach
This solution features:
1. **Number-to-word mapping** for all required values (0-29)
2. **Conditional logic** for special time cases
3. **Modular arithmetic** for hour wrapping (12 → 1)
4. **String concatenation** for building the output

## 🚀 Clean Implementation
```go
func timeInWords(h int32, m int32) string {
    numbers := []string{
        "zero", "one", "two", "three", "four", 
        "five", "six", "seven", "eight", "nine", 
        "ten", "eleven", "twelve", "thirteen", "fourteen", 
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", 
        "twenty", "twenty one", "twenty two", "twenty three", "twenty four", 
        "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine",
    }
    
    switch {
    case m == 0:
        return numbers[h] + " o' clock"
    case m == 1:
        return "one minute past " + numbers[h]
    case m == 15:
        return "quarter past " + numbers[h]
    case m == 30:
        return "half past " + numbers[h]
    case m == 45:
        return "quarter to " + numbers[(h%12)+1]
    case m == 59:
        return "one minute to " + numbers[(h%12)+1]
    case m < 30:
        return numbers[m] + " minutes past " + numbers[h]
    case m > 30:
        return numbers[60-m] + " minutes to " + numbers[(h%12)+1]
    }
    return ""
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(1)
  - Fixed number of operations regardless of input
- **Space Complexity**: O(1)
  - Constant space for the numbers array
  - Output string size bounded by maximum time phrase length

## 📊 Example Walkthroughs
**Example 1: 5:00**
- Matches `m == 0` case
- Output: "five o' clock"

**Example 2: 5:15**
- Matches `m == 15` case
- Output: "quarter past five"

**Example 3: 5:30**
- Matches `m == 30` case
- Output: "half past five"

**Example 4: 5:47**
- Matches `m > 30` case
- Calculation: 60-47 = 13 → "thirteen minutes to six"

**Example 5: 12:59**
- Matches `m == 59` case
- Note: (12%12)+1 = 1 → "one minute to one"

## 💡 Key Insights
1. **Number Mapping**:
   - Pre-defined array handles all number-to-word conversions
2. **Special Cases**:
   - Quarter, half, and exact hour have dedicated outputs
3. **Time Direction**:
   - Before 30 minutes uses "past"
   - After 30 minutes uses "to"
4. **Hour Wrapping**:
   - Modular arithmetic handles 12 → 1 transition

## 🌟 Advantages
- Clear and readable implementation
- Efficient constant-time operation
- Comprehensive handling of all edge cases
- Easy to modify for different language requirements

## 🔄 Alternative Approaches
1. **Map Instead of Array**:
   ```go
   // Could use map[int32]string for number mapping
   // Slightly more verbose but might be clearer
   ```
2. **Separate Functions**:
   ```go
   // Could break into helper functions for past/to cases
   // Might improve readability for complex scenarios
   ```

The solution provides an optimal combination of efficiency and clarity for time conversion to words!