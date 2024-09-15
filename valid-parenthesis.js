class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let i = 0;
        while( i < s.length){
            if((s[i] === '(') || (s[i] === '{') || (s[i] === '[')){
                stack.push(s[i]);
            }else{
                const top = stack.pop();
                if(!top || (top === '(' && s[i] != ')') || (top === '[' && s[i] != ']') || (top === '{' && s[i] != '}') ){
                    return false;
                }
            }
            i++;
        }
        if(stack.length > 0 || i < s.length){
            return false;
        }
        return true;
    }
}
