
// 43-masala
// function sanitizeString(str) {
//     const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let sanitizedStr = '';
//
//     for (let char of str) {
//         if (alpha.indexOf(char) !== -1) {
//             sanitizedStr += char;
//         }
//     }
//
//     return sanitizedStr;
// }
//
// console.log(sanitizeString("he@llo! w0rld#")); // "hello0rld"




// 44-masala
// function separatePositivesAndNegatives(arr) {
//     let negatives = []
//     let positives  = []
//     arr.forEach(element => {
//       if (element <= 0) {
//           negatives.push(element)
//       }else {
//           positives.push(element)
//       }
//     })
// return {positives: positives, negatives: negatives }
// }
//
// console.log(separatePositivesAndNegatives([1, -2, 3, -4, 5]));
// // { positives: [1, 3, 5], negatives: [-2, -4] }

// 45-masala
// function singles(array) {
//     for (var index = 0, single = []; index < array.length; index++) {
//         if (array.indexOf(array[index], array.indexOf(array[index]) + 1) == -1)
//             single.push(array[index]);
//     };
//     return single;
// };
//
// var items = [2, 3, 4, 2, 3, 5, 4];
//
// console.log(singles( items ))

// 46-masala
// function elementCounts(arr) {
// let count = {};
// arr.forEach(function (i) {
//     count[i] = (count[i] || 0) + 1;
// })
//     return count;
// }
//
// console.log(elementCounts([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
// // { 1: 1, 2: 2, 3: 3, 4: 4 }

// 47-masala
// function swapElements(arr, k) {
//  if(k >= 0 && k < arr.length) {
//      let lastinde = arr.length -1;
//      let lastelement = arr[lastinde];
//      arr[k] = lastelement;
//  }
//  return arr;
// }
//
// console.log(swapElements([1, 2, 3, 4, 5], 2)); // [1, 2, 5, 4, 3]