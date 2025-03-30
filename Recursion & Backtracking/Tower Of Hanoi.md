

# 🏗 Tower of Hanoi

## 📌 Problem Statement  
The **Tower of Hanoi** is a classic mathematical puzzle where you have `N` disks of different sizes stacked in increasing order on a **source** peg. The goal is to move all disks to the **destination** peg using an **intermediate/helper** peg, following these rules:  

1. **Only one disk can be moved at a time.**  
2. **A larger disk cannot be placed on a smaller disk.**  
3. **A disk can only be moved from one peg to another.**  

---

## 🔥 Intuition  
We break the problem down recursively:  

- **Move `N-1` disks** from `source` to `helper`.  
- **Move the `Nth` (largest) disk** from `source` to `destination`.  
- **Move `N-1` disks** from `helper` to `destination`.  

This recursive process continues until `N = 1`, where we simply move one disk directly.  

---

## 🚀 Implementation (JavaScript)  
```javascript
let n = Number(prompt("Enter a Number: "));
TowerOfHanoi(n, "source", "destination", "helper");

function TowerOfHanoi(n, s, d, h) {
    if (n == 1) {
        console.log("Move 1 plate from " + s + " to " + d);
        return;
    }
    TowerOfHanoi(n - 1, s, h, d);
    console.log("Move " + n + "th plate from " + s + " to " + d);
    TowerOfHanoi(n - 1, h, d, s);
}
```

---

## 📜 Dry Run Example  
**Input:** `N = 3`  

```
Move 1 plate from source to destination  
Move 2th plate from source to helper  
Move 1 plate from destination to helper  
Move 3th plate from source to destination  
Move 1 plate from helper to source  
Move 2th plate from helper to destination  
Move 1 plate from source to destination  
```

### 🎯 Step-by-step Execution  
1. Move `N-1 = 2` disks from `source` to `helper`.  
2. Move `3rd` disk from `source` to `destination`.  
3. Move `N-1 = 2` disks from `helper` to `destination`.  

---

## ⏳ Time Complexity Analysis  
- The recurrence relation:  
  \[
  T(N) = 2T(N-1) + 1
  \]
- Expanding the recurrence:  
  \[
  T(N) = 2(2T(N-2) + 1) + 1 = 4T(N-2) + 3
  \]
  \[
  T(N) = 2^N - 1
  \]
- **Final Complexity:** **O(2^N)** (Exponential)  

---

## ✅ Key Takeaways  
✔ **Recursive Approach** to solving Tower of Hanoi.  
✔ **Exponential Complexity** due to repeated subproblems.  
✔ **Perfect example of Divide & Conquer.**  
✔ **Used in algorithm design, puzzle solving, and even computer science education!**  

