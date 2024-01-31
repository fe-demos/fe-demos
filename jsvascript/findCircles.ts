const tree: Record<string, string[]> = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['A'],
    D: ['A'],
};

function findCirclesInDependencies() {
    const circles: string[][] = [];
    const depsInCircle = new Set<string>();
    const dfs = (parentPath: Set<string>, pkg: string) => {
        if (parentPath.has(pkg)) {
            const newCircle = [...parentPath];
            circles.push(newCircle);
            for (const dep of newCircle) {
                depsInCircle.add(dep);
            }
        } else {
            for (const dep of tree[pkg] ?? []) {
                dfs(new Set([...parentPath, pkg]), dep);
            }
        }
    };

    for (const pkg of Object.keys(tree)) {
        dfs(new Set(), pkg);
        // if (!depsInCircle.has(pkg)) {
        // }
    }

    return circles;
}

console.log(findCirclesInDependencies());
