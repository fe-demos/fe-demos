/**
 * 思路：递归
 * 时间复杂度：n
 * 空间复杂度：n
 */
function preorder1(root: Node | null): number[] {
    const result: number[] = [];

    const dfs = (node: Node | null) => {
        if (node === null) return;

        result.push(node.val);
        for (const child of node.children) {
            dfs(child);
        }
    };

    dfs(root);
    return result;
}

function preorder(root: Node | null): number[] {
    const result: number[] = [];
    const stack: Node[] = [];

    let node = root;
    while (node || stack.length > 0) {
        if (node) {
            result.push(node.val);
            for (let i = node.children.length - 1; i >= 1; i--) {
                stack.push(node.children[i]);
            }
            node = node.children[0];
        } else {
            node = stack.pop();
        }
    }

    return result;
}
