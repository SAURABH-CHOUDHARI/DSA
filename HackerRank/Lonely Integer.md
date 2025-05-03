# 🔢 Lonely Integer

## 💡 Problem Summary

Given an array of integers where all elements except one occur twice, find the unique element (the "lonely integer").

### Example
- Input: `[1, 2, 3, 4, 3, 2, 1]`
- Output: `4` (the only number appearing once)

---

## 🚀 Optimal Solution (Bitwise XOR)

### 💭 Intuition
The XOR operation has these properties:
1. `x ^ x = 0` (cancels duplicates)
2. `x ^ 0 = x` (preserves unique values)
3. Commutative and associative

By XOR-ing all numbers, paired numbers cancel out, leaving only the unique number.

### 🧑‍💻 Code
```go
func lonelyinteger(a []int32) int32 {
    var result int32 = 0
    for _, num := range a {
        result ^= num
    }
    return result
}
```

### ⏱️ Complexity
- **Time**: O(n) - single pass through array
- **Space**: O(1) - constant extra space

---

## 🐢 Brute Force Solution

### 💭 Intuition
For each element, check if it appears elsewhere in the array. The first element with no duplicate is our answer.

### 🧑‍💻 Code
```go
func lonelyintegerBrute(a []int32) int32 {
    for i, num := range a {
        found := false
        for j, other := range a {
            if i != j && num == other {
                found = true
                break
            }
        }
        if !found {
            return num
        }
    }
    return -1 // should never reach here per problem constraints
}
```

### ⏱️ Complexity
- **Time**: O(n²) - nested loops
- **Space**: O(1) - constant extra space

---

## 🔍 Key Differences

| Aspect        | XOR Solution | Brute Force |
|--------------|-------------|-------------|
| Time Complexity | O(n)       | O(n²)       |
| Space Complexity | O(1)      | O(1)        |
| Approach      | Mathematical | Nested search |
| Best For      | Large inputs | Small inputs |

---

## 🏆 Why XOR Wins
1. **Efficiency**: Handles large arrays (n=100+) instantly
2. **Elegance**: Simple, clever use of bitwise operations
3. **Performance**: No unnecessary comparisons

The brute force solution is included to demonstrate how much optimization matters - the XOR solution is 100x faster for n=100!