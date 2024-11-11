const decodeTheRing = function (s, p) {

  const m = s.length;
  const n = p.length;

  // Create a 2D DP table, where dp[i][j] means whether the first i characters of s match the first j characters of p
  let dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

  // Base case: both strings are empty, so they match
  dp[0][0] = true;

  // Handle patterns starting with '*', because '*' can match empty sequences
  for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1];
      }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          const patternChar = p[j - 1];

          if (patternChar === s[i - 1] || patternChar === '?') {
              // If patternChar matches s[i-1] or patternChar is '?', inherit the previous state
              dp[i][j] = dp[i - 1][j - 1];
          } else if (patternChar === '*') {
              // '*' can match zero or more characters
              dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
          }
      }
  }

  // The answer is in dp[m][n], where m and n are the lengths of s and p respectively
  return dp[m][n];
};

module.exports = decodeTheRing;
