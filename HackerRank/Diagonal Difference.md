# 🔺 Diagonal Difference

## 💡 Problem Summary

Given a square matrix, calculate the absolute difference between the sums of its primary and secondary diagonals.

---

## 💭 Intuition

In a square matrix:

* The primary diagonal goes from the top-left to the bottom-right (indices `[i][i]`).
* The secondary diagonal goes from the top-right to the bottom-left (indices `[i][n-1-i]`).

Sum both diagonals, and return the absolute difference.

---

## 🚀 Approach

1. Initialize two sums: `firstDiagonal` and `secondDiagonal`.
2. Loop through the matrix:

   * Add the primary diagonal element `arr[i][i]` to `firstDiagonal`.
   * Add the secondary diagonal element `arr[i][n - 1 - i]` to `secondDiagonal`.
3. Return the absolute difference.

---

## 🧑‍💻 Code

```go
func diagonalDifference(arr [][]int32) int32 {
    n := len(arr)
    firstDiagonal  := int32(0)
    secondDiagonal  := int32(0)

    for i := 0; i < n; i++ {
        firstDiagonal += arr[i][i]
        secondDiagonal += arr[i][n-1-i]
    }

    diff := firstDiagonal - secondDiagonal
    if diff < 0 {
        diff = -diff
    }

    return diff
}
```

---

## 🔍 Dry Run

### Input

```
[ [11, 2, 4],
  [ 4, 5, 6],
  [10, 8, -12] ]
```

### Execution

* Primary Diagonal = 11 + 5 + (-12) = 4
* Secondary Diagonal = 4 + 5 + 10 = 19
* Absolute Difference = |4 - 19| = 15 ✅

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** O(N), where N is the number of rows (or columns).
* **Space Complexity:** O(1), uses constant space.

---

## 📘 Summary

* Traverse matrix once to sum diagonals.
* Return absolute difference.
* Simple and efficient!
