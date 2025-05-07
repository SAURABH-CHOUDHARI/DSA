# ⚡ Jumping on Clouds - Optimal Solution

## 🎯 Problem Description
A character jumps through circular clouds (0 = safe, 1 = thunder) in steps of size `k`. Each jump costs 1 energy, landing on a thundercloud costs 2 additional energy. Calculate remaining energy after completing one full round.

## � Solution Approach
This solution uses:
1. **Modular arithmetic** for circular traversal
2. **Energy tracking** with conditional deductions
3. **Single-pass loop** until returning to start
4. **Efficient computation** without array copying

## 🚀 Optimal Implementation
```go
func jumpingOnClouds(c []int32, k int32) int32 {
    energy := int32(100)
    n := int32(len(c))
    i := int32(0)

    for {
        i = (i+k)%n
        energy -= 1
        if c[i] == 1 {
            energy -= 2
        }
        if i == 0 {
            break
        }
    }

    return energy
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n/gcd(n,k))
  - Worst case O(n) when k=1
  - Uses modular arithmetic to find cycle
- **Space Complexity**: O(1)
  - Constant space usage
  - No additional storage

## 📊 Example Walkthrough
**Input:**
```go
c = [0, 0, 1, 0]
k = 2
```

**Execution:**
1. Start at index 0 (energy=100)
2. Jump 2 → index 2 (thunder) → energy=97
3. Jump 2 → index 0 → energy=96
4. Loop ends (returned to start)
5. Final energy: 96

**Output:** `96`

## 💡 Key Insights
1. **Circular Handling**:
   - `(i+k)%n` ensures circular traversal
2. **Energy Accounting**:
   - Base cost per jump: 1
   - Thunder penalty: +2
3. **Termination Condition**:
   - Stops when returning to start
4. **Efficiency**:
   - Processes only necessary jumps

## 🌟 Why This Solution Rocks
- Optimal O(n) time complexity
- Minimal memory footprint
- Clear and concise logic
- Handles all edge cases:
  - All safe clouds
  - All thunder clouds
  - Single cloud
  - Large jump sizes

## 🏆 Alternative Approaches
1. **Simulation Approach**:
   ```go
   // Simulate each jump in sequence
   // Same complexity but less elegant
   ```
2. **Mathematical Calculation**:
   ```go
   // Calculate thunder hits mathematically
   // More complex with same performance
   ```

The modular arithmetic solution provides an elegant and efficient way to solve the cloud jumping problem!