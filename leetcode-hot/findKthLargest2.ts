export function findKthLargest2(nums: number[], k: number): number {
    const order = nums.length - k;
    const quickSort = (left: number, right: number) => {
        if (left === right) return left;

        const pivot = left;
        const pivotValue = nums[pivot];

        let i = left;
        let j = right;
        while (i < j) {
            while (nums[j] >= pivotValue && i < j) {
                j--;
            }
            nums[i] = nums[j];

            while (nums[i] < pivotValue && i < j) {
                i++;
            }
            nums[j] = nums[i];
        }
        nums[i] = pivotValue;

        if (i === order) return i;
        if (i < order) {
            return quickSort(i + 1, right);
        } else {
            return quickSort(left, i - 1);
        }
    };

    return nums[quickSort(0, nums.length - 1)];
}

console.log(findKthLargest2([3, 2, 1, 5, 6, 4], 2));
