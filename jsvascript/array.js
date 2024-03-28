



/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let l = 0;
    let t = 0;
    let r = matrix[0].length - 1
    let b = matrix.length - 1;

    const result = []
    while (true) {
        // console.log(l, t, r, b)
        for (let j = l;  j <= r; j++) {
            result.push(matrix[t][j])
        }
        t++;
        if (t > b) return result;

        for (let i = t;i <= b; i++ ) {
            result.push(matrix[i][r])
        }
        r--;
        if (l > r) return result;

        for (let j = r; j >= l; j--) {
            result.push(matrix[b][j])
        }
        b--;
        if (t > b) return result;

        for (let i = b; i >= t; i--) {
            result.push(matrix[i][l]);
        }
        l++;
        if (l > r) return result;
    }
};

console.log(spiralOrder([
    [1,2],[3,4]
]));