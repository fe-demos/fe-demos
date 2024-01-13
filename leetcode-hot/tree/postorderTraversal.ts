function postorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    const stack: TreeNode[] = [];
    const visitedNodes = new Set<TreeNode>();

    let node = root;
    while (node !== null || stack.length > 0) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            const top = stack.at(-1);
            if (visitedNodes.has(top)) {
                stack.pop();
                result.push(top.val);
            } else {
                visitedNodes.add(top);
                node = top.right;
            }
        }
    }
    return result;
}
