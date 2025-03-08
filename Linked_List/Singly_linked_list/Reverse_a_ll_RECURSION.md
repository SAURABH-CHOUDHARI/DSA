# 🔄 Reverse a Singly Linked List (Recursively)

## 🚀 Problem Statement

Given the head of a **singly linked list**, reverse the list **recursively** and return the new head.

## 🔍 Example

```javascript
Input: head = 1 → 2 → 3 → 4 → 5 → NULL
Output: 5 → 4 → 3 → 2 → 1 → NULL
```

## 🛠 Approach (Step-by-Step Breakdown) 🛠

### 🏁 Step 1: Base Condition
- If the list is **empty (`head == null`)** or contains **only one node (`head.next == null`)**, return `head` as it is already reversed.

### 🔄 Step 2: Recursive Call
- Move to the **next node** by calling `reverseList(head.next)`.
- This keeps diving deeper until it reaches the last node, which will become the new head.

### 🏗️ Step 3: Reverse the Pointers
- When recursion starts returning:
  1. `head.next.next = head` (Makes the next node point back to `head`).
  2. `head.next = null` (Breaks the old forward link).

### 🔚 Step 4: Return the New Head
- The new head (last node in the original list) is passed back up the recursion chain.

## 📊 Visual Flow Diagram

### 🎭 Before Reversal:
```
head → [1] → [2] → [3] → [4] → [5] → NULL
```

### 🔄 Recursion Unwinding (Reversing Links Step by Step)
1. Reached `5 → NULL` (Base case, return `5`)
2. `4.next.next = 4` → `5 → 4`
3. `3.next.next = 3` → `5 → 4 → 3`
4. `2.next.next = 2` → `5 → 4 → 3 → 2`
5. `1.next.next = 1` → `5 → 4 → 3 → 2 → 1`

### 🎯 Final Output:
```
head → [5] → [4] → [3] → [2] → [1] → NULL
```

## 📝 Code Implementation

```javascript
var reverseList = function (head) {
    if (head == null || head.next == null) return head;

    let rev = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return rev;
};
```

## ⏳ Complexity Analysis
- **Time Complexity**: `O(n)` (Each node is visited once.)
- **Space Complexity**: `O(n)` (Recursive stack depth is equal to the number of nodes.)

## ✅ Edge Cases Considered
- **Empty List (`head == null`)** → Returns `null`.
- **Single Node List (`head.next == null`)** → Returns `head` unchanged.
- **List with Multiple Nodes** → Successfully reverses all links.

## 🔥 Summary
This **recursive approach** effectively reverses a singly linked list by leveraging **function call stacks**. Each node flips its direction upon returning, resulting in a **fully reversed list**. 🚀

### 📌 Key Takeaways:
✔️ Uses recursion to traverse to the last node first.
✔️ Reverses the `next` pointers while unwinding recursion.
✔️ No extra data structures are needed.
✔️ Simple and elegant solution!

---
🔥 **Master Recursion, Master Linked Lists!** 🔥

