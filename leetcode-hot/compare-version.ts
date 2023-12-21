function compareVersion(version1: string, version2: string): number {
    const v1 = version1.split('.').map((numStr) => Number.parseInt(numStr));
    const v2 = version2.split('.').map((numStr) => Number.parseInt(numStr));

    const len = Math.max(v1.length, v2.length);
    for (let i = 0, suffixCount = len - v1.length; i < suffixCount; i++) {
        v1.push(0);
    }
    for (let i = 0, suffixCount = len - v2.length; i < suffixCount; i++) {
        v2.push(0);
    }

    for (let i = 0; i < len; i++) {
        if (v1[i] > v2[i]) {
            return 1;
        } else if (v1[i] < v2[i]) {
            return -1;
        }
    }

    return 0;
}

console.log(compareVersion('1.0.1', '1'));
