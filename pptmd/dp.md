### 动态规划

Dynamic Programming

什么是动态规划，如何分析、求解动态规划问题

===

<!-- .slide: class="left" -->

描述：动态规划就是把一个大问题一步步拆分成越来越小的子问题，直到子问题小到可以用确定的条件来解答

===

### 动态规划的核心：如何拆分问题

===

### 1. 状态的定义

给定一个长度为 n 的数列，求最长的上升子数列（LIS）的长度 <!-- .element: class="left" -->

如 1,5,3,4,6,9,7,8 的 LIS 为 1,3,4,6,7,8，长度为 6 <!-- .element: class="left" --> 

===

<!-- .slide: class="left" -->

这个问题在字面上看，找不出子问题，所以需要我们重新定义这个问题：

给定一个长度为 n 的数列 nums，设 dp[i] （状态） 是以 nums[i] 结尾的最长递增子序列的长度 （状态的定义）求 dp 中最大值

===

### 2、状态转移方程的定义

定义好状态之后，状态与状态之间的关系式，叫做状态转移方程 <!-- .element: class="left" --> 

dp[1]: 1 <!-- .element: class="left" --> 

dp[i]: 所有 j < i & nums[j] < nums[i] 的 dp[j] + 1 最大值 <!-- .element: class="left" --> 

这里表达了子问题与更小子问题之间的关系，状态转移方程就是带有条件的递推式 <!-- .element: class="left" --> 

===

```js [2|4-10|7-9|12|15]
var lis = (nums) => {
  const dp = [] // 以 nums[i] 结尾上升子序列长度
  const len = nums.length
  for (let i = 0; i < len; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1) // 状态转移
      }
    }
  }
  return Math.max(...dp)
}

lis([4, 10, 4, 3, 8, 9]) // dp: [1, 2, 1, 1, 2, 3]
```

===

### 常见技巧

例子：斐波那契数列 [0, 1, 1, 2, 3, 5, 8]

===

Top-down with Memoization

递归 + 备忘录 <!-- .element: class="left" -->

```js [5|6]
const calcFib = (n) => {
  const memo = []
  const fib = (n) => {
    if (n < 2) return n
    if (memo[n]) return memo[n]
    memo[n] = fib(n - 1) + fib(n - 2)
    return memo[n]
  }
  return fib(n)
}
```

===

Bottom-up with Tabulation

从基元问题一步步解决所有相关的子问题，这通常是通过填充 n 维表来完成，然后根据表中的结果计算原始问题的解 <!-- .element: class="left" -->

```js [2|4]
const fib = (n) => {
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
```

===

### 练习题

===

<!-- .slide: class="left" -->

假设你正在爬楼梯。需要 n 阶你才能到达楼顶
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

===

```js [2|5]
var step = (n) => {
  const dp = [1, 1] // 爬到 i 层有几种方法
  if (n < 2) return dp[n]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] // 状态转移
  }
  return dp[n]
}
```

===

<!-- .slide: class="left" -->

有 1 元、3 元、5 元面值的硬币若干，要凑到 11 元需要最少几个硬币？

===

<!-- .element: class="left" -->

凑 i 元需要 n 个硬币为： dp[i] = n

dp[i]: 拿出一个 1/3/5 元硬币，凑 i - 1/i - 3/i - 5 元所需最少硬币

```js [2|4]
const calcCoin = (n) => {
  const dp = [0]
  for (let i = 1; i <= n; i++) {
    dp[i] = 1 + Math.min(dp[i - 1], dp[i - 3] || Infinity, dp[i - 5] || Infinity)
  }
  return dp[n]
}
```

===

交通费问题

![](./image/交通.png)

===

```js [1|17|22]
var prevMap = {
  S: [],
  A: [{ node: 'S', cost: 10 }],
  B: [{ node: 'S', cost: 20 }],
  C: [{ node: 'A', cost: 30 }],
  D: [
    { node: 'A', cost: 10 },
    { node: 'B', cost: 20 },
    { node: 'C', cost: 5 },
  ],
  T: [
    { node: 'C', cost: 20 },
    { node: 'D', cost: 10 },
  ],
}

const getCost = (node) => {
  const prev = prevMap[node]
  if (!prev.length) {
    return 0
  }
  return Math.min(...prev.map((x) => getCost(x.node) + x.cost))
}

getCost('T')
```

===

最长公共子序列问题 LCS

===

```js
var lcs = (s1, s2) => {
  const table = []
  for (let i = 0; i < s1.length; i++) {
    if (!table[i - 1]) table[i - 1] = []
    if (!table[i]) table[i] = []
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        table[i][j] = (table[i - 1][j - 1] || 0) + 1
      } else {
        table[i][j] = Math.max(table[i - 1][j] || 0, table[i][j - 1] || 0)
      }
    }
  }
  return table[s1.length - 1][s2.length - 1]
}
```
