# 🔢 Repeated String

## 💡 Problem Summary

Given a string `s` consisting of lowercase English letters and an integer `n`, determine how many times the letter `'a'` appears in the first `n` characters of an infinitely repeated version of `s`.

### Example
- `s = "abcac"`, `n = 10` → The repeated string would be `"abcacabcaca"` (first 10 chars)
- Count of `'a'`: 4

---

## 💭 Intuition

The key insight is that the infinitely repeated string follows a pattern:
1. The string `s` repeats completely `totalReps = n / len(s)` times
2. There are `remChars = n % len(s)` remaining characters from a partial repetition
3. Count `'a'`s in one full repetition of `s` and multiply by `totalReps`
4. Count `'a'`s in the first `remChars` characters of `s`
5. Sum both counts to get the total

---

## 🚀 Approach

1. **Count 'a's in original string**: Calculate how many `'a'`s are in one full repetition of `s`
2. **Calculate full repetitions**: Determine how many complete times `s` fits into `n` characters (`totalReps`)
3. **Count remaining 'a's**: Count `'a'`s in the partial repetition at the end (`remChars`)
4. **Compute total**: Multiply full repetition count by `'a'`s per repetition, then add remaining `'a'`s

---

## 🧑‍💻 Code

```go
func repeatedString(s string, n int64) int64 {
    count := int64(0)
    // Count 'a's in original string
    for _, char := range s {
        if char == 'a' {
            count++
        }
    }
    
    // Calculate full repetitions and remaining characters
    totalReps := n / int64(len(s))
    remChars := n % int64(len(s))
    
    // Count 'a's in remaining characters
    remAs := int64(0)
    for i := 0; i < int(remChars); i++ {
        if s[i] == 'a' {
            remAs++
        }
    }
    
    // Calculate total 'a's
    totalCount := totalReps*count + remAs
    return totalCount
}
```

---

## 🔍 Dry Run

### Input:
```
s = "aba"
n = 10
```

### Execution:
1. **Count 'a's in "aba"**: 2
2. **Calculate repetitions**:
   - Full repetitions: 10 / 3 = 3
   - Remaining chars: 10 % 3 = 1
3. **Count 'a's in remaining**:
   - First character of "aba" is 'a' → 1
4. **Total count**:
   - (3 full reps × 2 'a's) + 1 remaining 'a' = 7

✅ **Result**: 7 (The first 10 chars would be "abaabaabaa" containing 7 'a's)

---

## ⏱️ Time & Space Complexity

* **Time Complexity**: O(len(s))
  - We traverse the string twice: once to count all `'a'`s and once for the partial repetition
* **Space Complexity**: O(1)
  - Uses constant extra space for counters

---

## 📘 Summary

* Efficient solution that avoids constructing the full repeated string
* Uses mathematical division/modulo to determine repetition pattern
* Optimal for large `n` values (works even when n is 10¹²)
* Counts `'a'`s in one pattern and scales it mathematically