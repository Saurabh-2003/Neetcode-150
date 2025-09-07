class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let uniqueSorted = new Set(nums);
        let maxLength = 0;
        for(let num of uniqueSorted) {
            if(!uniqueSorted.has(num-1)){
                let length = 1;
                while(uniqueSorted.has(num + length)){
                    length++;
                }
                maxLength = Math.max(maxLength, length);
            }
        }
        return maxLength;
    }
}
