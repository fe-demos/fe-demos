/**
 * 快速排序
 *
 * 思路：分治思想，对整个数组的排序，拆成两个子数组排序
 * 时间复杂度：nlogn, 调用栈高度 logn, 每层 n
 * 空间复杂度：n * logn, 这里使用了额外数组
 */
export function quickSort1(nums: number[]): number[] {
    if (nums.length < 2) return nums;

    const pivot = Math.floor(nums.length / 2);
    const pivotElement = nums[pivot];
    const smaller: number[] = [];
    const bigger: number[] = [];
    for (const num of [...nums.slice(0, pivot), ...nums.slice(pivot + 1)]) {
        if (num <= pivotElement) {
            smaller.push(num);
        } else {
            bigger.push(num);
        }
    }
    return [...quickSort1(smaller), pivotElement, ...quickSort1(bigger)];
}

const array = [4, 1, 2, 4, 5, 3, 7, 5, 0, 8];
console.log(quickSort1(array));
// => [0, 1, 2, 3, 4, 4, 5, 5, 7, 8];
