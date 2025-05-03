# 🧮 Simple Array Sum

## 💡 Problem Statement

You are given an array of integers. Your task is to return the sum of all the elements in the array.

---

## ✨ Intuition

The problem is very straightforward. You're given a list of integers and asked to find the total sum. A loop through the array, accumulating the sum, is the simplest and most efficient solution.

---

## 🛠️ Approach

1. Initialize a variable `sum` to 0.
2. Iterate over each element in the array.
3. Add each element to the `sum`.
4. After the loop ends, return the final value of `sum`.

---

## 🧑‍💻 Code

```go
func simpleArraySum(ar []int32) int32 {
    var sum int32 = 0 
    for i := 0; i < len(ar); i++ {
        sum += ar[i]
    }
    return sum
}
```

---

## 🔍 Dry Run

### Input:

```go
ar = [1, 2, 3, 4, 5]
```

### Execution:

* sum = 0
* sum += 1 → 1
* sum += 2 → 3
* sum += 3 → 6
* sum += 4 → 10
* sum += 5 → 15

### Output:

```
15
```

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** O(n), where `n` is the number of elements in the array.
* **Space Complexity:** O(1), only constant extra space is used.

---

## 📘 Summary

* This is a classic introductory problem to test understanding of array iteration.
* The code is simple, readable, and runs efficiently in linear time.


