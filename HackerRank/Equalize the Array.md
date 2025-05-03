# 🔢 Equalize the Array

## 💡 Problem Summary

Given an array of integers, determine the **minimum number of deletions** required to make all remaining elements equal. The goal is to leave only elements that are all the same by deleting the fewest number of elements possible.

---

## 💭 Intuition

The key insight is that the optimal way to minimize deletions is to **keep the most frequent element(s)** in the array. The number of deletions required will be the total number of elements minus the frequency of the most common element.

---

## 🚀 Approach

1. **Count Frequencies**: Use a hash map to count how many times each element appears in the array.
2. **Find the Most Frequent Element**: Determine which element has the highest frequency.
3. **Compute Deletions**: The minimum deletions required is the total number of elements minus the frequency of the most common element.

---

## 🧑‍💻 Code

```go
func equalizeArray(arr []int32) int32 {
    freqMap := make(map[int32]int32)
    
    // Count frequencies of each element
    for _, num := range arr {
        freqMap[num]++
    }
    
    // Find the highest frequency
    mostFreq := int32(0)
    for _, freq := range freqMap {
        if freq > mostFreq {
            mostFreq = freq
        }
    }
    
    // Minimum deletions = total elements - most frequent count
    return int32(len(arr)) - mostFreq 
}
```

---

## 🔍 Dry Run

### Input:

```
arr = [3, 3, 2, 1, 3]
```

### Execution:

1. **Frequency Counting**:
   - `3` appears **3** times.
   - `2` appears **1** time.
   - `1` appears **1** time.
   
2. **Most Frequent Element**:
   - `3` has the highest frequency (`3`).

3. **Compute Deletions**:
   - Total elements = `5`.
   - Most frequent count = `3`.
   - Deletions needed = `5 - 3 = 2`.

✅ **Result**: `2` deletions (remove `2` and `1`).

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** O(N), where N is the length of the array (we traverse the array once to count frequencies and once to find the max frequency).
* **Space Complexity:** O(N), for storing frequencies in the map (worst case if all elements are unique).

---

## 📘 Summary

* Efficiently counts element frequencies using a hash map.
* The optimal solution keeps the most frequent element(s) and deletes the rest.
* Works in linear time, making it suitable for large input sizes.