
function helper(ans, n, temp, open, close){
        if(temp.length === n*2){
            ans.push(temp);
            return;
        }
        if(open < n){
            helper(ans, n, temp + '(', open+1, close);
        }
        if(close < open){
            helper(ans, n, temp + ')', open, close + 1);
        }
        return;
    }
class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    
    generateParenthesis(n) {
        let ans = [];
        helper(ans, n, '', 0, 0);
        return ans;
    }

    
    
};
