[453. Minimum Moves to Equal Array Elements](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/)

>Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.
>```
Example:
>
Input:
[1,2,3]
>
Output:
3
>
Explanation:
Only three moves are needed (remember each move increments two elements):
>
[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
```

有一个长度为n的整数数组，每一次操作都是将数组中的n-1个项加1，问最少多少次能使数组的每一项都相等。

题目原意是将数组的n-1项加1，其实可以等价于每次只有一项减一，所以只要找出数组中的最小值，计算每一项与最小值的差值，最后差值相加就是我们要的结果，一行代码可以搞定：
```js
var minMoves = function(nums) {
    return nums.reduce((s, n) => s + n, -nums.length * Math.min(...nums))
}
```

