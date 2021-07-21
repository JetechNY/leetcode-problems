/**
 * @param {character[]} chars
 * @return {number}
 */
// var compress = function(chars) {
//     let s =[]

//     for(let i = 0; i < chars.length; i++){
//         let count = 1
//         let currentLetter = chars[i]
//         while( chars[i+1] === currentLetter){
//             count ++
//             i ++
//         }
//         if ( count == 1 ){
//           s.push(currentLetter)  
//         }
//         else{
//           s.push(currentLetter)
//           s.push(count.toString())
//         }
//     }
//   chars = s.toString()
//   console.log(s)
//   return s.length 
// };

var compress = function(chars) {
let length = chars.length
let count = 1
for( let i = length- 2; i >= 0; i--){
  if( chars[i] == chars[i+1]){
    count++
  } else if ( count > 1){
    chars.splice(i + 2, count -1, ...count.toString())
    count = 1
  }
}
  if (count > 1){
    chars.splice(1, count -1, ...count.toString())
  }

  return chars.length
};