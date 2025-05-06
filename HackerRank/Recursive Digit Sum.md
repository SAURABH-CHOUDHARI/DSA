# 🔢 Super Digit - Optimal Solution

## 🎯 Problem Description
Calculate the super digit of a number created by concatenating a string `n` `k` times. The super digit is found by recursively summing the digits until a single digit remains.

## 🧠 Solution Approach
This solution uses:
1. **Digit sum optimization** to avoid actual concatenation
2. **Recursive computation** of digital root
3. **Mathematical insight** about digit sums
4. **Efficient computation** without string manipulation

## 🚀 Optimal Implementation
```go
func superDigit(n string, k int32) int32 {
    sum := int64(0)
    for _, digit := range n {
        sum += int64(digit - '0')
    }
    return computeSuperDigit(sum * int64(k))
}

func computeSuperDigit(num int64) int32 {
    if num < 10 {
        return int32(num)
    }
    
    var newSum int64 = 0
    for num > 0 {
        newSum += num % 10
        num /= 10
    }
    
    return computeSuperDigit(newSum)
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(log N)
  - Each recursion reduces the number by a factor of 10
  - Initial sum is O(len(n))
- **Space Complexity**: O(log N)
  - Recursion depth proportional to number of digits
  - No additional storage beyond stack

## 📊 Example Walkthrough
**Input:**
```go
n = "9875", k = 4
```

**Execution:**
1. Sum digits of "9875": 9+8+7+5 = 29
2. Multiply by k: 29 × 4 = 116
3. Recursive super digit:
   - 116 → 1+1+6 = 8
4. Returns 8

**Output:** `8`

## 💡 Key Insights
1. **Concatenation Optimization**:
   - Sum digits once then multiply by k
2. **Digital Root Property**:
   - Equivalent to num % 9 (except when result is 0)
3. **Efficiency**:
   - Avoids creating large concatenated string
   - Mathematical approach faster than string operations

## 🌟 Why This Solution Rocks
- Optimal O(log N) time complexity
- Memory efficient (no large string creation)
- Clean recursive implementation
- Handles all edge cases:
  - Single digit inputs
  - Large k values
  - Repeated digits
  - Zero values

## 🏆 Alternative Approaches
1. **Actual Concatenation**:
   ```go
   // Create full string then compute
   // O(k·len(n)) time - impractical for large k
   ```
2. **Mathematical Modulo**:
   ```go
   // Use digital root formula (num % 9)
   // Requires special handling for multiples of 9
   ```

The recursive digit sum solution provides an efficient and robust way to compute super digits!