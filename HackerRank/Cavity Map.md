# 🗺️ Cavity Map - Optimal Solution

## 🎯 Problem Description
Given a square grid where each cell represents elevation, mark all "cavities" (cells that are deeper than all adjacent cells) with 'X'. Border cells should never be marked as cavities.

## 🧠 Solution Approach
This solution features:
1. **Edge case handling** for small grids
2. **Border preservation** (first/last rows and columns)
3. **Adjacent cell comparison** for cavity detection
4. **In-place modification** with rune conversion for string manipulation

## 🚀 Efficient Implementation
```go
func cavityMap(grid []string) []string {
    n := len(grid)
    
    // Handle grids too small to have cavities
    if n < 3 {
        return grid
    }
    
    result := make([]string, n)
    
    // Preserve first and last rows unchanged
    result[0] = grid[0]
    result[n-1] = grid[n-1]
    
    // Process inner cells
    for i := 1; i < n-1; i++ {
        row := []rune(grid[i]) // Convert to runes for mutability
        for j := 1; j < n-1; j++ {
            cellVal := grid[i][j]
            // Check all four adjacent cells
            if cellVal > grid[i-1][j] && 
               cellVal > grid[i+1][j] && 
               cellVal > grid[i][j-1] && 
               cellVal > grid[i][j+1] {
                row[j] = 'X' // Mark as cavity
            }
        }
        result[i] = string(row)
    }
    
    return result
}
```

## ⏱️ Complexity Analysis
- **Time Complexity**: O(n²)
  - Processes each of n² cells once
  - Constant-time comparisons for each cell
- **Space Complexity**: O(n²)
  - Creates a new grid copy (can be optimized to O(1) with careful in-place modification)

## 📊 Example Walkthrough
**Input Grid:**
```
["1112",
 "1912",
 "1892",
 "1234"]
```

**Execution:**
1. Preserves first/last rows:
   - Row 0: "1112"
   - Row 3: "1234"
2. Processes inner cells:
   - Cell [1][1] (9): 
     > Adjacent values: 1,1,1,8 → cavity → 'X'
   - Cell [1][2] (1): Not a cavity
   - Cell [2][1] (8): 
     > Adjacent values: 9,1,1,2 → Not deeper than 9
   - Cell [2][2] (9): 
     > Adjacent values: 1,2,8,3 → cavity → 'X'

**Output:**
```
["1112",
 "1X12",
 "18X2",
 "1234"]
```

## 💡 Key Insights
1. **Border Handling**:
   - First/last rows and columns never modified
2. **Cavity Conditions**:
   - Must be strictly deeper than all four neighbors
3. **String Manipulation**:
   - Requires rune conversion for mutability
4. **Edge Cases**:
   - Grids smaller than 3×3 cannot have cavities

## 🌟 Advantages
- Clear and readable implementation
- Efficient processing of grid cells
- Proper handling of edge cases
- Maintains original grid structure

## 🔄 Alternative Approaches
1. **In-place Modification**:
   ```go
   // Could modify original grid with careful type conversion
   // Reduces space usage but may violate immutability principles
   ```
2. **Functional Style**:
   ```go
   // Could use map/reduce patterns
   // Might be less readable for this specific problem
   ```

The solution provides an optimal balance of clarity and efficiency for cavity detection in grids!