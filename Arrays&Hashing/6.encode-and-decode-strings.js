class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let temp = "";
        strs.forEach((value, _) => {
            temp += value.length + '#' + value;
        })

        return temp;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let strlen = "";

        for(let i=0; i < str.length; i++){
            if(str[i] !== '#'){
                strlen += str[i];
                continue;
            }

            const tempNum = Number(strlen);
            const tempStr = str.slice(i+1, i+tempNum+1);

            result.push(tempStr);
            strlen = "";
            i+=(tempNum);
        }

        return result;
    }
}
