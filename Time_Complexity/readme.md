

## What is Time Complexity? ⏱️

Time complexity measures the amount of time an algorithm takes to run as a function of the input size \( n \). It helps you understand the efficiency of an algorithm and is often expressed using **Big-O notation**. The notation describes the upper bound of an algorithm's running time, usually ignoring constants and lower-order terms.

---

## Common Big-O Notations 🚀

1. **\( O(1) \) - Constant Time**  
   - **Definition:** The runtime is fixed and does not change with the input size.
   - **Example:** Accessing an element in an array (e.g., `arr[i]`).
   - **Emoji:** ⏲️
   
2. **\( O(\log n) \) - Logarithmic Time**  
   - **Definition:** The runtime grows logarithmically as the input size increases.
   - **Example:** Binary search in a sorted array.
   - **Emoji:** 📉  
   - **Note:** Often seen in algorithms that divide the problem in half each time, such as tree traversals.

3. **\( O(n) \) - Linear Time**  
   - **Definition:** The runtime increases linearly with the size of the input.
   - **Example:** Looping through an array of \( n \) elements.
   - **Emoji:** 📝  
   - **Example Code:**
     ```python
     # Python example of O(n)
     def print_elements(arr):
         for element in arr:
             print(element)
     ```

4. **\( O(n^2) \) - Quadratic Time**  
   - **Definition:** The runtime is proportional to the square of the input size.
   - **Example:** Comparing every pair of elements in an array (often seen in simple sorting algorithms like bubble sort).
   - **Emoji:** 🔢  
   - **Example Code:**
     ```python
     # Python example of O(n^2)
     def bubble_sort(arr):
         n = len(arr)
         for i in range(n):
             for j in range(0, n - i - 1):
                 if arr[j] > arr[j + 1]:
                     arr[j], arr[j + 1] = arr[j + 1], arr[j]
         return arr
     ```

5. **\( O(n!) \) - Factorial Time**  
   - **Definition:** The runtime grows factorially with the input size, making the algorithm impractical for even moderately large inputs.
   - **Example:** The brute force solution to the Travelling Salesman Problem.
   - **Emoji:** 🚀🛑 (Speed bump!)
   
   **Note:** When you see factorial time complexities, it's usually a sign that the algorithm is only suitable for very small input sizes.

---

## Principles of Time Complexity Analysis ⚖️

1. **Drop Constant Factors:**  
   - *Why?* Constants are insignificant in Big-O notation.  
   - *Example:* \( 2n = O(n) \) because the constant \( 2 \) is dropped.

2. **Ignore Lower-Order Terms:**  
   - *Why?* For large \( n \), higher-order terms dominate the growth of the function.  
   - *Example:* \( n^2 + n = O(n^2) \).

3. **Focus on the Worst-Case Scenario (Big-O):**  
   - *Why?* Big-O notation typically describes the worst-case running time; however, other notations such as *Big-\(\Theta\)* and *Big-\(\Omega\)* can be used for average-case or best-case analyses.
   
4. **Analyze Input Size:**  
   - *Tip:* Let \( n \) represent the size of the input. Sometimes, multiple input parameters exist; choose the one that grows fastest, or describe the complexity in terms of each parameter.

---

## Detailed Conceptual Overview with Examples 📚

1. **Constant Time \( O(1) \):**  
   ```cpp
   // C++ example
   int getFirstElement(const vector<int>& v) {
       return v[0]; // Always takes one operation.
   }
   ```

2. **Logarithmic Time \( O(\log n) \):**  
   - **Example:** Binary Search.
   ```python
   # Python example of binary search (O(log n))
   def binary_search(arr, target):
       low, high = 0, len(arr) - 1
       while low <= high:
           mid = (low + high) // 2
           if arr[mid] == target:
               return mid
           elif arr[mid] < target:
               low = mid + 1
           else:
               high = mid - 1
       return -1
   ```

3. **Linear Time \( O(n) \):**
   ```java
   // Java example: linear search
   public int linearSearch(int[] arr, int target) {
       for (int i = 0; i < arr.length; i++) {
           if (arr[i] == target) {
               return i;
           }
       }
       return -1;
   }
   ```

4. **Quadratic Time \( O(n^2) \):**
   ```javascript
   // JavaScript example: simple bubble sort
   function bubbleSort(arr) {
     let n = arr.length;
     for (let i = 0; i < n; i++) {
       for (let j = 0; j < n - 1 - i; j++) {
         if (arr[j] > arr[j + 1]) {
           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
         }
       }
     }
     return arr;
   }
   ```

5. **Factorial Time \( O(n!) \):**
   - **Example:** Solving the Travelling Salesman Problem (TSP) via brute force.
   ```python
   # Python pseudocode example for TSP (O(n!))
   from itertools import permutations
   
   def tsp(distances):
       n = len(distances)
       cities = list(range(n))
       min_distance = float('inf')
       best_route = None
       for perm in permutations(cities):
           current_distance = 0
           for i in range(n - 1):
               current_distance += distances[perm[i]][perm[i + 1]]
           current_distance += distances[perm[-1]][perm[0]]  # Return to start
           if current_distance < min_distance:
               min_distance = current_distance
               best_route = perm
       return best_route, min_distance
   ```

---

## Readme Overview 📖

- **Purpose:**  
  This document explains the basics of time complexity in algorithm analysis. It includes definitions, common complexity notations, principles, and simple examples in various programming languages.

- **Key Points:**
  - **Big-O Notation:** Focuses on the worst-case scenario while ignoring constants and lower-order terms.
  - **Common Time Complexities:** \( O(1) \), \( O(\log n) \), \( O(n) \), \( O(n^2) \), and \( O(n!) \).
  - **Practical Impact:** Helps guide which algorithm or data structure to choose based on the expected input size and performance needs.

- **Example Code:**  
  Code snippets in Python, C++, Java, and JavaScript illustrate how different time complexities play out in common tasks.

- **When to Use Each Complexity:**
  - **\( O(1) \) & \( O(\log n) \):** Best for quick lookups and operations.
  - **\( O(n) \):** Suitable when you need to process every item.
  - **\( O(n^2) \):** Often seen in simple sorting algorithms, but be cautious on large inputs.
  - **\( O(n!) \):** Generally impractical except for very small \( n \).

