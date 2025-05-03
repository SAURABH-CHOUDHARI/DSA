# 🏞️ Counting Valleys

## 💡 Problem Summary

You are given the number of steps and a string representing the path taken during a hike. Each character in the path is either 'U' (uphill) or 'D' (downhill). A valley is defined as a sequence of steps starting below sea level and ending at sea level.

Your task is to determine how many valleys the hiker traversed.

---

## 💭 Intuition

* Keep track of the hiker's current elevation.
* Every time the hiker comes up to sea level from below (i.e., from -1 to 0), it indicates the end of a valley.

---

## 🚀 Approach

* Initialize a `level` variable to represent the hiker's current altitude.
* Track the number of `valleys` encountered.
* For every step in the path:

  * Update the `level` based on the step.
  * If the hiker returns to sea level (`level == 0`) and the previous level was -1, increment the valley count.

---

## 🧑‍💻 Code

```go
func countingValleys(steps int32, path string) int32 {
    level := int32(0)
    valleys := int32(0)

    for i := 0; i < int(steps); i++ {
        prevLevel := level

        if path[i] == 'D' {
            level--
        } else {
            level++
        }

        if level == 0 && prevLevel == -1 {
            valleys++
        }
    }

    return valleys
}
```

---

## 🔍 Dry Run

### Input:

```
steps = 8
path = "UDDDUDUU"
```

### Execution:

```
Step by step level changes:
U -> level = 1
D -> level = 0
D -> level = -1
D -> level = -2
U -> level = -1
D -> level = -2
U -> level = -1
U -> level = 0 (previous level was -1 → valley ends ✅)
```

✅ Total valleys = 1

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** O(N), where N is the number of steps.
* **Space Complexity:** O(1), constant space.

---

## 📘 Summary

* Track the hiker's altitude as they walk.
* Count a valley every time they climb back to sea level from below.
* Efficient single-pass solution with constant space.
