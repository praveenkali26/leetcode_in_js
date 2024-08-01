/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    // if(s.length<=1) return s.length;

    let max =0, l=0;
    //let seen = new Map();
     let seen = {}
    for(let r=l; r<s.length; r++){
        let curr = s[r];
        //let prev = seen.get(curr);
         let prev = seen[curr]
        if(prev >= l){
            l=prev+1
        }
        //seen.set(curr, r) //set map with key is ele and value is the index
         seen[curr] = r
        max = Math.max(max, r-l+1)
    }
    return max;
};
console.log(lengthOfLongestSubstring("pwwkew"));