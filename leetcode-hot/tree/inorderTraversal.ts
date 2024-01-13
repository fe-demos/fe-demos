function inorderTraversal1(root: TreeNode | null): number[] {
    const result: number[] = [];

    const dfs = (node: TreeNode | null) => {
        if (node === null) return;

        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    };

    dfs(root);
    return result;
}

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let node = root;
    while (node !== null || stack.length > 0) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            const top = stack.pop();
            result.push(top.val);
            node = top.right;
        }
    }
    return result;
}
