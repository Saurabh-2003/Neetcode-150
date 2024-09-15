class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
     evalRPN(tokens) {
        let stack = [];
        const n = tokens.length;
        const symbols = ['+', '-', '*', '/'];
        for(let i = 0; i < n; i++){
            if(symbols.includes(tokens[i])){
                const a = Number(stack.pop());
                const b = Number(stack.pop());
                let ans = tokens[i] === '/' ? Math.trunc(b/a) :
                    tokens[i] === '*' ? (b*a) :
                    tokens[i] === '+' ? (b+a) : (b-a); 
                stack.push(ans.toString());
            }else{
                stack.push(tokens[i]);
            }
        }
        return Number(stack.pop());
    };
}

