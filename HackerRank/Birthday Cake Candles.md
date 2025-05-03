# 🎂 Birthday Cake Candles

## 💡 Problem Statement

You are in charge of the cake for a child's birthday. The child has only one requirement: the tallest candles are to be blown out first. Given the heights of each candle, determine how many of the tallest candles are on the cake.

---

## 🚀 Approach & Intuition

We iterate through the list of candle heights, and:

* Keep track of the **tallest candle height** seen so far.
* Count how many times this tallest height occurs.

If we find a taller candle, we update the tallest height and reset the count to 1. If we find a candle of the same height, we increment the count.

---

## 🔢 Steps

1. Initialize `largest` as 0 and `count` as 0.
2. Traverse the array:

   * If the current candle is taller than `largest`, update `largest` and reset `count` to 1.
   * If the current candle equals `largest`, increment `count`.
3. Return `count`.

---

## 💻 Code (Go)

```go
func birthdayCakeCandles(candles []int32) int32 {
    largest := 0
    count := 0
    
    for i := 0; i < len(candles); i++ {
        if candles[i] > int32(largest) {
            largest = int(candles[i])
            count = 1
        } else if candles[i] == int32(largest) {
            count++
        }
    }    
    return int32(count)
}
```

---

## 🔍 Dry Run

### Input

```go
candles = [3, 2, 1, 3]
```

### Execution

* `largest = 0`, `count = 0`
* Index 0: `3 > 0` → `largest = 3`, `count = 1`
* Index 1: `2 < 3` → skip
* Index 2: `1 < 3` → skip
* Index 3: `3 == 3` → `count = 2`

**Output: 2**

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** O(N) where N is the number of candles.
* **Space Complexity:** O(1) constant extra space.

---

## 📅 Summary

* Simple linear scan solution.
* Efficient in both time and space.
* Ensures the child gets to blow out all the tallest candles!

🎈 Perfect for celebratory problems!
