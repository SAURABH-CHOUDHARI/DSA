# 🐦 Migratory Birds

## 💡 Problem Statement

You are given an array of bird sightings where every element represents a bird type ID. You are tasked with identifying the most frequently sighted bird type. If multiple types are equally common, return the one with the smallest ID.

---

## 🚀 Approach

We use a frequency map (hash map) to count sightings for each bird type. Then we iterate over the map to find the bird type with the highest frequency. If a tie occurs, we choose the bird type with the smaller ID.

---

## 🔢 Steps

1. Create a hash map to store the frequency of each bird type.
2. Iterate through the input array and update the map.
3. Initialize two variables: `maxCount` to track the highest frequency and `Bird` to track the corresponding bird ID.
4. Traverse the map to find the bird type with the highest frequency:

   * If a bird has a higher frequency, update both `maxCount` and `Bird`.
   * If two birds have the same frequency, update `Bird` to the smaller ID.
5. Return the `Bird` with the highest frequency (and smallest ID in case of a tie).

---

## 👨‍💻 Code

```go
func migratoryBirds(arr []int32) int32 {
   myMap := make(map[int32]int32)
   for i := 0; i < len(arr); i++ {
       myMap[arr[i]]++
   }

   maxCount := int32(0)
   Bird := int32(0)

   for curBird, count := range myMap {
       if count > maxCount {
           maxCount = count
           Bird = curBird
       } else if maxCount == count && curBird < Bird {
           Bird = curBird
       }
   }

   return Bird
}
```

---

## 🔍 Dry Run

### Input:

```go
arr := []int32{1, 4, 4, 4, 5, 3}
```

### Execution:

* Frequency map becomes: `{1:1, 4:3, 5:1, 3:1}`
* Bird `4` has the highest frequency of 3
* Return `4`

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** O(N), where N is the number of bird sightings
* **Space Complexity:** O(K), where K is the number of unique bird types

---

## 📘 Summary

* Uses a hash map for efficient counting
* Guarantees smallest ID return in case of frequency tie
* Linear time solution ✅
