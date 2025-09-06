class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let map = new Map();
        
        // First insert all into map using key hashing
        for(let s of strs) {
            let arr =  new Array(26).fill(0);
            s.split("").forEach((val, _) => {
                arr[val.charCodeAt(0) - 97]++;
            })
            let temp = "#";
            arr.forEach((val, _) => {
                temp += String(val);
            })
            if(!map.has(temp)){
                map.set(temp, []);
            }
            map.get(temp).push(s);
        }


        // Now extract all values from the map
        let result = [];
        for(const [_, value] of map){
            result.push(value);
        }

        return result;
    }
}
