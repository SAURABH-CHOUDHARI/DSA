# Binary Tree Traversal (Preorder, Inorder, Postorder)

## 🌳 Introduction
A **Binary Tree** is a hierarchical data structure where each node has at most two children: **left** and **right**. This README explains how to create a **binary tree** and perform three types of **tree traversals**:

1. **Preorder Traversal** (Root → Left → Right)
2. **Inorder Traversal** (Left → Root → Right)
3. **Postorder Traversal** (Left → Right → Root)

---

## 📌 Problem Statement
- Implement a **binary tree** using **JavaScript**.
- Accept user input to construct the tree dynamically.
- Perform **Preorder, Inorder, and Postorder traversals**.

---

## 🚀 Approach

### 🔹 Tree Construction
1. **Recursive Input:** Ask the user to enter a node value.
2. If the user enters `-1`, it means there is no node (i.e., null).
3. Create a **new node** and recursively call the function for the **left** and **right** children.

### 🔹 Tree Traversals
- **Preorder Traversal:** Visit **Root → Left → Right**.
- **Inorder Traversal:** Visit **Left → Root → Right**.
- **Postorder Traversal:** Visit **Left → Right → Root**.

---

## 🧑‍💻 Code Implementation

```javascript
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }
    
    createTree(){
        let data = prompt("Enter val:");
        if(data == -1) return null;
        
        let newNode = new Node(data);
        console.log("Enter left child for "+ data);
        newNode.left = this.createTree();
        console.log("Enter right child for "+ data);
        newNode.right = this.createTree();
        
        return newNode;
    }
    
    preorder(root){
        if(root == null) return;
        process.stdout.write(root.val+ " ");
        this.preorder(root.left);
        this.preorder(root.right);
    }
    
    postorder(root){
        if(root == null) return;
        this.postorder(root.left);
        this.postorder(root.right);
        process.stdout.write(root.val+ " ");
    }
    
    inorder(root){
        if(root == null) return;
        this.inorder(root.left);
        process.stdout.write(root.val+ " ");
        this.inorder(root.right);
    }
}    

let obj = new Tree();
obj.root = obj.createTree();

console.log("Preorder Traversal:");
obj.preorder(obj.root);
console.log();

console.log("Postorder Traversal:");
obj.postorder(obj.root);
console.log();

console.log("Inorder Traversal:");
obj.inorder(obj.root);
console.log();
```

---

## 📝 Dry Run

### Example Input
```
Enter val: 1
Enter left child for 1
Enter val: 2
Enter left child for 2
Enter val: -1
Enter right child for 2
Enter val: -1
Enter right child for 1
Enter val: 3
Enter left child for 3
Enter val: -1
Enter right child for 3
Enter val: -1
```

### Constructed Tree
```
    1
   / \
  2   3
```

### Expected Output
```
Preorder Traversal: 1 2 3
Postorder Traversal: 2 3 1
Inorder Traversal: 2 1 3
```

---

## ⏳ Complexity Analysis
- **Tree Construction:** `O(N)` (where `N` is the number of nodes)
- **Traversals:** `O(N)` for each (Preorder, Inorder, Postorder)

---

## 🔍 Edge Cases
✅ **Single Node Tree**
✅ **Completely Skewed Trees (All Left or All Right Children)**
✅ **Empty Tree (Input `-1` at the beginning)**

---

## 🎯 Summary
- Created a **Binary Tree** dynamically.
- Implemented **Preorder, Inorder, and Postorder** traversals.
- Used **recursion** to traverse the tree efficiently.

---

🚀 **Happy Coding!** 🌲

