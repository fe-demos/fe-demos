/**
 * 快速排序
 *
 * 思路：和第一种快排不同点在于这里是原地修改数组将小于轴的移到轴左边，大于轴的移到轴右边
 * 时间复杂度：nlogn, 调用栈高度 logn, 每层 n
 * 空间复杂度：logn, 递归栈空间
 */
export function quickSort2(nums: number[]) {
    if (nums.length < 2) return nums;

    const sort = (left: number, right: number) => {
        if (left >= right) return;

        // 原地修改数组
        const pivot = left;
        const pivotElement = nums[pivot];
        let i = pivot;
        let j = right;
        while (i < j) {
            while (nums[j] >= pivotElement && j > i) {
                j--;
            }
            // nums[i] 被赋值后 j 位置就空出来了，所有这里先增加 i 的下标填了这个空
            nums[i] = nums[j];

            while (nums[i] <= pivotElement && i < j) {
                i++;
            }

            nums[j] = nums[i];
        }
        nums[i] = pivotElement;

        sort(left, i - 1);
        sort(i + 1, right);
    };

    sort(0, nums.length - 1);
}

const array = [4, 1, 2, 4, 5, 3, 7, 5, 0, 8];
quickSort2(array);
console.log(array);
// => [0, 1, 2, 3, 4, 4, 5, 5, 7, 8];
