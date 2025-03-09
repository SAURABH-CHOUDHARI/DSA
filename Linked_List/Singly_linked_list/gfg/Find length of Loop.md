    # 🔄 Count Nodes in a Loop in a Linked List

## 🚀 Problem Statement
Given a **circular linked list**, detect if a loop exists and count the number of nodes present inside the loop.

## 🔍 Example
```javascript
Input: head = 1 → 2 → 3 → 4 → 5 → 3 (loop back to node 3)
Output: 3
Explanation: The loop contains nodes [3 → 4 → 5] (3 nodes in total).
```

## 🛠 Approach (Step-by-Step Breakdown) 🛠

### 🏁 Step 1: Detect the Loop using Floyd’s Cycle Detection Algorithm
- Use two pointers:
  - **Slow pointer** moves one step at a time.
  - **Fast pointer** moves two steps at a time.
- If `slow == fast` at any point, a loop exists.

### 🔄 Step 2: Count the Nodes in the Loop
- Keep `slow` at its position and move it forward inside the loop.
- Count the number of nodes until `slow` meets `fast` again.
- Return the count as the loop length.

### 🛑 Step 3: Return 0 if No Loop Exists
- If `fast` reaches `null`, it means there is no cycle, so return `0`.

## 📊 Visual Representation

### 🎭 Before Loop Detection:
```
head → [1] → [2] → [3] → [4] → [5]
                      ↑        ↓
                      ← ← ← ← ← 
```

### 🔄 Detecting and Counting the Loop:
1. `slow` and `fast` start from `head`.
2. `slow` moves one step, `fast` moves two steps.
3. If they meet, a loop is detected.
4. Move `slow` inside the loop until it meets `fast` again, counting nodes.

## 📝 Code Implementation

```javascript
class Solution {
    // Function to find the length of a loop in the linked list.
    countNodesinLoop(head) {
        let slow = head;
        let fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            
            if (slow == fast) { // Loop detected
                let count = 1;
                slow = slow.next;
                while (slow != fast) {
                    count++;
                    slow = slow.next;
                }
                return count;
            }
        }
        return 0; // No loop found
    }
}
```

## ⏳ Complexity Analysis
- **Time Complexity**: `O(n)`, where `n` is the number of nodes (as each node is visited at most twice).
- **Space Complexity**: `O(1)`, as no extra space is used.

## ✅ Edge Cases Considered
- **No loop present** → Returns `0`.
- **Loop at the beginning of the list**.
- **Loop at the end of the list**.
- **List with a single node forming a loop**.

## 🔥 Summary
This solution efficiently **detects a cycle** and **counts the nodes in a loop** using Floyd’s Cycle Detection Algorithm. 🚀

### 📌 Key Takeaways:
✔️ Uses slow and fast pointers to detect loops.
✔️ Efficient with `O(n)` time and `O(1)` space.
✔️ Can handle various edge cases.

---
🔥 **Master Cycle Detection in Linked Lists!** 🔥

