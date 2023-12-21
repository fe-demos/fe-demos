function binarySearch(nums: number[], left: number, right: number, value: number) {
    if (left >= right) {
        return value >= nums[left] ? left + 1 : left;
    }

    const mid = Math.floor((left + right) / 2);

    if ((value = nums[mid])) {
        let i = mid;
        for (; nums[i] !== nums[mid] && i < right + 1; i++);
        return i;
    } else if (value > nums[mid]) {
        return binarySearch(nums, mid + 1, right, value);
    } else {
        return binarySearch(nums, left, mid - 1, value);
    }
}

/**
 * 插入排序
 * 思路：从第一二个元素开始，每次按照它应该插入的顺序插到前面已经有序的元素中
 * 时间复杂度：n²，两重循环，有两个同级的二层循环，总的复杂度还是 n²
 * 空间复杂度：常数级
 * 稳定性：稳定的，二分查找到相同元素后，还需要往后继续找到第一个不同的元素位置再插入
 */
export function insertSort(nums: number[]) {
    if (nums.length < 2) return nums;

    for (let i = 1; i < nums.length; i++) {
        const value = nums[i];
        const insertPosition = binarySearch(nums, 0, i - 1, value);
        for (let j = i - 1; j >= insertPosition; j--) {
            nums[j + 1] = nums[j];
        }
        nums[insertPosition] = value;
    }
}

const array = [4, 1, 2, 4, 5, 3, 7, 5, 0, 8];
insertSort(array);
console.log(array);
