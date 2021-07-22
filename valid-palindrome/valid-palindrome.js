/**
 * @param {string} s
 * @return {boolean}
 */


   var isPalindrome = function(s) {
       if(s.length == 0) return true;

       const regex = /[^a-z0-9$]/gi; 
       const cleanString = [...s.toLowerCase().replace(regex, "")];

       var i=0;
       var j=cleanString.length-1;

       while(i<j) {
            if(cleanString[i] != cleanString[j]) return false;
            i++;
            j--;
       }
       return true;
   };