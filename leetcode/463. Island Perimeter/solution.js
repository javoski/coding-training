/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var result = 0
    for (var i = 0, len1 = grid.length; i < len1; i++) {
        for (var j = 0, len2 = grid[i].length; j < len2; j++) {
            if (grid[i][j]) {
                result += 4
                if (i > 0 && grid[i - 1][j]) result -= 2
                if (j > 0 && grid[i][j - 1]) result -= 2
            }
        }
    }
    return result
}