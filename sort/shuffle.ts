/**
 * 洗牌算法
 */
export function shuffle(nums: number[]) {
    for (let i = 0, last = nums.length - 2; i <= last; i++) {
        const randIndex = i + Math.floor(Math.random() * (nums.length - i));
        [nums[i], nums[randIndex]] = [nums[randIndex], nums[i]];
    }
    return nums;
}

const nums = [1, 2, 3, 4];
console.log(shuffle(nums));
