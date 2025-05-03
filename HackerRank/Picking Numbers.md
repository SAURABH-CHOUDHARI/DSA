# 🔢 Picking Numbers

## 💡 Problem Summary

Given an array of integers, find the length of the longest subarray where the absolute difference between any two elements is at most 1. In other words, we need to find the largest subset of numbers where all numbers are either equal to each other or differ by exactly 1.

---

## 💭 Intuition

The key insight is that a valid subarray can contain:
1. Only one number repeated multiple times, OR
2. Two numbers that differ by exactly 1.

We can leverage frequency counting to efficiently determine the largest possible valid subarray.

---

## 🚀 Approach

1. **Count Frequencies**: Use a hash map to count how many times each number appears in the array.
2. **Check Adjacent Pairs**: For each unique number, consider the sum of its count and the count of the number that is exactly 1 greater (if it exists).
3. **Track Maximum**: Keep track of the maximum count found during this process.

---

## 🧑‍💻 Code

```go
func pickingNumbers(a []int32) int32 {
    freq := make(map[int32]int32)
    max := int32(0)
    
    // Count frequency of each number
    for _, num := range a {
        freq[num]++
    }
    
    // Find maximum valid subarray length
    for num := range freq {
        current := freq[num] + freq[num+1]
        if current > max {
            max = current
        }
    }
    
    return max
}
```

---

## 🔍 Dry Run

### Input:

```
a = [4, 6, 5, 3, 3, 1]
```

### Execution:

1. **Frequency Counting**:
   - `1`: 1
   - `3`: 2
   - `4`: 1
   - `5`: 1
   - `6`: 1

2. **Check Adjacent Pairs**:
   - For `1`: `freq[1] + freq[2]` = 1 + 0 = 1
   - For `3`: `freq[3] + freq[4]` = 2 + 1 = 3
   - For `4`: `freq[4] + freq[5]` = 1 + 1 = 2
   - For `5`: `freq[5] + freq[6]` = 1 + 1 = 2
   - For `6`: `freq[6] + freq[7]` = 1 + 0 = 1

3. **Maximum Found**:
   - The maximum value is `3` (from the pair `3` and `4`)

✅ **Result**: `3` (The longest valid subarrays are `[3, 3, 4]` or `[5, 5, 6]`)

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** O(N), where N is the length of the array (we traverse the array once to count frequencies and once more to check adjacent pairs).
* **Space Complexity:** O(N), for storing frequencies in the map (worst case if all elements are unique).

---

## 📘 Summary

* Efficiently counts element frequencies using a hash map.
* Checks all possible adjacent number pairs to find the maximum valid subarray length.
* Works in linear time, making it suitable for large input sizes.