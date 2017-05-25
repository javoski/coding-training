[447. Number of Boomerangs](https://leetcode.com/problems/number-of-boomerangs/#/description)

Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

Example:
```
Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
```

给定平面上的n个点，找出其中"boomerang(回旋镖)"的数量，一个“回旋镖”是指：有两个点到另外一点距离相等的三个点，如现有三个点Pi, Pj, Pk，Pi到Pj与Pi到Pk的距离相等，则称(Pi, Pj, Pk)是一个"boomerang"。且题目说明点的顺序也是有关系的，所以(Pi, Pj, Pk)与(Pi, Pk, Pj)算作两个不同的"boomerang"。
打算HashMap来解决，每个点一个Map实例（或者用同一个Map，只是每次循环后清空），例如对于当前点Pi,其他点到Pi的距离d作为key, 到Pi距离为d的点的个数v作为值，后面找到的到Pi距离为d的点可以与前面的到Pi距离为d的点分别组成"boomerang"，所以每次找到了结果都要加上v，又因为顺序是相关的，最终结果还要x2。

最终代码如下:
```js
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    const getDistanceSquare =  (p1, p2) => {
        const dx = p1[0] - p2[0], dy = p1[1] - p2[1]
        return dx * dx + dy * dy
    }
    
    let count = 0
    for (let i = 0, len = points.length; i < len; i++) {
        const distanceMap = new Map()
        for (let j = 0; j < len; j++) {
            if (i !==j ) {
                const d = getDistanceSquare(points[i], points[j])
                if (distanceMap.has(d)) {
                    const v = distanceMap.get(d)
                    count += v
                    distanceMap.set(d, v + 1)
                }
                else distanceMap.set(d, 1)
            }
        }
    }
    return count * 2
}
```

