# 🔢 Divisible Sum Pairs

## 💡 Problem Summary

Given an array of integers and an integer `k`, count the number of pairs `(i, j)` where `i < j` and the sum of `ar[i] + ar[j]` is divisible by `k`.

---

## 💭 Intuition

The key insight is to use the **modulo** operation to find complementary remainders. If one number gives a remainder `r` when divided by `k`, then we need another number with a remainder `(k - r) % k` to make their sum divisible by `k`.

---

## 🚀 Approach

* Use a **hash map** to keep track of how many numbers we've seen so far with each remainder modulo `k`.
* For every number `num`, compute `rem = num % k`, and compute the complement remainder as `partner = (k - rem) % k`.
* Add the count of `partner` remainders seen so far to the final count.
* Update the map to include the current `rem`.

---

## 🧑‍💻 Code

```go
func divisibleSumPairs(n int32, k int32, ar []int32) int32 {
    count := int32(0)
    myMap := make(map[int32]int32)

    for i := 0; i < int(n); i++ {
        rem := ar[i] % k
        partner := (k - rem) % k
        count += myMap[partner]
        myMap[rem]++
    }

    return count
}
```

---

## 🔍 Dry Run

### Input:

```
ar = [1, 3, 2, 6, 1, 2], k = 3
```

### Execution:

* Remainders seen:

  * 1 → needs (3-1)%3 = 2 → count of 2 so far = 0
  * 3 → rem = 0 → needs 0 → count of 0 so far = 0
  * 2 → needs 1 → count of 1 so far = 1 ✅
  * 6 → rem = 0 → needs 0 → count of 0 so far = 1 ✅
  * 1 → needs 2 → count of 2 so far = 1 ✅
  * 2 → needs 1 → count of 1 so far = 2 ✅

✅ Total valid pairs = 5

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** O(N), where N is the length of the array.
* **Space Complexity:** O(K), for storing remainders in the map.

---

## 📘 Summary

* Uses the modulo trick to find complement pairs.
* Significantly faster than brute force O(N^2) approach.
* Efficient and clean for large input sizes.
