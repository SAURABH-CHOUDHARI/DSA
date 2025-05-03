# 🧮 Mini-Max Sum

## 💡 Problem Summary

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Print the respective minimum and maximum values as a single line of two space-separated long integers.

---

## 💭 Intuition

To solve this, we need the sum of all elements and subtract the maximum element to get the minimum sum (excluding the largest), and subtract the minimum element to get the maximum sum (excluding the smallest).

---

## 🚀 Approach

1. Calculate the total sum of all the integers.
2. Find the smallest and largest element in the array.
3. Subtract the maximum element from the total to get the minimum sum.
4. Subtract the minimum element from the total to get the maximum sum.

---

## 🧑‍💻 Code

```go
func miniMaxSum(arr []int32) {
    if len(arr) == 0 {
        return
    }
    min, max := arr[0], arr[0]
    var totalSum int64 = 0

    for _, num := range arr {
        totalSum += int64(num)

        if num < min {
            min = num
        } else if num > max {
            max = num
        }
    }

    minSum := totalSum - int64(max)
    maxSum := totalSum - int64(min)

    fmt.Printf("%d %d", minSum, maxSum)
}
```

---

## 🔍 Dry Run

### Input:

```
arr = [1, 2, 3, 4, 5]
```

### Execution:

* Total sum = 15
* Min element = 1
* Max element = 5
* Min sum (excluding max) = 15 - 5 = 10
* Max sum (excluding min) = 15 - 1 = 14

✅ Output:

```
10 14
```

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** O(N), where N is the number of elements in the array.
* **Space Complexity:** O(1), only constant extra space is used.

---

## 📘 Summary

* Sum all elements.
* Subtract max for min sum.
* Subtract min for max sum.
* Very efficient and clean for fixed-size input like this.
