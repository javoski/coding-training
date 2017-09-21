[657. Judge Route Circle](https://leetcode.com/problems/judge-route-circle/description/)

>Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.
>
>The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.
>
>Example 1:
>```
>Input: "UD"
>Output: true
>```
>Example 2:
>```
>Input: "LL"
>Output: false
>```


很简单的题，只要判断'L'与'R'、'U'与'D'的数目是否各自相等即可，因为不想用 switch case，所以使用一个 Map 来存储计数。
```js
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const dirs = { L: 0, R: 0, U: 0, D: 0 }
    for (let i = 0; i < moves.length; i++) {
        dirs[moves.charAt(i)]++
    }
    return dirs.L === dirs.R && dirs.D === dirs.U
}
```


