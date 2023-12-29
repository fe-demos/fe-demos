/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const paths = [];
    if (root === null) return [];

    let path = [root.val];

    function dfs(node) {
        const { left, right } = node;
        if (left) {
            path.push(left.val);
            dfs(left);
            path.pop();
        }

        if (right) {
            path.push(right.val);
            dfs(right);
            path.pop();
        }

        if (left === null && right === null) {
            paths.push(path.join('->'));
        }
    }

    dfs(root);
    return paths;
};
