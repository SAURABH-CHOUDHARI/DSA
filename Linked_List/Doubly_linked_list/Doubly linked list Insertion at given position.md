# Doubly Linked List Node Insertion 🔄

## Problem Description 📝

This problem asks us to implement a function that inserts a new node with value `x` at position `p` in a doubly linked list. The function should return the head of the modified list.

### Parameters:
- `head`: The head of the doubly linked list
- `p`: The position where the new node should be inserted (0-indexed)
- `x`: The value to be stored in the new node

## Approach 🧠

### Step 1: Create a New Node ✨
First, we create a new node with the given value `x`.

### Step 2: Handle Edge Case - Insertion at Position 0 🔍
If we need to insert at the beginning of the list (position 0):
- Set the new node's next pointer to the current head
- Set the current head's prev pointer to the new node
- Return the new node as the new head of the list

### Step 3: Navigate to Position p 🚶‍♂️
Traverse the linked list until we reach position `p`:
- Start from the head with position counter = 0
- Move to the next node and increment the counter until we reach position `p`

### Step 4: Insert the New Node 📥
Once we've reached position `p`:
- Connect the new node's next pointer to the current node's next
- If there's a node after the current node, set its prev pointer to the new node
- Set the current node's next pointer to the new node
- Set the new node's prev pointer to the current node

### Step 5: Return the Head 🔙
Return the original head (since it hasn't changed if we didn't insert at position 0)

## Code Implementation 💻

```javascript
class Solution {
    // Function to insert a new node at given position in doubly linked list.
    addNode(head, p, x) {
        let node = new Node(x);
        
        // Handle insertion at position 0
        if(p == 0){
            node.next = head;
            head.prev = node;
            return node; 
        }
        
        // Navigate to position p
        let curr = head;
        let pos = 0;
        while(pos < p) {
            curr = curr.next;
            pos++;
        }
        
        // Insert the new node
        node.next = curr.next;
        if(curr.next) curr.next.prev = node;
        curr.next = node;
        node.prev = curr;
        
        return head;
    }
}
```

## Time and Space Complexity ⏱️

- **Time Complexity**: O(p) where p is the position. In the worst case, we might need to traverse the entire list, making it O(n).
- **Space Complexity**: O(1) as we only use a constant amount of extra space regardless of input size.

## Visual Representation 🖼️

Before insertion at position 2:
```
head → [A] ⟷ [B] ⟷ [C] ⟷ [D] → null
```

After insertion of [X] at position 2:
```
head → [A] ⟷ [B] ⟷ [X] ⟷ [C] ⟷ [D] → null
```

## Edge Cases to Consider ⚠️

- Empty list: If the head is null
- Position greater than list length
- Position 0 (inserting at the beginning)