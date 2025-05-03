# 📏 Minimum Distances

## 💡 Problem Summary

Given an array of integers, find the minimum distance between any two equal elements in the array. If no such elements exist, return -1.

---

## 💭 Intuition

The idea is to track the index of each unique value using a hash map. When we encounter a duplicate, we calculate the distance between the current and previous index and update the minimum if necessary.

---

## 🚀 Approach

* Create a hash map to store the last seen index of each value.
* Traverse the array:

  * If the value has been seen before, calculate the distance between current and stored index.
  * Update the minimum distance accordingly.
* Return -1 if no such pair exists.

---

## 🧑‍💻 Code

```go
func minimumDistances(a []int32) int32 {
    min := int32(len(a))
    myMap := make(map[int32]int32)

    for i := 0; i < len(a); i++ {
        prevIndex, exists := myMap[a[i]]
        if exists {
            distance := int32(i) - prevIndex
            if distance < min {
                min = distance
            }
        }
        myMap[a[i]] = int32(i)
    }

    if min == int32(len(a)) {
        return -1
    }

    return min
}
```

---

## 🔍 Dry Run

### Input:

```
a = [7, 1, 3, 4, 1, 7]
```

### Execution:

* 1 first appears at index 1, then again at index 4 → distance = 3 ✅
* 7 appears at index 0 and 5 → distance = 5 ❌
* Minimum distance = 3 ✅

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** O(N), where N is the length of the array.
* **Space Complexity:** O(N), for the hash map.

---

## 📘 Summary

* Hash map stores the last index of each element.
* For duplicates, calculate and track minimum distance.
* Return -1 if no duplicates found.
