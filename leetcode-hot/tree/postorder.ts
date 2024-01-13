function postorder(root: Node | null): number[] {
    let result: number[] = [];
    const stack: Node[] = [];
    const visitedNodes = new Map<Node, number>();

    let node = root;
    while (node || stack.length > 0) {
        if (node) {
            stack.push(node);
            node = node.children[0];
        } else {
            const top = stack.at(-1);
            const visitedCount = visitedNodes.get(top) ?? 0;
            if (top.children.length === 0 || visitedCount === top.children.length - 1) {
                result.push(top.val);
                stack.pop();
            } else {
                visitedNodes.set(top, visitedCount + 1);
                node = top.children[visitedCount + 1];
            }
        }
    }
    return result;
}
