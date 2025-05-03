# 🍫 Birthday Chocolate (Subarray Sum)

## 💡 Problem Summary

Given a list of integers representing squares of chocolate with integers on them, a birth day `d`, and a birth month `m`, find how many ways the chocolate can be divided into a contiguous segment of `m` squares that sum to `d`.

---

## 💭 Intuition

The task is to check every contiguous subarray of length `m` and count how many of those subarrays sum to exactly `d`.

---

## 🚀 Approach

* Use a **sliding window** of size `m`.
* For every valid window, calculate the sum.
* If the sum is equal to `d`, increment the count.

---

## 🧑‍💻 Code

```go
func birthday(s []int32, d int32, m int32) int32 {
    if len(s) < int(m) {
        return 0
    }
    count := int32(0)

    for i := 0; i <= len(s) - int(m); i++ {
        sum := int32(0)

        for j := 0; j < int(m); j++ {
            sum += s[i+j]
        }

        if sum == d {
            count++
        }
    }
    return count
}
```

---

## 🔍 Dry Run

### Input:

```
s = [1, 2, 1, 3, 2]
d = 3
m = 2
```

### Execution:

* Subarrays of length 2:

  * \[1, 2] → sum = 3 ✅
  * \[2, 1] → sum = 3 ✅
  * \[1, 3] → sum = 4 ❌
  * \[3, 2] → sum = 5 ❌

✅ Total valid ways = 2

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** O(N × M), where N is the size of array `s`, and M is the segment length.
* **Space Complexity:** O(1), constant extra space.

---

## 📘 Summary

* Brute-force check of every segment of size `m`.
* Efficient for small to medium input sizes.
* Can be optimized further using an actual sliding window for larger inputs.
