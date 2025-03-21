# Queue Data Structure 🔄

## Table of Contents
- [Introduction](#introduction)
- [Basic Concepts](#basic-concepts)
- [Queue Operations](#queue-operations)
- [Implementation](#implementation)
  - [JavaScript Implementation](#javascript-implementation)
  - [Step-by-Step Explanation](#step-by-step-explanation)
- [Time Complexity](#time-complexity)
- [Real-world Applications](#real-world-applications)
- [Common Variations](#common-variations)
- [Practice Problems](#practice-problems)
- [Conclusion](#conclusion)

## Introduction

A Queue is a fundamental linear data structure that follows the First In, First Out (FIFO) principle 🥇➡️🥈. This means that the first element added to the queue will be the first one to be removed, similar to a line of people waiting for a service.

> 💡 **Real-world analogy**: Think of a queue as a line of people waiting at a movie theater ticket counter. The person who arrives first gets served first.

## Basic Concepts

### Key Terminologies

- **Front/Head**: The position where deletion occurs (the beginning of the queue)
- **Rear/Tail**: The position where insertion occurs (the end of the queue)
- **Enqueue**: Add an element to the rear of the queue
- **Dequeue**: Remove an element from the front of the queue
- **Peek/Front**: View the front element without removing it
- **Empty**: Check if the queue is empty
- **Size**: Get the number of elements in the queue

## Queue Operations

Here are the main operations of a queue:

### 1. Enqueue Operation ➕

The process of adding an element to the rear of the queue.

```
enqueue(element):
   Create a new node with the given element
   If queue is empty:
       Set front and rear to the new node
   Else:
       Set next of rear to the new node
       Move rear to the new node
   Increment size counter
```

### 2. Dequeue Operation ➖

The process of removing an element from the front of the queue.

```
dequeue():
   If queue is empty:
       Return "Queue is empty"
   Store front node
   Move front to the next node
   If front becomes null:
       Set rear to null as well
   Decrement size counter
   Return the stored node value
```

### 3. Peek/Front Operation 👀

View the element at the front without removing it.

```
peek():
   If queue is empty:
       Return "Queue is empty"
   Return the value of the front node
```

### 4. isEmpty Operation 🔍

Check if the queue is empty.

```
isEmpty():
   Return true if size is 0 or front is null
   Otherwise return false
```

### 5. Size Operation 📏

Get the number of elements in the queue.

```
getSize():
   Return size
```

## Implementation

### JavaScript Implementation

Below is a complete implementation of a Queue using JavaScript with a linked list approach:

```javascript
class Node {
    constructor(val) {
        this.val = val;   // Value stored in the node
        this.next = null; // Reference to the next node
    }
}

class Queue {
    constructor() {
        this.front = null; // Reference to the front node
        this.rear = null;  // Reference to the rear node
        this.size = 0;     // Size counter
    }

    // Add an element to the queue
    enqueue(val) {
        const newNode = new Node(val)
        if (this.rear === null) {
            // If queue is empty
            this.front = this.rear = newNode;
        } else {
            // If queue has elements
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    // Remove an element from the queue
    dequeue() {
        if (this.front === null) {
            console.log("Queue is empty")
            return null;
        }
        
        const value = this.front.val;
        this.front = this.front.next;
        
        if (this.front === null) {
            this.rear = null;
        }
        
        this.size--;
        return value;
    }

    // Check if queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the front element without removing it
    peek() {
        if (this.front === null) {
            console.log("Queue is empty")
            return null;
        }
        return this.front.val;
    }

    // Display all elements in the queue
    display() {
        if (this.front === null) {
            console.log("Queue is empty")
            return;
        }
        
        let current = this.front;
        let result = '';
        
        while (current !== null) {
            result += current.val + " ";
            current = current.next;
        }
        
        console.log(result.trim());
    }
}
```

### Step-by-Step Explanation

#### Node Class

```javascript
class Node {
    constructor(val) {
        this.val = val;   // Value stored in the node
        this.next = null; // Reference to the next node
    }
}
```

- This class represents each element in our queue
- `val` stores the actual value
- `next` points to the next node in the queue

#### Queue Class

```javascript
class Queue {
    constructor() {
        this.front = null; // Reference to the front node
        this.rear = null;  // Reference to the rear node
        this.size = 0;     // Size counter
    }
}
```

- `front`: Points to the first node of the queue (where we remove from)
- `rear`: Points to the last node of the queue (where we add to)
- `size`: Keeps track of the number of elements

#### Enqueue Operation

```javascript
enqueue(val) {
    const newNode = new Node(val)
    if (this.rear === null) {
        // If queue is empty
        this.front = this.rear = newNode;
    } else {
        // If queue has elements
        this.rear.next = newNode;
        this.rear = newNode;
    }
    this.size++;
}
```

1. Create a new node with the given value
2. If the queue is empty (`rear` is `null`):
   - Set both `front` and `rear` to the new node
3. If the queue already has elements:
   - Link the current `rear` node to the new node
   - Update `rear` to point to the new node
4. Increment the size counter

#### Dequeue Operation

```javascript
dequeue() {
    if (this.front === null) {
        console.log("Queue is empty")
        return null;
    }
    
    const value = this.front.val;
    this.front = this.front.next;
    
    if (this.front === null) {
        this.rear = null;
    }
    
    this.size--;
    return value;
}
```

1. Check if the queue is empty; if so, return an error message
2. Store the value of the front node to return it later
3. Move the front pointer to the next node
4. If after moving, the front becomes `null` (queue is now empty), also set `rear` to `null`
5. Decrement the size counter
6. Return the stored value

#### isEmpty Operation

```javascript
isEmpty() {
    return this.size === 0;
}
```

- Simply returns `true` if size is 0, otherwise `false`

#### Display Operation

```javascript
display() {
    if (this.front === null) {
        console.log("Queue is empty")
        return;
    }
    
    let current = this.front;
    let result = '';
    
    while (current !== null) {
        result += current.val + " ";
        current = current.next;
    }
    
    console.log(result.trim());
}
```

1. Check if the queue is empty
2. If not, traverse from front to rear, printing each node's value
3. Uses a temporary pointer `current` to traverse the queue

## Time Complexity

| Operation | Time Complexity |
|-----------|-----------------|
| Enqueue   | O(1)            |
| Dequeue   | O(1)            |
| Peek      | O(1)            |
| isEmpty   | O(1)            |
| Size      | O(1)            |

⚡ As you can see, all operations in a queue are very efficient with O(1) time complexity, which makes it perfect for high-performance applications.

## Real-world Applications

Queues are used in numerous real-world applications:

### 1. CPU Scheduling 💻

Operating systems use queues to manage processes waiting for CPU time.

### 2. Print Spooling 🖨️

Print jobs are processed in the order they are received using a queue.

### 3. Breadth-First Search (BFS) 🌲

Graph traversal algorithms use queues to explore nodes level by level.

### 4. Web Servers 🌐

Request handling in web servers often uses queues to process requests in the order they arrive.

### 5. Message Buffering 📨

In message-oriented middleware, queues are used to buffer and process messages asynchronously.

### 6. Call Center Systems ☎️

Customer service calls are managed using queue structures to ensure first-come, first-served handling.

### 7. Spotify/Music Players 🎵

The "play next" feature in music players uses a queue to determine song order.

## Common Variations

### 1. Circular Queue 🔄

A variation where the last position is connected to the first position to form a circle. This efficiently utilizes memory by reusing spaces.

### 2. Priority Queue ⭐

Elements are dequeued based on their priority rather than the insertion order.

### 3. Double-ended Queue (Deque) ↔️

Allows insertion and deletion at both ends of the queue.

### 4. Bounded Queue 📏

Has a fixed capacity and cannot grow beyond that limit.

## Practice Problems

To improve your understanding of queues, try these problems:

1. Implement a queue using two stacks 🔄
2. Implement a circular queue with a fixed size 🔄
3. Create a function to reverse a queue 🔄
4. Implement a queue that supports finding the minimum element in O(1) time ⏱️
5. Level order traversal of a binary tree 🌳

## Conclusion

Queues are essential data structures with a wide range of applications across computer science and software engineering. Their simplicity and efficiency make them invaluable for solving many real-world problems, especially those involving sequential processing or waiting time management.

By mastering queues, you'll have a powerful tool in your programming arsenal that will help you solve complex problems with elegant and efficient solutions.

---

🚀 Happy Coding! 🚀