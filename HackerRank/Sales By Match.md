# 🧦 Sock Merchant

## 📝 Problem

You are given an array of integers representing the colors of socks. Every sock has a color represented by an integer. You need to find how many pairs of socks with matching colors there are.

---

## 💡 Intuition

A pair is made of two socks with the same color. There are two common approaches to solve this problem efficiently:

1. **Sorting-based counting**
2. **HashSet-based tracking**

Both methods aim to group socks with the same color and count the pairs.

---

## 🔍 Approach 1: Sorting and Pair Skipping

### ✅ Steps:

1. Sort the array.
2. Traverse the array and check if the current element matches the next one.
3. If they match, it's a pair — increment the count and skip the next index.

### 🧑‍💻 Code

```go
func sockMerchant(n int32, ar []int32) int32 {
    count := 0
    slices.Sort(ar)
    for i:=0 ; i < (int(n) - 1) ; i++ {
        if ar[i] == ar[i+1] {
            count++
            i++
        }
    }
    return int32(count)
}
```

### 🧠 Dry Run

**Input:** ar = \[1, 2, 1, 2, 1, 3, 2]
**Sorted:** \[1, 1, 1, 2, 2, 2, 3]
**Output:** 2 (pairs: \[1,1], \[2,2])

### ⏱️ Time & Space Complexity

* **Time:** O(n log n) due to sorting
* **Space:** O(1) if in-place sort

---

## 🔍 Approach 2: HashSet Tracking

### ✅ Steps:

1. Use a Set to track unpaired socks.
2. Iterate through the array:

   * If the color is already in the set, remove it (a pair is formed).
   * Else, add it to the set.
3. Count how many times a color was removed — that’s the number of pairs.

### 🧑‍💻 Code

```go
func sockMerchant(n int32, ar []int32) int32 {
    count := 0
    set := make(map[int]bool)
    for i:=0 ; i < int(n) ; i++ {
        cur := ar[i]
        if set[int(cur)] {
            delete(set, int(cur))
            count++
            continue
        }
        set[int(cur)] = true
    }
    return int32(count)
}
```

### 🧠 Dry Run

**Input:** ar = \[1, 2, 1, 2, 1, 3, 2]
**Output:** 2 (pairs: \[1,1], \[2,2])

### ⏱️ Time & Space Complexity

* **Time:** O(n)
* **Space:** O(n) for the hash set

---

## 📘 Summary

| Approach | Time Complexity | Space Complexity | Pros              | Cons               |
| -------- | --------------- | ---------------- | ----------------- | ------------------ |
| Sorting  | O(n log n)      | O(1)             | Easy to implement | Slower due to sort |
| HashSet  | O(n)            | O(n)             | Faster            | Uses extra space   |

Both methods are valid — choose based on context and constraints. ✅
