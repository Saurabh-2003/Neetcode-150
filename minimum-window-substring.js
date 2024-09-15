class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let map = new Map();
        t.split('').forEach(c => {
            map.set(c, (map.get(c) || 0) + 1);
        });
        let mapS = new Map();

        const n = s.length;
        let l = 0, r = 0;
        let ans = '';
        let size = Number.POSITIVE_INFINITY;
        
        while (r < n) {
            mapS.set(s[r], (mapS.get(s[r]) || 0) + 1);
            
            let count = 0;
            for (const [key, value] of map) {
                if (mapS.get(key) >= value) {
                    count++;
                }
            }

                while (l <= r && count === map.size) {
                    if (r - l + 1 < size) {
                        size = r - l + 1;
                        ans = s.substring(l, r + 1);
                    }
                    mapS.set(s[l], mapS.get(s[l]) - 1);
                    if (map.has(s[l]) && mapS.get(s[l]) < map.get(s[l])) {
                        count--;
                    }
                    l++;
                }
                r++;
        }

        return ans;
    }
}
