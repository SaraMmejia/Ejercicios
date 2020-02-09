// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.
// Example 1:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:
// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
// Example 3:
// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".
// Example 4:
// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'


function balancedStringSplit( str ) { 
    debugger
    let balance = 0;
    let erres = 0; 
    let eles = 0;

    for ( let i = 0; i < str.length; i++ ) {
      
        if ( str[i] === "R" ) {
            erres++
        } else if ( str[i] === "L" ){
            eles++
        }

        if ( erres === eles ){
            balance++
            erres = 0;
            eles = 0; 
        }   
    }
    return balance
}

console.log(balancedStringSplit( "RRLLLLRRRLR" ));

























    // class Solution {
    //     public:
    //         int balancedStringSplit(string s) {
    //             int bal = 0, ans = 0;
    //             for (const auto &n: s) {
    //                 if (n == 'L') {
    //                     bal ++;
    //                 } else {
    //                     bal --;
    //                 }
    //                 if (bal == 0) {
    //                     ans ++;
    //                 }
    //             }
    //             return ans;
    //         }
    //     };



 // Dada una cadeja S balanceada divide esta en la máxima cantidad de cadenas balanceadas 