const getTotalIsles = function (grid) {

  // Check if the grid is empty
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  function dfs(x, y) {
      const stack = [[x, y]];
      grid[x][y] = 'W';  
      
      while (stack.length > 0) {
          const [cx, cy] = stack.pop();
          
          for (let [dx, dy] of directions) {
              const nx = cx + dx;
              const ny = cy + dy;

              if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny] === 'L') {
                  grid[nx][ny] = 'W';  
                  stack.push([nx, ny]);
              }
          }
      }
  }

  let islandCount = 0;

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') {  
              islandCount++;  
              dfs(i, j);  
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;
