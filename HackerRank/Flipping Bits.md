# 🔄 Flipping Bits - Optimal Solution

## 🎯 Problem Description
Given a 32-bit unsigned integer, flip all its bits (convert 0's to 1's and 1's to 0's) and return the resulting unsigned integer.

## 🧠 Solution Approach
This solution uses:
1. **Bitwise XOR operation** for efficient bit flipping
2. **Magic number** 4294967295 (2³² - 1) representing 32 bits of 1's
3. **Single operation** for maximum efficiency
4. **Mathematical insight** about binary complement

## 🚀 Optimal Implementation
```go
func flippingBits(n int64) int64 {
    return n ^ 4294967295
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(1)
  - Single bitwise operation
  - Constant time regardless of input
- **Space Complexity**: O(1)
  - Uses no additional storage
  - Operates directly on input

## 📊 Example Walkthrough
**Input:**
```go
n = 9 (binary: 00000000000000000000000000001001)
```

**Execution:
1. XOR with 4294967295 (binary: 11111111111111111111111111111111)
2. Result: 11111111111111111111111111110110
3. Decimal value: 4294967286

**Output:** `4294967286`

## 💡 Key Insights
1. **Bitwise Efficiency**:
   - XOR with all 1's flips every bit
2. **32-bit Handling**:
   - Magic number represents maximum 32-bit unsigned value
3. **Performance**:
   - Faster than manual bit manipulation
   - More efficient than string conversion

## 🌟 Why This Solution Rocks
- Extremely efficient O(1) operation
- Simplest possible implementation
- No type conversions needed
- Handles all edge cases:
  - Zero input (returns 4294967295)
  - Maximum input (returns 0)
  - All bits set cases
  - Arbitrary 32-bit values

## 🏆 Alternative Approaches
1. **Bit-by-Bit Flip**:
   ```go
   // Manually flip each bit in loop
   // O(32) time - less efficient
   ```
2. **Subtraction Method**:
   ```go
   // Use (2³² - 1) - n
   // Same complexity but less intuitive
   ```

The XOR solution provides the most elegant and efficient way to flip bits in a 32-bit integer!