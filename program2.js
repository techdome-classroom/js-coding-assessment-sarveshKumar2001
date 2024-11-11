const decodeTheRing = function (s, p) {

  const m = s.length;
  const n = p.length;

  let dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

  dp[0][0] = true;

  for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1];
      }
  }

  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          const patternChar = p[j - 1];

          if (patternChar === s[i - 1] || patternChar === '?') {
              dp[i][j] = dp[i - 1][j - 1];
          } else if (patternChar === '*') {
              dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
          }
      }
  }

  // The answer is in dp[m][n], where m and n are the lengths of s and p respectively
  return dp[m][n];
};

module.exports = decodeTheRing;
