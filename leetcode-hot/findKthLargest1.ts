export function findKthLargest1(nums: number[], k: number): number {
    const sortedK = Array.from({ length: k }, () => -Infinity);

    for (const num of nums) {
        for (let i = 0; i < k; i++) {
            if (num > sortedK[i]) {
                for (let j = k - 2; j >= i; j--) {
                    sortedK[j + 1] = sortedK[j];
                }
                sortedK[i] = num;
                break;
            }
        }
    }

    return sortedK[k - 1];
}

console.log(findKthLargest1([3, 2, 1, 5, 6, 4], 2));
