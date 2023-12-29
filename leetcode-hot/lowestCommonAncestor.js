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
var binaryTreePaths = function (root, searchedNode) {
    if (root === null) return [];

    let path = [root];
    let foundPath;

    function dfs(node) {
        if (foundPath) return;

        if (node === searchedNode) {
            foundPath = [...path];
            return;
        }

        const { left, right } = node;
        if (left) {
            path.push(left);
            dfs(left);
            path.pop();
        }

        if (right) {
            path.push(right);
            dfs(right);
            path.pop();
        }
    }

    dfs(root);
    return foundPath;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    const path1 = binaryTreePaths(root, p);
    const path2 = binaryTreePaths(root, q);
    let i = 0;
    for (let len = Math.min(path1.length, path2.length); i < len && path1[i] === path2[i]; i++);
    return path1[i - 1];
};
