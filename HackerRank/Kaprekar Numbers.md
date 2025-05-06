# 🔢 Kaprekar Numbers - Optimal Solution

## 🎯 Problem Description
Identify all Kaprekar numbers in a given range [p, q]. A Kaprekar number is a number whose square can be split into two parts that add up to the original number (e.g., 45 → 45²=2025 → 20+25=45).

## 🧠 Solution Approach
This solution uses:
1. **Range iteration** to check each number
2. **Square calculation** with 64-bit precision
3. **String manipulation** to split the square
4. **Validation** of Kaprekar property
5. **Output formatting** for results

## 🚀 Optimal Implementation
```go
func kaprekarNumbers(p int32, q int32) {
    found := false

    for i := p; i <= q; i++ {
        sq := int64(i) * int64(i)
        strSq := strconv.FormatInt(sq, 10)
        strI := strconv.Itoa(int(i))
        d := len(strI)

        left := "0"
        right := strSq
        if len(strSq) > d {
            left = strSq[:len(strSq)-d]
            right = strSq[len(strSq)-d:]
        }

        lVal, _ := strconv.ParseInt(left, 10, 64)
        rVal, _ := strconv.ParseInt(right, 10, 64)

        if lVal + rVal == int64(i) {
            fmt.Printf("%d ", i)
            found = true
        }
    }

    if !found {
        fmt.Println("INVALID RANGE")
    } else {
        fmt.Println()
    }
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n)
  - n = q - p + 1 (numbers in range)
  - Each number processed exactly once
- **Space Complexity**: O(1)
  - Uses constant extra space
  - String operations use temporary storage

## 📊 Example Walkthrough
**Input:**
```go
p = 1, q = 100
```

**Execution:**
1. Checks numbers 1 through 100:
   - 1 → 1 → 0 + 1 = 1 (valid)
   - 9 → 81 → 8 + 1 = 9 (valid)
   - 45 → 2025 → 20 + 25 = 45 (valid)
   - 55 → 3025 → 30 + 25 = 55 (valid)
   - 99 → 9801 → 98 + 01 = 99 (valid)
2. Outputs valid Kaprekar numbers

**Output:** `1 9 45 55 99`

## 💡 Key Insights
1. **Kaprekar Property**:
   - Right part must have exactly d digits
   - Left part takes remaining digits
2. **Edge Cases**:
   - 1 is always valid
   - Numbers with squared digits ≤ d need left=0
3. **Efficient Checking**:
   - String manipulation simplifies splitting
   - Early output of valid numbers

## 🌟 Why This Solution Rocks
- Clear and straightforward implementation
- Handles large numbers with 64-bit integers
- Properly formats output
- Efficiently checks the range
- Handles all edge cases:
  - Single-number ranges
  - No Kaprekar numbers in range
  - Boundary values
  - Large ranges

## 🏆 Alternative Approaches
1. **Mathematical Splitting**:
   ```go
   // Use division/modulo instead of string conversion
   // More efficient but harder to read
   ```
2. **Precomputed Lookup**:
   ```go
   // Use known Kaprekar numbers
   // Limited to predefined ranges
   ```

The string manipulation solution provides a clear and effective way to identify Kaprekar numbers!