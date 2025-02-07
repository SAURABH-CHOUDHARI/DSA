# 📊 Sorting Algorithms

## 🔍 Stable vs Unstable Sorting Algorithms

### ✅ **Stable Sorting Algorithms**
A sorting algorithm is **stable** if it preserves the **relative order of equal elements** in the sorted output.

**Example:**
```
Input:  [(3, 'A'), (1, 'B'), (3, 'C')]
Sorted: [(1, 'B'), (3, 'A'), (3, 'C')]
```
Here, `(3, 'A')` comes before `(3, 'C')`, maintaining their original order.

#### 📦 **Stable Algorithms:**

1. **Bubble Sort**
   - **Flow:** Repeatedly swap adjacent elements if they are in the wrong order.
   - **Code Snippet:**
     ```javascript
     function bubbleSort(arr) {
         let n = arr.length;
         for (let i = 0; i < n; i++) {
             for (let j = 0; j < n - i - 1; j++) {
                 if (arr[j] > arr[j + 1]) {
                     [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                 }
             }
         }
         return arr;
     }
     ```

2. **Insertion Sort**
   - **Flow:** Build the sorted array one item at a time, inserting elements into their correct position.
   - **Code Snippet:**
     ```javascript
     function insertionSort(arr) {
         for (let i = 1; i < arr.length; i++) {
             let key = arr[i];
             let j = i - 1;
             while (j >= 0 && arr[j] > key) {
                 arr[j + 1] = arr[j];
                 j--;
             }
             arr[j + 1] = key;
         }
         return arr;
     }
     ```

3. **Merge Sort**
   - **Flow:** Divide the array into halves, sort them recursively, and merge the sorted halves.
   - **Code Snippet:**
     ```javascript
     function mergeSort(arr) {
         if (arr.length <= 1) return arr;

         const mid = Math.floor(arr.length / 2);
         const left = mergeSort(arr.slice(0, mid));
         const right = mergeSort(arr.slice(mid));

         return merge(left, right);
     }

     function merge(left, right) {
         let result = [];
         let i = 0, j = 0;

         while (i < left.length && j < right.length) {
             if (left[i] <= right[j]) {
                 result.push(left[i]);
                 i++;
             } else {
                 result.push(right[j]);
                 j++;
             }
         }

         return result.concat(left.slice(i)).concat(right.slice(j));
     }
     ```

---

### 🚫 **Unstable Sorting Algorithms**
An **unstable** sorting algorithm **does not guarantee** the preservation of the relative order of equal elements.

**Example:**
```
Input:  [(3, 'A'), (1, 'B'), (3, 'C')]
Sorted: [(1, 'B'), (3, 'C'), (3, 'A')]  # Order of (3, 'A') and (3, 'C') changed
```

#### ⚡ **Unstable Algorithms:**

1. **Selection Sort**
   - **Flow:** Repeatedly find the minimum element from the unsorted part and put it at the beginning.
   - **Code Snippet:**
     ```javascript
     function selectionSort(arr) {
         for (let i = 0; i < arr.length; i++) {
             let minIdx = i;
             for (let j = i + 1; j < arr.length; j++) {
                 if (arr[j] < arr[minIdx]) {
                     minIdx = j;
                 }
             }
             [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
         }
         return arr;
     }
     ```

2. **Quick Sort**
   - **Flow:** Pick a pivot element, partition the array around the pivot, and recursively sort the partitions.
   - **Code Snippet:**
     ```javascript
     function quickSort(arr) {
         if (arr.length <= 1) return arr;

         const pivot = arr[Math.floor(arr.length / 2)];
         const left = arr.filter(x => x < pivot);
         const middle = arr.filter(x => x === pivot);
         const right = arr.filter(x => x > pivot);

         return quickSort(left).concat(middle, quickSort(right));
     }
     ```

---

## 🗒️ **Key Differences:**
| Feature                | Stable Algorithms       | Unstable Algorithms       |
|------------------------|-------------------------|---------------------------|
| **Preserves Order**    | Yes                     | No                        |
| **Examples**           | Bubble, Insertion, Merge| Selection, Quick          |
| **Use Cases**          | Databases, Multi-key sort| Fast in-place sorting    |

💡 **Tip:** Use stable sorts when relative order matters, like in database operations with multiple sorting keys.

