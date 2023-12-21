/**
 * 选择交换排序
 * 思路：
 * 循环一遍所有坑位
 * 在当前坑位再通过一层循环往后找到应该填到这个坑位的数，也就是最小的数
 * 交换当前坑位和最小数
 * 时间复杂度：n²，即便在数组已经有序的情况下，也还是 n²
 * 空间复杂度：常数级，没有使用额外空间
 * 稳定性：不稳定，例如 8, 8, 8，1。在第一次交换时前面的 8 就到后面去了
 */
export function selectSwapSort(nums: number[]) {
    // 前 length - 1 个有序了最后一个就不用处理了
    for (let i = 0, len = nums.length - 1; i < len; i++) {
        // 表示从当前坑位往后所有元素中最小的数的下标
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        // 将最小数和当前坑位交换
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
}

const testArray = [2, 1, 3, 5, 3, 0, 2];
selectSwapSort(testArray);
console.log(testArray);

// => [0, 1, 2, 2, 3, 3, 5];
