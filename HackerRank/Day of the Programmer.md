# 📅 Day of the Programmer - Optimal Solution

## 🎯 Problem Description
Given a year (1700-2700), determine the date of the 256th day of the year according to the official Russian calendar during the transition year (1918) and both Julian (before 1918) and Gregorian (after 1918) calendar systems.

## 🧠 Solution Approach
This solution uses:
1. **Special case handling** for the transition year 1918
2. **Leap year calculation** with different rules for Julian and Gregorian calendars
3. **Conditional logic** to determine the correct date format
4. **Efficient computation** without date libraries

## 🚀 Optimal Implementation
```go
func dayOfProgrammer(year int32) string {
    if year == 1918 {
        return "26.09.1918" 
    }

    isLeap := false

    if year < 1918 {
        // Julian calendar leap year rule
        isLeap = year%4 == 0
    } else {
        // Gregorian calendar leap year rule
        isLeap = (year%400 == 0) || (year%4 == 0 && year%100 != 0)
    }

    if isLeap {
        return fmt.Sprintf("12.09.%d", year)
    }
    return fmt.Sprintf("13.09.%d", year)
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(1)
  - Fixed calculations regardless of input
  - No loops or iterations
- **Space Complexity**: O(1)
  - Uses only a few variables
  - No additional storage

## 📊 Example Walkthrough
**Input:**
```go
year = 2016
```

**Execution:**
1. Not 1918 (no special case)
2. Gregorian calendar rules apply (2016 % 4 == 0 and 2016 % 100 != 0)
3. Leap year → 256th day is September 12
4. Returns "12.09.2016"

**Output:** `"12.09.2016"`

## 💡 Key Insights
1. **Calendar Transition**:
   - 1918 had a unique 256th day due to calendar switch
2. **Leap Year Rules**:
   - Julian: divisible by 4
   - Gregorian: divisible by 400 OR (divisible by 4 and not by 100)
3. **Date Calculation**:
   - Leap years: September 12
   - Non-leap years: September 13
   - 1918: September 26 (13 days lost in transition)

## 🌟 Why This Solution Rocks
- Handles all calendar systems correctly
- Clear and concise implementation
- No external dependencies
- Efficient O(1) operations
- Handles all edge cases:
  - Transition year (1918)
  - Century years
  - Boundary years (1700, 2700)
  - Various leap year scenarios

## 🏆 Alternative Approaches
1. **Date Library Usage**:
   ```go
   // Use time package to calculate dates
   // More complex and potentially slower
   ```
2. **Precomputed Table**:
   ```go
   // Store leap years in lookup table
   // Wastes memory for this simple case
   ```

The calendar-aware solution provides the most efficient and reliable way to determine the Programmer's Day!