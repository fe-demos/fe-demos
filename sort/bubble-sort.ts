/**
 * 冒泡排序
 * 思路：
 * 其实也算是一种交换排序
 * 循环一遍，每次对比相邻两个元素，如果当前元素大于下一个元素就和下一个元素交换，每循环一遍可以将一个最大数交换到最右边
 * 循环 n - 1 次，那从 1 到 n 都已经有序
 * 时间复杂度：n²，在有序的情况下性能最好，n
 * 空间复杂度：常数级
 * 稳定性：稳定的，每次交换都是相邻的元素交换，当两个相等的元素相邻不会交换
 */
export function bubbleSort(nums: number[]) {
    for (let i = 0, len1 = nums.length - 1; i < len1; i++) {
        let swapped = false;
        for (let j = 0, len2 = nums.length - 1 - i; j < len2; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                swapped = true;
            }
        }
        // 如果没有交换过，说明已经有序
        if (!swapped) {
            return;
        }
    }
}

const array = [4, 1, 2, 4, 5, 3, 7, 5, 0, 8];
bubbleSort(array);
console.log(array);
// => [0, 1, 2, 3, 4, 4, 5, 5, 7, 8];
