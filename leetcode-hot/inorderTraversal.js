// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// function inorderTraversal(root) {
//     const result = [];

//     /**
//      * @param {ListNode} node
//      */
//     const dfs = (node) => {
//         if (node === null) return;

//         dfs(node.left);
//         result.push(node.val);
//         dfs(node.right);
//     };
//     dfs(root);

//     return result;
// }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
    const result = [];

    const stack = [];
    let node = root;

    while (stack.length !== 0 || node !== null) {
        if (node === null) {
            const top = stack.pop();
            result.push(top.val);
            node = top.right;
        } else {
            stack.push(node);
            node = node.left;
        }
    }

    return result;
}
