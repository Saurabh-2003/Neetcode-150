class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        nums.forEach((value, index) => {
            map.set(value, index);
        })

        for (let [index, value] of nums.entries()) {
            if(map.has(target - value)){
                if(map.get(target - value) !== index)
                    return [index, map.get(target - value)].sort();
            }
        }

        return [-1, -1];
    }
}
