class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let a = new Array(26).fill(0);
        for(let i = 0; i < s.length ; i++){
            a[s[i].charCodeAt(0)- 97]++;
        }
        for(let i = 0; i < t.length ; i++){
            a[t[i].charCodeAt(0)- 97]--;
        }
        for (let j of a){
            if(j!== 0){
                return false;
            }
        }
        return true;
    }
}
