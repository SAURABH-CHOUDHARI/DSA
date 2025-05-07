# 📝 Grading Students - Optimal Solution

## 🎯 Problem Description
Implement a grading policy where:
- Grades below 38 remain unchanged
- Grades are rounded up to the next multiple of 5 if the difference is less than 3

## 🧠 Solution Approach
This solution uses:
1. **In-place modification** of grades
2. **Next multiple calculation** using integer arithmetic
3. **Threshold check** (difference < 3)
4. **Efficient single pass** through grades

## 🚀 Optimal Implementation
```go
func gradingStudents(grades []int32) []int32 {
    for i := 0; i < len(grades); i++ {
        if grades[i] < 38 {
            continue 
        }

        nextMultiple := ((grades[i] / 5) + 1) * 5
        if nextMultiple - grades[i] < 3 {
            grades[i] = nextMultiple
        }
    }
    return grades
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - Single pass through all grades
  - n = number of students
- **Space Complexity**: O(1)
  - Modifies input array in-place
  - Uses constant extra space

## 📊 Example Walkthrough
**Input:**
```go
[73, 67, 38, 33]
```

**Execution:**
1. 73 → next multiple 75 (difference 2) → round to 75
2. 67 → next multiple 70 (difference 3) → keep 67
3. 38 → next multiple 40 (difference 2) → round to 40
4. 33 → below 38 → keep 33

**Output:** `[75, 67, 40, 33]`

## 💡 Key Insights
1. **Rounding Logic**:
   - Only round if within 2 points of next multiple
2. **Efficient Calculation**:
   - `(grade/5 + 1)*5` finds next multiple
3. **Edge Handling**:
   - Explicit check for failing grades (<38)
4. **In-Place Modification**:
   - Saves memory by reusing input array

## 🌟 Why This Solution Rocks
- Optimal O(n) time complexity
- Minimal memory usage
- Clean and readable implementation
- Handles all edge cases:
  - Borderline grades (37, 38)
  - Exact multiples (75, 80)
  - Large grade values
  - Empty input

## 🏆 Alternative Approaches
1. **Separate Output Array**:
   ```go
   // Create new array for results
   // Uses O(n) extra space unnecessarily
   ```
2. **Modulo Operation**:
   ```go
   // Use grade%5 to find difference
   // Similar performance, slightly less readable
   ```

The in-place modification solution provides an efficient and clean way to implement the grading policy!