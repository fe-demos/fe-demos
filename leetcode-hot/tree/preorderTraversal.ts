/**
 * 思路：递归
 * 时间复杂度：n，n 为节点数
 * 空间复杂度：树深，最差是 n
 */
export function preorderTraversal1(root: TreeNode | null): number[] {
    const result: number[] = [];

    const dfs = (node: TreeNode | null) => {
        if (node === null) return;

        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);
    return result;
}

/**
 * 思路：使用栈保存后续需要遍历的右节点
 * 时间复杂度：n，每个节点遍历一般
 * 空间复杂度：n，栈最差的时候就是树退化为链表的时候
 */
export function preorderTraversal2(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let node = root;

    while (node !== null || stack.length > 0) {
        console.log(node);
        if (node) {
            result.push(node.val);
            if (node.right) {
                stack.push(node.right);
            }
            node = node.left;
        } else {
            node = stack.pop()!;
        }
    }

    return result;
}

console.log(
    preorderTraversal2({
        val: 1,
        left: {
            val: 2,
            left: null,
            right: null,
        },
        right: {
            val: 3,
            left: null,
            right: null,
        },
    }),
);
