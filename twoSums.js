// Two Sums Problem Using JavaScript

// Using two for loop

// var twosums = function (numArr, target) {
//     for(var i=0; i < numArr.length; i++) {
//         for(var j=1+i; j < numArr.length; j++) {
//             if(numArr[i] + numArr[j] === target) {
//                 return [i,j]
//             }
//         }
//     }
// }

// console.log(twosums([2,7,11,15], 9));

// using Hashmap obj dataType
var twoSum = function (nums, target) {
    var obj={};
    for( let i=0; i < nums.length; i++) {
        const n = target - nums[i]
        if(n in obj) {
            return [obj[n], i];
        } 
            obj[nums[i]] = i;
    }
}

console.log(twoSum([2,7,6,11,15], 8));
