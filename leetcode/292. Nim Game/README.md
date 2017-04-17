[292. Nim Game](https://leetcode.com/problems/nim-game/)

>You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.
>
>Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.
>
>For example, if there are 4 stones in the heap, then you will never win the game: no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.

通过简单的分析可以得出只要开始的石头数量不是4的倍数，第一个拿的人一定能赢，否则一定输。
```js
var canWinNim = function(n) {
   return n  %  4 > 0
}
```

