# 🔢 Beautiful Triplets

## 💡 Problem Summary

Given a sequence of integers `arr` and a common difference `d`, count the number of beautiful triplets `(i, j, k)` where:
- `i < j < k`
- `arr[j] - arr[i] = arr[k] - arr[j] = d`

A triplet `(arr[i], arr[j], arr[k])` is called "beautiful" if these conditions are satisfied.

---

## 💭 Intuition

The key insight is that for any element `val` in the array, we can check if `val + d` and `val + 2d` also exist in the array. If they do, then `(val, val + d, val + 2d)` forms a beautiful triplet.

---

## 🚀 Approach

1. **Store Elements**: Use a hash map to store all elements of the array for O(1) lookups.
2. **Check Triplets**: For each element `val` in the array, check if `val + d` and `val + 2d` exist in the map.
3. **Count Valid Triplets**: If both exist, increment the count of beautiful triplets.

---

## �‍💻 Code

```go
func beautifulTriplets(d int32, arr []int32) int32 {
    count := int32(0)
    elemMap := make(map[int32]bool)
    
    // Store all elements in a map for quick lookup
    for _, val := range arr {
        elemMap[val] = true
    }
    
    // Check for beautiful triplets
    for _, val := range arr {
        if elemMap[val+d] && elemMap[val+2*d] {
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
d = 3
arr = [1, 2, 4, 5, 7, 8, 10]
```

### Execution:

1. **Store Elements**:
   - `elemMap = {1: true, 2: true, 4: true, 5: true, 7: true, 8: true, 10: true}`

2. **Check Triplets**:
   - For `1`: Check `1 + 3 = 4` and `1 + 6 = 7` → Both exist ✅ (Triplet: `[1, 4, 7]`)
   - For `2`: Check `2 + 3 = 5` and `2 + 6 = 8` → Both exist ✅ (Triplet: `[2, 5, 8]`)
   - For `4`: Check `4 + 3 = 7` and `4 + 6 = 10` → Both exist ✅ (Triplet: `[4, 7, 10]`)
   - For `5`: Check `5 + 3 = 8` and `5 + 6 = 11` → `11` does not exist ❌
   - For `7`: Check `7 + 3 = 10` and `7 + 6 = 13` → `13` does not exist ❌
   - For `8` and `10`: No further triplets possible.

✅ **Total Beautiful Triplets**: `3` (`[1, 4, 7]`, `[2, 5, 8]`, `[4, 7, 10]`)

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** O(N), where N is the length of the array (we traverse the array twice: once to populate the map and once to check triplets).
* **Space Complexity:** O(N), for storing elements in the hash map.

---

## 📘 Summary

* Uses a hash map for efficient O(1) lookups.
* Checks for the existence of `val + d` and `val + 2d` for each element.
* Efficient and optimal for large input sizes.