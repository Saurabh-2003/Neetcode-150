class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map1 = new Map();
        let map2 = new Map();
        // Build the frequeny map
        for (let num of nums){
            map1.set(num, (map1.get(num) || 0) + 1);

        }
        // traverse map and reverse the key and value :
        for(const [key, value] of map1.entries()){
            if(!map2.has(value)){
                map2.set(value, []);
            }
            map2.get(value).push(key);
        }

        // Find the Top K values now :
        let result = [];
        for(let i = nums.length; i> 0; i--){
            if(k <= 0){
                break;
            }
            if(map2.has(i)){
                const tempArr = map2.get(i);

                result = [...result, ...tempArr.slice(0, Math.min(k, tempArr.length))];
                k-=Math.min(k, tempArr.length);
            }
        }


        return result;
    }
}
