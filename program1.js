const getTotalIsles = function (grid) {

  // Check if the grid is empty
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;

  // Directions for moving up, down, left, right
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  // Depth-First Search function to mark all connected land cells as visited
  function dfs(x, y) {
      // Stack for DFS
      const stack = [[x, y]];
      grid[x][y] = 'W';  // Mark the land as water (visited)
      
      while (stack.length > 0) {
          const [cx, cy] = stack.pop();
          
          // Explore all 4 possible directions (up, down, left, right)
          for (let [dx, dy] of directions) {
              const nx = cx + dx;
              const ny = cy + dy;
              
              // Check if the new position is within bounds and is land
              if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny] === 'L') {
                  grid[nx][ny] = 'W';  // Mark it as visited
                  stack.push([nx, ny]);
              }
          }
      }
  }

  let islandCount = 0;

  // Iterate through all cells in the grid
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') {  // Found an unvisited land
              islandCount++;  // New island found
              dfs(i, j);  // Explore the island and mark all connected land
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;
